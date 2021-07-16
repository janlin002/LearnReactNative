import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(props) {
  const passProps = props.route.params.passProps;
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>{passProps.note}</Text>
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
