import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { RouteProp } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import { countState } from '../RecoilStates/CountState';

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

//a new object called ItemProps that contains a title of type string
type ItemProps = { title: string };

// creates a visual component called Item and displays a "ItemProp"(String) in a text tag
const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export const HomeScreen: React.FC<Props<'HomeScreen'>> = ({ navigation }) => {

  //tells navigation what screen is doing the sending
  //const navigation = useNavigation<homeScreenProp>();
  //initilizes an array of unspecified length (very similar to a List<>) with three items
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

  //To use recoil (global state variables) all we need to do is follow the react hook example. We follow a very similar syntax and we initilize a getter and a setter 
  //around our count variable. The only difference between recoil state and a react hook is the second half of the statement. We can see we say useRECOILstate rather than useState
  //we then pass in countState which is our state object we have in countState.tsx
  const [count, setCount] = useRecoilState(countState);

  return (
    //This is a component that is in the safe area of the screen, it displays a flatList which is a list of elementa that renders new items as they apear rather than the whole list at once
    //it takes in a data parameter of our above json array
    //Things get interesting at render item. That is a method that destructures every element of the "DATA" param so we can look at each one, very similar to a foreach. 
    // We then use an anon method to render it as our Item const above assigning the title var with our items title
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* navigate to our navigation example string (route is defined on app.tsx) */}
        <TouchableOpacity onPress={() => navigation.navigate('NavigationExample')}>
          <Item title='Navigation Example!' />
        </TouchableOpacity>
        {/* navigate to our recoil example page. We can also see us accessing our recoil state on this page. */}
        <TouchableOpacity onPress={() => navigation.navigate('RecoilExample')}>
          <Item title={`Click here to see this state -> ${count} on a new page!`} />
        </TouchableOpacity>
        {/* Navigate to a page that uses native base*/}
        <TouchableOpacity onPress={() => navigation.navigate('NativeBaseExample')}>
          <Item title={`Navigate to a Native Base page!!`} />
        </TouchableOpacity>
        {/* Navigate to a page that calls async data*/}
        <TouchableOpacity onPress={() => navigation.navigate('AsyncDataLoadExample')}>
          <Item title={`Navigate to a page that loads async data`} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('IconExample')}>
          <Item title={`Navigate to a page that shows icons!`} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddListExample')}>
          <Item title={`Navigate to a page where you can add to a flat list and modify global state`} />
        </TouchableOpacity>
        {/* Navigate to a new page while passing in a variable*/}
        <TouchableOpacity onPress={() => navigation.navigate('PassedInVarExample', {
          passedInVar: "hello world!",
        })
        }>
          <Item title='Passing Variable Example! ' />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
//#region styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
});
//#endregion
