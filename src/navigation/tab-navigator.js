import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();
import { ActionSheet, Button } from '@ant-design/react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Header } from "react-native-elements";

const BottomTab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Settings"
      history={false}
      shifting={true}
      activeColor="#000">
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen name="Settings" component={SettingsScreen} />
      <BottomTab.Screen
        name="Settings2"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="settings" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;

function TabBarIcon(props: { name: string; color: string }) {
  return (
    <View style={{backgroundColor: 'blue', flex: 1}}>
      <Icon size={25} name="check" style={{marginBottom: -18}} {...props} />
    </View>
  );
}

const TabOneStack = createStackNavigator();
function TabOneNavigator() {
  return (
    <TabOneStack.Navigator initialRouteName="TabOneScreen" headerMode="none" history={false} >
      <TabOneStack.Screen name="TabOneScreen" component={HomeScreen} />
      <TabOneStack.Screen name="TabOneScreen2" component={SettingsScreen} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();
function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={SettingsScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function HomeScreen(props) {

    this.showActionSheet = () => {
        const BUTTONS = [
            'Operation1',
            'Operation2',
            'Operation3',
            'Delete',
            'Cancel',
        ];
        ActionSheet.showActionSheetWithOptions(
            {
                title: 'Title',
                message: 'Description',
                options: BUTTONS,
                cancelButtonIndex: 4,
                destructiveButtonIndex: 3,
            },
            buttonIndex => {
                //this.setState({ clicked: BUTTONS[buttonIndex] });
            }
        );
    };

  return (
    <>

        <View style={[{ padding: 8 }]}>
            <Button onPress={this.showActionSheet}>showActionSheet</Button>
        </View>
        <TouchableOpacity>
            <Text>Press Here</Text>
        </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Detail" onPress={() => props.navigation.navigate('TabOneScreen2')}>Go to Detail</Button>
        <Text>Tab Home</Text>
      </View>
    </>
  );
}
