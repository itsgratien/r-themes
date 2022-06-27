import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamListT } from 'src/__generated__/Navigation';
import { HomeItem } from './HomeItem';
import { FontAwesome5 } from '@expo/vector-icons';

interface Props extends NativeStackScreenProps<RootStackParamListT, 'Home'> {}

export interface ItemT {
  id: string;
  userId: string;
  body: string;
  title: string;
}

const getItems = async () => {
  try {
    const find = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const res = await find.json();
    return res;
  } catch (error: any) {
    console.log('error', error.message);
  }
};
export const Home = ({ navigation }: Props) => {
  const [items, setItems] = React.useState<ItemT[]>();

  const handleNavigate = (id: string) => {
    navigation.navigate('Detail', { id });
  };

  React.useEffect(() => {
    getItems().then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <ScrollView style={style.home}>
      <View style={style.heading}>
        <FontAwesome5 name="react" size={120} color="black" />
        <Text style={style.headingText}>JSON Placeholder</Text>
      </View>
      {items && (
        <>
          {items.length > 0 ? (
            <>
              {items.map((item) => (
                <HomeItem
                  item={item}
                  key={item.id}
                  onPress={() => handleNavigate(item.id)}
                />
              ))}
            </>
          ) : (
            <Text>No Result Found</Text>
          )}
        </>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  home: {
    flex: 1,
  },
  heading: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginTop: 33,
    marginBottom: 46,
  },
  headingText: {
    fontSize: 15,
    fontFamily: 'Quicksand_700Bold',
  },
});
