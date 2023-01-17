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

const EntryExample: React.FC<Props<'EntryExample'>> = () => {
    const [text, setText] = useState('');

    return (
        <View>
            <Text>this is an example to take user input</Text>
            <TextInput value={text} placeholder='Type here!' onChangeText={(textInput) => {
                setText(textInput)
            }}/>
            <Text>Your input text is: {text}</Text>
        </View>
    )
};

export default EntryExample;

//#region Styles
const styles = {
    container: {
        backgroundColor: "#FF0000"
    }
}
//#endregion