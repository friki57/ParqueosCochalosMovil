import React, { Component } from "react";
import { View,  Text, Alert, TouchableOpacity } from 'react-native';

import Inicio from "./../Pantallas/Inicio";
import Actual from "./../Pantallas/Actual";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();   //Abajo
//const Tab = createTopTabNavigator();   //Arriba

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , padding: 20, borderWidth: 0.5, backgroundColor: isFocused ? '#E79A32' : '#0B313F' }}
          >
            <Text style={{ color: isFocused ? '#fff' : '#fff' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default class NavegacionAbajo extends Component {
  render()
  {
    console.disableYellowBox = true;
    return (

        <Tab.Navigator
          tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen name="Mapa" component={Inicio} />
          <Tab.Screen name="Actual" component={Actual} />
        </Tab.Navigator>

    );
  }
}
