import { useCryptoStore } from '@/store/cryptoStore';
import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect, useRef } from 'react';

export default function RootLayout() {
    const router = useRouter();
    const isLoggedIn = useCryptoStore();
    const hasNavigated = useRef(false);

    const segments = useSegments();
    

    useEffect(() => {

        const path = '/' + segments.join('/');

        if (hasNavigated.current) return;

        console.log('path', path, isLoggedIn)

        if (!isLoggedIn && path.startsWith('/(tabs)')) {
            router.replace('/login');
            hasNavigated.current = true;
        } else if (isLoggedIn && (path === '/login' || path === '/')) {
            router.replace('/(tabs)');
            hasNavigated.current = true;
        }
    }, [isLoggedIn, router.pathname]);

    return (
        <ThemeProvider value={DarkTheme}>
            <Slot />
        </ThemeProvider>
    )
}
// import { CryptoProvider } from '@/store/cryptoStore';
// import { Slot } from 'expo-router';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// export default function RootLayout() {
//     return (
//         <SafeAreaProvider>
//             <CryptoProvider>
//                 <Slot />
//             </CryptoProvider>
//         </SafeAreaProvider>
//     );
// }
