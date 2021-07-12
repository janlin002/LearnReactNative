import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './src/screen/Home';
import Profile from './src/screen/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTwo from './src/screen/HomeTwo';
import ProfilesTwo from './src/screen/ProfileTwo';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回',
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeTwo" component={HomeTwo} />
    </Stack.Navigator>
  );
}

function ProfilesPage() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="ProfilesTwo" component={ProfilesTwo} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'ios-share-social-sharp';
            } else if (route.name === 'Profiles') {
              iconName = 'ios-trash-outline';
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
        <Tab.Screen name="Profiles" component={ProfilesPage} />
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
