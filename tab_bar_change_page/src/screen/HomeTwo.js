import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Home two</Text>
      <Text>{props.route.params.name}</Text>
      <Button
        title="change first page"
        onPress={() => props.route.params.functionA('bill')}
      />
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
