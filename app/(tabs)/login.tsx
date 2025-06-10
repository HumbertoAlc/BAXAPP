import { useCryptoStore } from '@/store/cryptoStore';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const router = useRouter();
    const login = useCryptoStore((state) => state.login);

    const handleLogin = () => {
        login();
        router.replace('/(tabs)');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            <Text style={{ fontSize: 24, marginBottom: 20, color: 'white' }}>Iniciar sesión</Text>
            <TextInput
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    padding: 10,
                    marginBottom: 20,
                }}
                keyboardType="email-address"
                autoCapitalize="none"
            />
             <TextInput
                placeholder="Password"
                value={email}
                onChangeText={setEmail}
                style={{
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    padding: 10,
                    marginBottom: 20,
                }}
                keyboardType="default"
                autoCapitalize="none"
            />
            <Button title="Continuar" onPress={handleLogin} />
        </View>
    );
}
