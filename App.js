/* eslint-disable no-unused-vars */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/components/Authentication/Login/Login';
import Register from './src/components/Authentication/Register/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgetPassword from './src/components/Authentication/ForgetPassword/ForgetPassword';
import Home from './src/components/Home/Home';
import TeacherDetail from './src/components/Commons/TeacherDetail';
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const Stack = createNativeStackNavigator();
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <TeacherDetail />
      <Button icon="account">Press me</Button> */}
    </PaperProvider>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
}
