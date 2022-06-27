import React from 'react';
import { ItemT } from './Home';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type Props = {
  item: ItemT;
  onPress: () => void;
};

export const HomeItem = ({ item, onPress }: Props) => {
  if (!item) {
    return null;
  }
  return (
    <TouchableOpacity style={style.item} onPress={onPress}>
      <View style={style.itemId}>
        <Text style={style.id}>{item.id}</Text>
      </View>
      <View style={style.itemTitle}>
        <Text style={style.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
  itemId: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  title: {
    fontSize: 15,
    fontFamily: 'Quicksand_700Bold',
  },
});
