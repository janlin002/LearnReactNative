import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen(props) {
  const passProps = props.route.params.passProps;
  return (
    <View style={styles.container}>
      <Text>編號： {passProps.animal_subid}</Text>
      <Text>顏色： {passProps.animal_colour}</Text>
      <Image
        source={{
          uri: passProps.album_file
            ? passProps.album_file
            : 'https://asms.coa.gov.tw/amlapp/upload/pic/4b8678ef-0967-494e-98b6-123e545be5df_org.jpg',
        }}
        style={{ width: 400, height: 300 }}
      />
      <StatusBar style="auto" />
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
