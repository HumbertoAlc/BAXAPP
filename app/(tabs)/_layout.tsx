import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio', tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="send"
                options={{
                    title: 'Enviar', tabBarIcon: ({ color, size }) => (
                        <Ionicons name="send" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="receive"
                options={{
                    title: 'Recibir', tabBarIcon: ({ color, size }) => (
                        <Ionicons name="qr-code" size={size} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="transactions"
                options={{
                    title: 'Historial', tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" size={size} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}
