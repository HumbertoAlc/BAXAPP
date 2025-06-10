import { useCryptoStore } from '@/store/cryptoStore';
import { useRouter } from 'expo-router';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();
    const balances = useCryptoStore(state => state.balances);
    const total = Object.values(balances).reduce((sum, { usd }) => sum + usd, 0);
    const { logout } = useCryptoStore();


    function handleLogout() {
        logout(); // cambia isLoggedIn a false
        router.replace('/login'); // navega a login
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Balance total:</Text>
            <Text style={styles.balance}>${total.toFixed(2)}</Text>

            <FlatList
                data={Object.entries(balances)}
                keyExtractor={([symbol]) => symbol}
                renderItem={({ item }) => {
                    const [symbol, { amount, usd }] = item;
                    return (
                        <View style={styles.row}>
                            <Text style={{ color: 'white' }} >{symbol}</Text>
                            <Text style={{ color: 'white' }}>{amount} {symbol}</Text>
                            <Text style={{ color: 'white' }}>${usd.toFixed(2)}</Text>
                        </View>
                    );
                }}
            />

            <Button title="Cerrar sesión" onPress={handleLogout} />


        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 20, marginBottom: 8, color: 'white' },
    balance: { fontSize: 28, marginBottom: 16, color: 'white' },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
});
