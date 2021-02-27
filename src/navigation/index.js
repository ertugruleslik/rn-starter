import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, TouchableOpacity } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

import TabNavigation from './tab-navigator';

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Tab" headerMode="none">
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Seti" component={Seti} />
    </Stack.Navigator>
  );
};

function HomeScreen(props) {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title="Detail" onPress={() => props.navigation.push('Seti')}></Button>
        <Text>Home Screen Default</Text>
      </View>
    </>
  );
}

function Seti() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Detay!</Text>
    </View>
  );
}

