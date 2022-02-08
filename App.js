import React from 'react';
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme } from 'native-base';

// Import font with Expo
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
} from '@expo-google-fonts/balsamiq-sans';

// Import Container
import Container from './Container';

export default function App() {
  // Load Font with Expo

  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic,
  });

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: 'BalsamiqSans_400Regular',
        italic: 'BalsamiqSans_400Regular_Italic',
      },
    },
  };

  // Setup Theme
  const customeColor = {
    primary: {
      50: '#5ab2e6',
      300: '#1e93d6',
      600: '#156594',
      900: '#073854',
    },
    danger: {
      50: '#ed8779',
      300: '#d45a4a',
      600: '#b32c1b',
      900: '#61150b',
    },
  };

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: 'BalsamiqSans',
      body: 'BalsamiqSans',
      mono: 'BalsamiqSans',
    },
    config: {
      initialColorMode: 'dark',
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
