import React, { useState, Component, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
  ActivityIndicator
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

function getAsyncData() {
    return 
  } 


const AsyncDataLoadExample: React.FC<Props<'AsyncDataLoadExample'>> = () => {

    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        fetch('https://imdb-api.com/en/API/SearchMovie/k_kjc6z6rg/jaws')
        .then((response) => response.json())
        .then((responseJson) => {
          setResult(responseJson.results[0].description);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
        
    }, [])
    return(
    <View>
      <Text>This is a page that shows async data!</Text>
      <ActivityIndicator animating={isLoading}/>
      <Text>{result}</Text>
    </View>)
};

  export default AsyncDataLoadExample;

//#region Styles
const styles =   {
    container: {
    backgroundColor: "#FF0000"
  }
  }
  //#endregion