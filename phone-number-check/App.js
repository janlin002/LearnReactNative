import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import MyButton from './src/Component/Button';

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
  const buttonClick = () => {
    console.log('click');
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
        <Text style={{ color: 'red', fontSize: 20, textAlign: 'center' }}>
          {errMes}
        </Text>
      </View>
      <Text style={{ paddingTop: 50 }}>您輸入的電話號碼是：</Text>
      <Text>{inputVal}</Text>
      <View
        style={{
          backgroundColor: 'pink',
          width: 150,
          height: 40,
          borderRadius: '50%',
          borderColor: 'red',
          textAlign: 'center',
        }}
      >
        <Button title="click" color="black" />
      </View>
      <TouchableHighlight
        style={{
          backgroundColor: 'red',
          width: 150,
          height: 40,
          textAlign: 'center',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
        }}
        onPress={() => console.log('click')}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={{
          backgroundColor: '#010023',
          color: 'white',
          width: 150,
          height: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }}
        onPress={() => console.log('TouchableOP')}
      >
        <Text style={{ color: 'white' }}>TouchableOpacity</Text>
      </TouchableOpacity>
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{
          uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1b8d5cde-e19e-4807-85d0-b60f6b500010-profile_image-70x70.png',
        }}
      />
      <MyButton text={'other component'} onPress={() => buttonClick()} />
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
