import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Tela1() {
  return (
    <View>
      <Text>Tela 1</Text>
      <Image source={'../assets/xbox.png'} style={{ width: 50, height: 50 }} />
    </View>
  );
}
