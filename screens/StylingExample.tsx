//flex: https://reactnative.dev/docs/flexbox
//text scaling: https://github.com/GeekyAnts/NativeBase/issues/1022
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
import GlobalStyles from '../Styles/Styles';

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

const StylingExample: React.FC<Props<'StylingExample'>> = () => {
  return (
    <View style={GlobalStyles.container}>

    
        <View style={GlobalStyles.box1}>
            {/* This happens using the 'TextScale.tsx' file.  */}
            <Text style={GlobalStyles.textExample}>This is text that scales to different screens</Text>
        </View>
        <View style={GlobalStyles.box2}>
            <Text> this is a box that should take up 66 percent of the screen</Text>
            {/* This happens because there are a total of 3 flex boxes in this container and the bottom one is assigned to 2 (or 66 percent) */}
        </View>
        </View>
        
  )
};

export default StylingExample;