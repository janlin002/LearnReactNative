import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Profiles</Text>
      <Button
        title="To Profiles Two"
        onPress={() => props.navigation.push('ProfilesTwo')}
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
