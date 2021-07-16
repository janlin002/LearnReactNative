import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App(props) {
  const [name, setName] = useState('jan');
  const clickHandler = (msg) => {
    setName(msg);
  };
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="to Home Two"
        onPress={() =>
          props.navigation.push('HomeTwo', {
            name: 'jan',
            functionA: (msg) => clickHandler(msg),
          })
        }
      />
      <Text>{name}</Text>
    </View>
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
