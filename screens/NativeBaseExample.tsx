import React from 'react';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import { Container, Text, Card } from 'native-base';
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

const NativeBaseExample : React.FC<Props<'NativeBaseExample'>> = () => {
    return(
        <Container style={ styles.container}>
            <Text bgColor={'white'}>Open up App.js to start working on your app!</Text>
        </Container>
  )};

  export default NativeBaseExample;


//#region Styles
  const styles =   {
    container: {
    backgroundColor: "#FF0000"
  }
}
//#endregion