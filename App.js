import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

//Import Screen
import State from './src/screens/state';

export default function App() {
  return (
    <View style={{ marginTop: 40 }}>
      <StatusBar />
      <State />
    </View>
  );
}
