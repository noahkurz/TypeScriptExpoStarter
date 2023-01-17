import * as React from 'react';
import { HomeScreen } from './screens/Home'
import NavigationExample from './screens/NavigationExample'
import RecoilExample from './screens/RecoilExample';
import PassedInVarExample from './screens/PassedInVarExample';
import NativeBaseExample from './screens/NativeBaseExample';
import AsyncDataLoadExample from './screens/AsyncDataLoadExample';
import IconExample from './screens/IconExample';
import AddListExample from './screens/AddListExample';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RecoilRoot } from 'recoil';
import { NativeBaseProvider } from 'native-base'

const Stack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  HomeScreen: undefined;
  NavigationExample: undefined;
  RecoilExample: undefined;
  NativeBaseExample: undefined;
  AsyncDataLoadExample: undefined;
  IconExample: undefined;
  AddListExample: undefined;
  PassedInVarExample:
  {
    passedInVar: string;
  };
  //undefined for no passed in variables
  //if we want to pass in variables through the route we need to do it like above.
};

const MyStack = () => {
  return (
    <NativeBaseProvider>
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="NavigationExample" component={NavigationExample} />
            <Stack.Screen name="RecoilExample" component={RecoilExample} />
            <Stack.Screen name="PassedInVarExample" component={PassedInVarExample} />
            <Stack.Screen name="NativeBaseExample" component={NativeBaseExample} />
            <Stack.Screen name="AsyncDataLoadExample"component={AsyncDataLoadExample}/>
            <Stack.Screen name="IconExample" component={IconExample}/>
            <Stack.Screen name="AddListExample" component={AddListExample}/>
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </NativeBaseProvider>
  );
};

export default MyStack;