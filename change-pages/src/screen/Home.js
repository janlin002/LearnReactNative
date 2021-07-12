import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      {/* <Text>Home screen</Text>
      <StatusBar style="auto" /> */}
      <Text>Home</Text>
      <Button
        title="to profile"
        onPress={() => {
          props.navigation.push('Profile');
        }}
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
