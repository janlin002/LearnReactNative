import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('jan');
  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [errMes, setErrMes] = useState('');
  const clickHandler = () => {
    setName('bill');
    console.log('click');
  };
  const inputLen = () => {
    if (inputVal.length === 10) {
      setErrMes('輸入成功!');
    } else if (inputVal.length > 10) {
      setErrMes('好像輸入太多數字摟');
    } else {
      setErrMes('好像少輸入東西了');
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={{
            height: 30,
            width: 150,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={(text) => setInputVal(text)}
          value={inputVal}
          keyboardType={'numeric'}
          placeholder="請輸入電話"
          maxLength={10}
          secureTextEntry={true}
        />
        <Button
          title="送出"
          color="blue"
          onPress={() => inputLen()}
          style={{ borderWidth: '1', borderColor: 'black' }}
        />
        <Text style={{ color: 'red', fontSize: '20', textAlign: 'center' }}>
          {errMes}
        </Text>
      </View>
      <Text style={{ paddingTop: 50 }}>您輸入的電話號碼是：</Text>
      <Text>{inputVal}</Text>
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
  inputStyle: {
    height: 10,
    width: 50,
    borderRadius: 0,
    borderColor: '#aaa',
  },
});
