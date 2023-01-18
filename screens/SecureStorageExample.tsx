//https://docs.expo.dev/versions/latest/sdk/securestore/
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import * as NativeBase from 'native-base'
import * as SecureStore from 'expo-secure-store'
import { TextInput } from 'react-native-gesture-handler';

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



const SecureStorageExample: React.FC<Props<'SecureStorageExample'>> = () => {
    const [keyValue, setKeyValue] = useState('')
    const [readValue, setReadValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    async function Save() {
        if(keyValue == null || inputValue == null)
        {
            console.log('validation failed');
        }
        await SecureStore.setItemAsync(keyValue, inputValue);
    }

    async function GetValue(){
        let result = await SecureStore.getItemAsync(keyValue);
        if(result != null)
        {
            console.log(result);
            setReadValue(result);
        }
        else
        {
            console.log('nothing found!');
        }
    }


  return (
    <View>
      <Text>this is a page that uses secure storage</Text>
      <Text>{`this is the read value -> ${readValue}`}</Text>
      <TextInput value={keyValue} placeholder='enter key here!' onChangeText={(textInput) => {
      setKeyValue(textInput) }}/>
      <TextInput value={inputValue} placeholder='enter value here!' onChangeText={(textInput) => {
      setInputValue(textInput) }}/>
      <Button title='Save key' onPress={() => {
        Save();
      }}/>
            <Button title='read value' onPress={() => {
        GetValue();
      }}/>
    </View>
  )
};

export default SecureStorageExample;

//#region Styles
const styles = {
  container: {
    backgroundColor: "#FF0000"
  }
}
//#endregion