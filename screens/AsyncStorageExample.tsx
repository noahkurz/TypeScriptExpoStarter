//https://react-native-async-storage.github.io/async-storage/docs/usage
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Button,
    ActivityIndicator,
} from 'react-native';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import * as NativeBase from 'native-base'
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
type Names = { id: number, name: string };
let name: Names
{
    id: 0;
    name: '';
};

const AsyncStorageExample: React.FC<Props<'AsyncStorageExample'>> = () => {

    const KEY = "KEY";


    const [isLoading, setIsLoading] = useState(true);
    const [newName, setNewName] = useState('');
    const [currentId, setCurrentId] = useState(1);
    const [asyncSotrageResultId, setAsyncStorageResultId] = useState(0);
    const [asyncSorageResultName, setAsyncStorageResultName] = useState('');

    const StoreData = async (value: string) => {
        setIsLoading(true);
        try {
            const nameToAdd: Names = {
                id: currentId,
                name: newName,

            }
            const jsonValue = JSON.stringify(nameToAdd)
            await AsyncStorage.setItem(KEY, jsonValue)

        } catch (e) {
            console.log('error abort abort cant add data');
            setIsLoading(false);
            return;
        }
        setCurrentId(currentId + 1);
        setNewName('');
        setIsLoading(false);
    }

    const GetData = async () => {
        try {
            setIsLoading(true);
            const jsonValue = await AsyncStorage.getItem(KEY)
            const result: Names = jsonValue != null ? JSON.parse(jsonValue) : null;
            if(result.name == '')
            {
                //do something to filter data
            }
            setAsyncStorageResultName(result.name);
            setAsyncStorageResultId(result.id);
        } catch (e) {
            console.log('error abort abort cant read data');
        }
        setIsLoading(false);
    }

    return (
        <View>
        <Text>this is a page that uses async storage</Text>
        <ActivityIndicator animating={isLoading} size='large'/>
        <Text>{`this is the read value name -> ${asyncSorageResultName}`}</Text>
        <Text>{`this is the read value id -> ${asyncSotrageResultId}`}</Text>
        <TextInput value={newName} placeholder='enter value here!' onChangeText={(textInput) => {
        setNewName(textInput) }}/>
        <Button title='Save Name' onPress={() => {
          StoreData(newName);
        }}/>
              <Button title='read value' onPress={() => {
          GetData();
        }}/>
      </View>
    )
};

export default AsyncStorageExample;

//#region Styles
const styles = {
    container: {
        backgroundColor: "#FF0000"
    }
}
//#endregion