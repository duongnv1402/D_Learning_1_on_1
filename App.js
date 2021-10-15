/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from './src/components/Authentication/Login/Login';
import Register from './src/components/Authentication/Register/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgetPassword from './src/components/Authentication/ForgetPassword/ForgetPassword';
import Home from './src/components/Home/Home';
import TeacherDetail from './src/components/Teacher/TeacherDetail';
import Teacher from './src/components/Teacher/Teacher';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Message from './src/components/Message/Message';
import MessageDialog from './src/components/Message/MessageDialog';
import Setting from './src/components/Setting/Setting';
import Upcoming from './src/components/Upcoming/Upcoming';
import Profile from './src/components/Setting/Profile';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  const [isSigned, setIsSigned] = useState(true);
  return (
    <PaperProvider theme={theme}>
      {isSigned ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarIcon: ({color, size}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Settings') {
                  iconName = 'settings';
                } else if (route.name === 'Message') {
                  iconName = 'chatbubbles';
                } else if (route.name === 'Teachers') {
                  iconName = 'person';
                } else if (route.name === 'Upcoming') {
                  iconName = 'calendar-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'lightskyblue',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Message" component={MessageStack} />
            <Tab.Screen name="Upcoming" component={Upcoming} />
            <Tab.Screen name="Teachers" component={TeachersStack} />
            <Tab.Screen name="Settings" component={Setting} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
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
      )}
    </PaperProvider>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="TeacherDetail" component={TeacherDetail} />
      <Stack.Screen name="MessageDialog" component={MessageDialog} />
    </Stack.Navigator>
  );
}

function MessageStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MessageScreen" component={Message} />
      <Stack.Screen name="MessageDialog" component={MessageDialog} />
    </Stack.Navigator>
  );
}

function TeachersStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TeachersScreen" component={Teacher} />
      <Stack.Screen name="TeacherDetail" component={TeacherDetail} />
      <Stack.Screen name="MessageDialog" component={MessageDialog} />
    </Stack.Navigator>
  );
}
