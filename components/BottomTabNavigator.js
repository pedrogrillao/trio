import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Xbox"
        component={Tela1}
        options={{
          tabBarIcon: ({ size }) => (
            <Image source={require('../assets/xbox.png')} style={{ width: size, height: size }} />
          ),
        }}
      />
      <Tab.Screen
        name="playstation"
        component={Tela2}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/ps.png')} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="nintendo"
        component={Tela3}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../assets/nintendo.png')} style={{ width: size, height: size, tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
