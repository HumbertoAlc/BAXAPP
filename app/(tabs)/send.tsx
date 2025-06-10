import { useCryptoStore } from '@/store/cryptoStore';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SendScreen() {
    const [symbol, setSymbol] = useState('BTC'); // puedes hacer un selector real después
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const { balances, send } = useCryptoStore();
    const router = useRouter();

    const available = balances[symbol]?.amount || 0;

    const handleSend = () => {

        console.log(available)

        const amt = parseFloat(amount);
        if (!address) {
            Alert.alert('Error', 'Verifica los datos ingresados');
            return;
        }

        // Simula envío
        setTimeout(() => {
            console.log('amt', amt)
            send(symbol, amt);
            router.replace('/(tabs)');
        }, 1500);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enviar {symbol}</Text>
            <Text>Disponible: {available} {symbol}</Text>

            <TextInput
                placeholder="Monto"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                style={styles.input}
            />
            <TextInput
                placeholder="Dirección destino"
                value={address}
                onChangeText={setAddress}
                style={styles.input}
            />
            <Button title="Confirmar" onPress={handleSend} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 22, marginBottom: 12, color: 'white' },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginVertical: 10,
        color: 'white'
    },
});
