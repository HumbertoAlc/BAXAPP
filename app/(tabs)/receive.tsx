import * as Clipboard from 'expo-clipboard';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function ReceiveScreen() {
    const address = '0xABCDEF1234567890';

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(address);
        alert('Dirección copiada al portapapeles');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu dirección:</Text>
            <Text selectable style={styles.address}>{address}</Text>

            <Image
                source={require('@/assets/qr-placeholder.png')} // reemplázalo con un QR real si quieres
                style={{ width: 200, height: 200, marginVertical: 20 }}
            />

            <Button title="Copiar dirección" onPress={copyToClipboard} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', padding: 20 },
    title: { fontSize: 20, marginBottom: 8, color: 'white' },
    address: { fontSize: 16, textAlign: 'center', color: 'white' },
});
