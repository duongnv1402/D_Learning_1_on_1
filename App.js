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
                } else if (route.name === 'Courses') {
                  iconName = 'book';
                } else if (route.name === 'Message') {
                  iconName = 'chatbubbles';
                } else if (route.name === 'Teachers') {
                  iconName = 'people';
                } else if (route.name === 'Upcoming') {
                  iconName = 'calendar';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'lightskyblue',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Message" component={MessageStack} />
            <Tab.Screen name="Upcoming" component={UpcomingStack} />
            <Tab.Screen name="Teachers" component={TeachersStack} />
            <Tab.Screen name="Courses" component={CoursesStack} />
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

function CoursesStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CoursesScreen" component={Courses} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Setting" component={SettingsStack} />
      <Stack.Screen name="TeacherDetail" component={TeacherDetail} />
      <Stack.Screen name="TeacherSchedule" component={TeacherSchedule} />
      <Stack.Screen name="MessageDialog" component={MessageDialog} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
}
function UpcomingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="UpcomingScreen" component={Upcoming} />
      <Stack.Screen name="Room" component={Room} />
      <Stack.Screen name="TeacherDetail" component={TeacherDetail} />
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
      <Stack.Screen name="TeacherSchedule" component={TeacherSchedule} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingScreen" component={Setting} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="BookingHistory" component={BookingHistory} />
      <Stack.Screen name="SessionHistory" component={SessionHistory} />
      <Stack.Screen name="AdvancedSetting" component={AdvancedSetting} />
      <Stack.Screen name="BecomeATeacher" component={BecomeATeacher} />
      <Stack.Screen name="Session" component={Session} />
    </Stack.Navigator>
  );
}
