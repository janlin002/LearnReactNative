import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomePage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'red',
        },
        headerBackTitle: '返回',
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'ios-add-circle';
            } else if (route.name === 'Profile') {
              iconName = 'ios-albums';
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
