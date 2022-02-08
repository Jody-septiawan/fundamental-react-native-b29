import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

export default function Map() {
  // Create Dummy Data With Array
  const cars = ['BMW', 'Mercedes-Benz', 'Bugati', 'Lexus'];

  return (
    <View>
      <StatusBar />
      <Text>This is List on React With MAP</Text>
      {cars.map((car, idx) => (
        <Text key={idx}>{car}</Text>
      ))}
    </View>
  );
}
