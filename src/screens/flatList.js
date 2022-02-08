import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function List() {
  // Make Dummy Data with Array
  const cars = [
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
    { name: 'BMW' },
    { name: 'Mercedez-Benz' },
    { name: 'Bugati' },
    { name: 'Lexus' },
  ];

  return (
    <View>
      <StatusBar />
      <FlatList
        data={cars}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}
