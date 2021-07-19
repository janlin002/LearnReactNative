import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function Home(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const url =
      'https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL';
    fetch(url)
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((err) => console.log(err));
  };
  const showClickItem = (cases) => {
    props.navigation.push('HomeScreen', { passProps: cases });
  };

  const renderData = (cases) => {
    return (
      <TouchableOpacity onPress={() => showClickItem(cases)}>
        <View>
          <View style={styles.MainStyle}>
            <Image
              source={{
                uri: cases.album_file
                  ? cases.album_file
                  : 'https://asms.coa.gov.tw/amlapp/upload/pic/4b8678ef-0967-494e-98b6-123e545be5df_org.jpg',
              }}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />

            <View style={{ flex: 1 }}>
              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={{ marginTop: 10, fontSize: 15 }}
              >
                所在地: {cases.animal_place}
              </Text>
              <Text
                ellipsizeMode="tail"
                numberOfLines={3}
                style={{ marginBottom: 10, fontSize: 15 }}
              >
                種類: {cases.animal_kind}
              </Text>
            </View>
          </View>
          <View style={{ height: 1, backgroundColor: '#dddddd' }} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={(cases) => renderData(cases.item)}
        keyExtractor={(cases) => cases.animal_subid}
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
  MainStyle: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
});
