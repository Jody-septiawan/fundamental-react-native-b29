import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

//Import Screen
import Props from './src/screens/props';

export default function App() {
  return (
    <View style={{ marginTop: 40 }}>
      <StatusBar />
      <Props />
    </View>
  );
}
