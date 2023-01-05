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

// const CHANGE-ME-Example: React.FC<Props<'CHANGE-ME'>> = () => (
//     <View>
//       <Text>this is an example page</Text>
//     </View>
//   );

//   export default CHANGE-ME-Example;

//#region Styles
const styles =   {
  container: {
  backgroundColor: "#FF0000"
}
}
//#endregion