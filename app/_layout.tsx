import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    // amiri:require('../assets/fonts/Amiri-Bold.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="splashScreen3" options={{ headerShown: false }} />
        <Stack.Screen name="splashScreen4" options={{ headerShown: false }} />
        <Stack.Screen name="splashScreen5" options={{ headerShown: false }} />
        <Stack.Screen name="splashScreen6" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="forgotPassword" options={{ headerTitle:'Passwordless Sign-in',  headerTintColor:'black', headerBackButtonMenuEnabled:false,headerBackVisible:false, headerTitleAlign:'center',    headerStyle:{backgroundColor:'#E4258F' }}}   />
<Stack.Screen name='(tabs)' options={{headerShown:false}}/>
      </Stack>

  );
}