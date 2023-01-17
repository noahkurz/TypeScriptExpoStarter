import React, { useState, Component, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    Button,
    ActivityIndicator
} from 'react-native';
import { RouteProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import * as NativeBase from 'native-base'
import * as SQLite from "expo-sqlite";
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
type Names = { id: number, name: string };
let emptyNamesArray: Names[];
const SqLiteExample: React.FC<Props<'SqLiteExample'>> = () => {
    const db = SQLite.openDatabase("testDb.db");


    //TODO fix loading
    const [isLoading, setIsLoading] = useState(true);
    const [names, setNames] = useState(emptyNamesArray);
    const [currentName, setCurrentName] = useState('');

    const showNames = () => {
        if (names != undefined) {
            return names.map((name, index) => {
                return (
                    <View key={index}>
                        <Text>{name.name}</Text>
                    </View>
                )
            })
        }

    }

    function addName() {
        setIsLoading(true)
        db.transaction(tx => {
            tx.executeSql('INSERT INTO names (name) values (?)', [currentName],
                (txObj, resultSet) => {
                    let existingNames = [...names];
                    if (resultSet.insertId != undefined) {
                        existingNames.push({ id: resultSet.insertId, name: currentName });
                        setNames(existingNames);
                        setCurrentName('');
                        
                        
                    }
                }
            );
        });
        setIsLoading(false)
    }

    useEffect(() => {
        console.log(`is loading ${isLoading}`)
        db.transaction((tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS NAMES (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT);");
        });
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM names', [],
                (txObj, resultSet) => setNames(resultSet.rows._array));
        });
        setIsLoading(false);
    }, []);

if(isLoading){
    return (
        <View>
            <Text>Loading...</Text>
        </View>
    )
}

    return (

        <View>
            <Text>This is an example page of using SqLite</Text>
            <TextInput value={currentName} placeholder='enter name here' onChangeText={(textInput) => {
                setCurrentName(textInput)
            }} />
            <Button title='Add Name' onPress={addName} />
            {showNames()}
        </View>
    )
};

export default SqLiteExample;

//#region Styles
const styles = {
    container: {
        backgroundColor: "#FF0000"
    }
}
//#endregion