import { useEffect, useRef } from 'react';
import { useRouter, useSegments, Slot } from 'expo-router';
import { useCryptoStore } from '@/store/cryptoStore';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';

export default function RootLayout() {
  const isLoggedIn = useCryptoStore((state) => state.isLoggedIn);
  const router = useRouter();
  const segments = useSegments();
  const hasNavigated = useRef(false);

  useEffect(() => {
    // ✅ Evita navegar hasta que los segmentos estén listos
    if (segments.length === 0) return;

    if (hasNavigated.current) return;

    const path = '/' + segments.join('/');

    if (!isLoggedIn && path.startsWith('/(tabs)')) {
      router.replace('/login');
      hasNavigated.current = true;
    } else if (isLoggedIn && (path === '/login' || path === '/')) {
      router.replace('/(tabs)');
      hasNavigated.current = true;
    }
  }, [isLoggedIn, segments]);

  return (
    <ThemeProvider value={DarkTheme}>
      <Slot />
    </ThemeProvider>
  );
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
