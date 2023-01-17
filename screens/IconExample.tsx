import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import { SimpleLineIcons } from '@expo/vector-icons'; 

//#region navigation
type ScreenNavigationProp<
  T extends keyof RootStackParamList
> = StackNavigationProp<RootStackParamList, T>;

type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;
type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>;
  navigation: ScreenNavigationProp<T>;
};
//#endregion

//Icons can be searched for here -> https://icons.expo.fyi/ 
const IconExample: React.FC<Props<'IconExample'>> = () => (
    <View>
      <Text>this is an icon page!</Text>
      <SimpleLineIcons name="social-reddit" size={24} color="black" />
    </View>
  );

  export default IconExample;

//#region Styles
const styles =   {
  container: {
  backgroundColor: "#FF0000"
}
}
//#endregion