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
import { useRecoilState } from 'recoil';
import { countState } from '../RecoilStates/CountState';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

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

const RecoilExample: React.FC<Props<'RecoilExample'>> = () => {
    const [count, setCount] = useRecoilState(countState);
    return(
    <View>
        {/* This shows us accessing our recoil variable proving that it is global non persistant data */}
        <Text>{`Recoil variable: ${count}`}</Text>
    </View>
    )
};

export default RecoilExample;