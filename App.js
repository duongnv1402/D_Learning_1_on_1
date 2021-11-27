/* eslint-disable prettier/prettier */
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
import Profile from './src/components/Setting/Profile/Profile';
import Room from './src/components/Room/Room';
import Courses from './src/components/Courses/Courses';
import CourseDetail from './src/components/Courses/CourseDetail';
import Feedback from './src/components/Setting/Feedback/Feedback';
import SessionHistory from './src/components/Setting/SessionHistory/SessionHistory';
import AdvancedSetting from './src/components/Setting/AdvancedSetting';
import BecomeATeacher from './src/components/Setting/BecomeATeacher';
import BookingHistory from './src/components/Setting/Booking/BookingHistory';
import Session from './src/components/Setting/SessionHistory/Session';
import EditProfile from './src/components/Setting/Profile/EditProfile';
import TeacherSchedule from './src/components/Teacher/TeacherSchedule';
import { ScreenKey } from './src/globals/constants';
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
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name= {ScreenKey.HomeTabs} component={HomeTabs} />
            <Stack.Screen name= {ScreenKey.HomeScreen} component={Home} />
            <Stack.Screen name= {ScreenKey.Setting} component={SettingsStack} />
            <Stack.Screen name= {ScreenKey.TeacherDetail} component={TeacherDetail} />
            <Stack.Screen name= {ScreenKey.TeacherSchedule} component={TeacherSchedule} />
            <Stack.Screen name= {ScreenKey.MessageScreen} component={Message} />
            <Stack.Screen name= {ScreenKey.MessageDialog} component={MessageDialog} />
            <Stack.Screen name= {ScreenKey.UpcomingScreen} component={Upcoming} />
            <Stack.Screen name= {ScreenKey.Room} component={Room} />
            <Stack.Screen name= {ScreenKey.TeachersScreen} component={Teacher} />
            <Stack.Screen name={ScreenKey.CoursesScreen} component={Courses} />
            <Stack.Screen name= {ScreenKey.CourseDetail} component={CourseDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name= {ScreenKey.Login} component={Login} />
            <Stack.Screen name= {ScreenKey.Register} component={Register} />
            <Stack.Screen name= {ScreenKey.ForgetPassword} component={ForgetPassword} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </PaperProvider>
  );
}

function HomeTabs() {
  return <Tab.Navigator
  screenOptions={({route}) => ({
    headerShown: false,
    tabBarIcon: ({color, size}) => {
      let iconName;
      if (route.name === ScreenKey.Home) {
        iconName = 'home';
      } else if (route.name === ScreenKey.Courses) {
        iconName = 'book';
      } else if (route.name === ScreenKey.Message) {
        iconName = 'chatbubbles';
      } else if (route.name === ScreenKey.Teachers) {
        iconName = 'people';
      } else if (route.name === ScreenKey.Upcoming) {
        iconName = 'calendar';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'lightskyblue',
    tabBarInactiveTintColor: 'gray',
  })}>
  <Tab.Screen name= {ScreenKey.Home} component={Home} />
  <Tab.Screen name= {ScreenKey.Message} component={Message} />
  <Tab.Screen name= {ScreenKey.Upcoming} component={Upcoming} />
  <Tab.Screen name= {ScreenKey.Teachers} component={Teacher} />
  <Tab.Screen name= {ScreenKey.Courses} component={Courses} />
</Tab.Navigator>;
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name= {ScreenKey.SettingScreen} component={Setting} />
      <Stack.Screen name= {ScreenKey.Profile} component={Profile} />
      <Stack.Screen name= {ScreenKey.EditProfile} component={EditProfile} />
      <Stack.Screen name= {ScreenKey.Feedback} component={Feedback} />
      <Stack.Screen name= {ScreenKey.BookingHistory} component={BookingHistory} />
      <Stack.Screen name= {ScreenKey.SessionHistory} component={SessionHistory} />
      <Stack.Screen name= {ScreenKey.AdvancedSetting} component={AdvancedSetting} />
      <Stack.Screen name= {ScreenKey.BecomeATeacher} component={BecomeATeacher} />
      <Stack.Screen name= {ScreenKey.Session} component={Session} />
    </Stack.Navigator>
  );
}
