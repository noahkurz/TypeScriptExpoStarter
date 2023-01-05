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

//#region Navigation
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

const PassedInVarExample: React.FC<Props<'PassedInVarExample'>> = ({route}) => {
    const {passedInVar} = route.params;
    return (
        <View>
        <Text>{`this is a page with the following variable passed in -> ${passedInVar}`}</Text>
      </View>
    )
};

  export default PassedInVarExample;