# 💰 Crypto Wallet App

Una aplicación móvil construida con **Expo** y **React Native** que simula una wallet de criptomonedas. Soporta login simulado, consulta de balances, historial de transacciones, envío/recepción de criptos y visualización de precios **mockeados localmente**.

---

## 🚀 Características

- ✅ Splash Screen con transición automática
- ✅ Pantalla de Login simulada
- ✅ Home con balance total y por activo
- ✅ Enviar y Recibir criptos (con validación de saldo)
- ✅ Historial de transacciones locales
- ✅ Navegación con `expo-router` (File-based Routing)
- ✅ Estado global con Zustand
- ✅ Tema oscuro por defecto (desde `app.json`)
- ✅ Código limpio con TypeScript

---

## 📁 Estructura de carpetas

```
/app
  /(tabs)            # Layout para navegación principal
    home.tsx         # Pantalla principal
    send.tsx         # Enviar cripto
    receive.tsx      # Recibir cripto
    transactions.tsx # Historial
  login.tsx          # Pantalla de login
  _layout.tsx        # Layout raíz con control de rutas y login
/assets              # Imágenes, íconos, splash
/components          # Componentes reutilizables
/services/mock       # Precios y transacciones simuladas
/store               # Estado global con Zustand
/utils               # Funciones auxiliares (formatos, helpers)
app.json             # Configuración Expo
```

---

## ⚙️ Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/crypto-wallet-app.git
cd crypto-wallet-app
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npx expo start
```

4. Escanea el código QR con [Expo Go](https://expo.dev/client) o usa un emulador.

---

## 🧪 Datos Simulados (Mock)

- Precios en USD predefinidos en:

```ts
// /services/mock/prices.ts
export const mockPrices = {
  bitcoin: { usd: 64000 },
  ethereum: { usd: 3500 },
  tether: { usd: 1.0 },
};
```

- Transacciones fijas:

```ts
// /services/mock/transactions.ts
export const mockTransactions = [
  {
    id: '1',
    date: '2025-06-08T16:34:00Z',
    type: 'receive',
    crypto: 'BTC',
    amount: 0.01,
  },
  {
    id: '2',
    date: '2025-06-07T13:20:00Z',
    type: 'send',
    crypto: 'ETH',
    amount: 0.05,
  },
  {
    id: '3',
    date: '2025-06-05T09:12:00Z',
    type: 'receive',
    crypto: 'USDT',
    amount: 200,
  },
  {
    id: '4',
    date: '2025-06-03T21:45:00Z',
    type: 'send',
    crypto: 'BTC',
    amount: 0.005,
  },
];
```

---

## 📱 Funcionalidad clave

| Pantalla   | Descripción |
|------------|-------------|
| `Login`    | Simula login con correo |
| `Home`     | Muestra balances en USD y por cripto |
| `Send`     | Permite enviar monto simulado |
| `Receive`  | Muestra dirección + QR + copiar |
| `History`  | Lista de transacciones locales |

---

## 🧠 Estado Global

Estado gestionado con **Zustand**, incluyendo:

- `isLoggedIn`: indica si el usuario está autenticado
- `balances`: saldo de cada cripto
- `transactions`: historial de operaciones


## 📄 Licencia

MIT © 2025
