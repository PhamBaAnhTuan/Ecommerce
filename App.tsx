
import React from 'react';
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Context
import { ThemeContextProvider } from './context/ThemeContext';
import { DataContextProvider } from './context/DataContext';
import { AuthContextProvider } from './context/AuthContext';
// Components
import SignIn from './app/SignIn';
import SignUp from './app/SignUp';

import TabNavigator from './app/TabNavigator/TabNavigator';

import BookDetail from './app/Home/BookDetail';
import BuyNow from './app/Home/BuyNow';
import AddBook from './app/Profile/AddBook';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        <DataContextProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='SignIn'>
              <Stack.Screen name='TabNavigator' component={TabNavigator}/>
              <Stack.Screen name='SignIn' component={SignIn}/>
              <Stack.Screen name='SignUp' component={SignUp}/>
              <Stack.Screen name='BookDetail' component={BookDetail}/>
              <Stack.Screen name='BuyNow' component={BuyNow}/>
              <Stack.Screen name='AddBook' component={AddBook}/>
            </Stack.Navigator>
          </NavigationContainer>
        </DataContextProvider>
      </AuthContextProvider>
    </ThemeContextProvider>
  );
}
export default App;
