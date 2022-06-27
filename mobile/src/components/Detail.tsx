import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListT } from 'src/__generated__/Navigation';
import { ItemT } from './Home';

interface Props extends NativeStackScreenProps<RootStackParamListT, 'Detail'> {}

const getItems = async (id: string) => {
  try {
    const find = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const res = await find.json();
    return res;
  } catch (error: any) {
    console.log('error', error.message);
  }
};
export const Detail = ({ route }: Props) => {
  const [item, setItem] = React.useState<ItemT>();

  const params = route.params;

  React.useEffect(() => {
    if (params.id) {
      getItems(params.id).then((res) => {
        setItem(res);
      });
    }
  }, []);

  if (!item) {
    return null;
  }

  return (
    <ScrollView style={style.detail}>
      <View style={style.item}>
        <View style={style.itemId}>
          <Text style={style.id}>{item.id}</Text>
        </View>
        <View style={style.itemTitle}>
          <Text style={style.title}>{item.title}</Text>
        </View>
        <View style={style.itemBody}>
          <Text style={style.bodyText}>{item.body}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  detail: {
    flex: 1,
    padding: 10,
  },
  item: {
    paddingTop: 50,
  },
  itemId: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 59,
  },
  id: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
  },
  itemTitle: {
    flexGrow: 1,
    fontSize: 15,
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Quicksand_700Bold',
  },
  itemBody: {
    marginLeft: 10,
    marginTop: 20,
  },
  bodyText: {
    fontSize: 15,
    fontFamily: 'Quicksand_400Regular',
  },
});
