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
import { useRecoilState } from 'recoil';
import { countState } from '../RecoilStates/CountState';

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

//a new object called ItemProps that contains a title of type string
//#region types
type ItemProps = { title: string };
//#endregion
//#region components
// creates a visual component called Item and displays a "ItemProp"(String) in a text tag
const Item = ({ title }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);
//#endregion
const AddListExample: React.FC<Props<'AddListExample'>> = () => {
    //#region global state  
    //To use recoil (global state variables) all we need to do is follow the react hook example. We follow a very similar syntax and we initilize a getter and a setter 
    //around our count variable. The only difference between recoil state and a react hook is the second half of the statement. We can see we say useRECOILstate rather than useState
    //we then pass in countState which is our state object we have in countState.tsx
    const [count, setCount] = useRecoilState(countState);
    //#endregion
    //#region methods
    const RandomCoffeeAdd = () => {
        const randNum = Math.floor(Math.random() * 1000) + 1
        setCount(count + 1) //this updates our recoil state 
        return {
            id: randNum.toString(),
            title: `${randNum} coffee`
        }
    }
    //#endregion

    //#region data store
    const [coffeeTypes, setNewCoffeeTypes] = useState([
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'rand coffee 1',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'rand coffee 2',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'rand coffee 3',
        },
    ])
    //#endregion
    return (
        <View>
            <FlatList
                data={coffeeTypes}
                renderItem={({ item }) =>
                    <Item title={item.title} />}
                keyExtractor={item => item.id} />
            <Button title='ADD +' color="red" onPress={() => {
                setNewCoffeeTypes([...coffeeTypes, RandomCoffeeAdd()])
            }}></Button>
        </View>
    )
};

export default AddListExample;

//#region Styles
const styles = {
    container: {
        backgroundColor: "#FF0000"
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
}
//#endregion