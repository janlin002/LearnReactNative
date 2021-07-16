import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const FAKE_DATA = [
  {
    id: '1',
    note: '恭喜發材 -1',
    date: 2021 / 4 / 5,
  },
  {
    id: '2',
    note: '恭喜發材-2',
    date: 2021 / 4 / 5,
  },
  {
    id: '3',
    note: '恭喜發材 - 3',
    date: 2021 / 4 / 5,
  },
  {
    id: '4',
    note: '恭喜發材-4 ',
    date: 2021 / 4 / 5,
  },

  {
    id: '5',
    note: '恭喜發材-5',
    date: 2021 / 4 / 5,
  },
  {
    id: '6',
    note: '恭喜發材-6',
    date: 2021 / 4 / 5,
  },
  {
    id: '7',
    note: '恭喜發材-7',
    date: 2021 / 4 / 5,
  },
  {
    id: '8',
    note: '恭喜發材-8',
    date: 2021 / 4 / 5,
  },
];

export default function Home(props) {
  const [dataItem, setDataItem] = useState('');

  useEffect(() => {
    const fakeData = FAKE_DATA;
    setDataItem(fakeData);
  });
  const showClickItem = (cases) => {
    props.navigation.push('HomeScreen', { passProps: cases });
  };
  const renderItem = (cases) => {
    return (
      <TouchableOpacity onPress={() => showClickItem(cases)}>
        <View>
          <View style={{ flex: 1 }}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 15 }}
            >
              {cases.note}
            </Text>
            <Text
              ellipsizeMode="tail"
              numberOfLines={3}
              style={{ marginBottom: 10, fontSize: 10 }}
            >
              {cases.date}
            </Text>
          </View>
          <View style={{ height: 1, backgroundColor: '#dddddd' }}></View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={dataItem}
        renderItem={(cases) => renderItem(cases.item)}
        keyExtractor={(cases) => cases.id}
        style={{ backgroundColor: 'white' }}
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
