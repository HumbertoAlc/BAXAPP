import { ReactNode } from 'react';
import { create } from 'zustand';

type Balance = {
    amount: number;
    usd: number;
};

type CryptoState = {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
    balances: Record<string, Balance>;
    transactions: {
        date: string;
        type: 'send' | 'receive';
        symbol: string;
        amount: number;
    }[];
    setIsLoggedIn: (value: boolean) => void;
    send: (symbol: string, amount: number) => void;
    receive: (symbol: string, amount: number) => void;
};

export const useCryptoStore = create<CryptoState>((set) => ({
    isLoggedIn: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
    balances: {
        BTC: { amount: 0.015, usd: 900.5 },
        ETH: { amount: 0.2, usd: 720 },
        USDT: { amount: 1000, usd: 1000 },
    },
    transactions: [],
    setIsLoggedIn: (value) => set({ isLoggedIn: value }),
    send: (symbol, amount) =>
        set((state) => {
            const balance = state.balances[symbol];
            return {
                balances: {
                    ...state.balances,
                    [symbol]: {
                        ...balance,
                        amount: balance.amount - amount,
                        usd: (balance.amount - amount) * (balance.usd / balance.amount),
                    },
                },
                transactions: [
                    {
                        date: new Date().toISOString(),
                        type: 'send',
                        symbol,
                        amount,
                    },
                    ...state.transactions,
                ],
            };
        }),
    receive: (symbol, amount) =>
        set((state) => {
            const balance = state.balances[symbol];
            return {
                balances: {
                    ...state.balances,
                    [symbol]: {
                        ...balance,
                        amount: balance.amount + amount,
                        usd: (balance.amount + amount) * (balance.usd / balance.amount),
                    },
                },
                transactions: [
                    {
                        date: new Date().toISOString(),
                        type: 'receive',
                        symbol,
                        amount,
                    },
                    ...state.transactions,
                ],
            };
        }),
}));

export const CryptoProvider = ({ children }: { children: ReactNode }) => children;
