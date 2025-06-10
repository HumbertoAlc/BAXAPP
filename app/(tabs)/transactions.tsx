import { useCryptoStore } from '@/store/cryptoStore';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function TransactionsScreen() {
    const transactions = useCryptoStore(state => state.transactions);

    console.log(transactions)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Historial de transacciones</Text>

            <FlatList
                data={transactions}
                keyExtractor={(_, i) => i.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.type}>
                            {item.type === 'send' ? 'Enviado' : 'Recibido'}
                        </Text>
                        <Text>
                            {item.amount} {item.symbol}
                        </Text>
                        <Text style={styles.date}>
                            {new Date(item.date).toLocaleString('es-ES')}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, marginBottom: 12, color: 'white' },
    row: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    type: { fontWeight: 'bold' },
    date: { color: '#666', fontSize: 12 },
});
