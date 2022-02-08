import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Event() {
  // Create Function Here
  function Greeting() {
    return alert('Halo, selamat siang semuanya');
  }

  return (
    <View>
      <Text>Jika menekan 'Click Here' akan muncul alert</Text>
      <TouchableOpacity onPress={() => alert('Hallo apa kabar')}>
        <Text>Click Here</Text>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>
        Jika menekan 'Greeting' akan muncul alert
      </Text>
      <TouchableOpacity onPress={Greeting}>
        <Text>Greeting</Text>
      </TouchableOpacity>
    </View>
  );
}
