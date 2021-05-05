import React,{useState} from 'react'
import Main from './component/Main';
import Detail from './component/Detail';
import QuanBu from './component/QuanBu';

import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer} from '@react-navigation/native';




const Stack = createStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
              options={{title:'便签',}}
              component={Main} 
              name="main" 
          />
          <Stack.Screen
              options={{title:'便签',}}
              component={Detail} 
              name="detail" 
          />
          <Stack.Screen
              options={{title:'便签',}}
              component={QuanBu} 
              name="quanbu" 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

