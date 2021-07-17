import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as StorageHelper from '../../Helpers/StorageHelper';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { changeName } from '../Redux/action';

export default function Setting() {
  const myNewName = useMappedState((state) => state.newName);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <TextInput
        style={{
          height: 30,
          width: 100,
          backgroundColor: 'black',
          color: 'white',
        }}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Text>{name}</Text>
      <Text>{myNewName}</Text>
      <Button
        title="redux 按紐"
        onPress={() => dispatch(changeName(name))}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          width: 10,
          height: 10,
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
