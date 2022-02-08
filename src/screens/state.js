import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function State() {
  // Init State
  const [counter, setCounter] = useState(10);

  //Create Function Add
  function add() {
    setCounter(counter + 1);
  }

  //Create Function Less
  function less() {
    setCounter(counter - 1);
  }

  return (
    <View>
      <StatusBar />
      <Text>{counter}</Text>

      <TouchableOpacity onPress={add}>
        <Text>Add</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={less}>
        <Text>Less</Text>
      </TouchableOpacity>
    </View>
  );
}
