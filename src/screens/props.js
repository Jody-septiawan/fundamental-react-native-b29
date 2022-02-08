import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image } from 'react-native';

import List from '../components/list';

export default function Props() {
  // Create variable to insert link Image
  let pic = {
    uri: 'https://elitetraveler.com/wp-content/uploads/2019/07/Screen-Shot-2019-07-05-at-10.31.44-768x513.png',
  };

  return (
    <View>
      <StatusBar />

      <Text>On the image element using the default props, namely source</Text>
      <Image source={pic} style={{ width: '100%', height: 200 }} />

      <List data="BMW" />
      <List data="Mercedes-Benz" />
      <List data="Lamborghini" />
    </View>
  );
}
