import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import * as StorageHelper from './src/Helper/StorageHelper';

export default function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    let nameInfo = await StorageHelper.getUserToken('name');
    console.log(nameInfo, 'nameInfo');
    if (nameInfo) {
      setName(nameInfo);
    }
  };

  const setUserName = async () => {
    try {
      await StorageHelper.setUserToken('name', name);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{
          width: 200,
          height: 30,
          backgroundColor: 'orange',
          color: 'black',
          textAlign: 'center',
        }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text>Hello {name}!</Text>
      <TouchableHighlight
        style={{
          width: 100,
          height: 20,
          backgroundColor: 'pink',
          marginTop: 10,
        }}
        onPress={() => setUserName()}
      >
        <Text style={{ textAlign: 'center' }}>Change Name</Text>
      </TouchableHighlight>
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
