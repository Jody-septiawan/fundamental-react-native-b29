import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Form() {
  return (
    <View style={style.container}>
      <Text style={style.header}>Sign In</Text>

      <Text style={style.text}>Email</Text>
      <TextInput style={style.input} />

      <Text style={style.text}>Password</Text>
      <TextInput style={style.input} />

      <TouchableOpacity style={style.button}>
        <Text style={style.textButton}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

// Create Variable for CSS
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    color: '#0ba380',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#19b08d',
  },
  input: {
    height: 45,
    backgroundColor: '#a5f0de',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0ba380',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
