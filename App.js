/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useMemo, useEffect} from 'react';
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
import { AuthContext } from './src/globals/context';
import { ActivityIndicator, View, Image, Alert } from 'react-native';
import styles from './src/globals/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    const [isSigned, setIsSigned] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [token, setToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const [user, setUser] = useState({});
    const getRefreshToken = async () => {
        try {
            const value = await AsyncStorage.getItem('refreshToken');
            if (value !== null) {
              setRefreshToken(value);
            }
          } catch (e) {
            // error reading value
          }
    };

    const storeToken = async (rft) => {
        try {
            await AsyncStorage.setItem('refreshToken', rft);
        } catch (e) {
            console.log(e);
        }
      };

    const authContext = useMemo(() => ({
        logIn: async (email, password) => {
        const response = await fetch('https://sandbox.api.lettutor.com/auth/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        });

        const json = await response.json();
        if (response) {
            if (response.status === 200) {
            storeToken(json.tokens.refresh.token);
            setToken(json.tokens.access.token);
            setUser(json.user);
            setIsSigned(true);
            }
            else {
            Alert.alert('Failed', json.message, [{text:'ok'}]);
            }
        }
        else {
            Alert.alert('Failed', 'Please try again', [{text:'ok'}]);
        }
        },
        logOut: () => {
            setRefreshToken('');
            storeToken('');
            setToken('');
            setIsSigned(false);
        },
        getToken: () => {return token;},
        getUser: () => {return user;},
    }));

    const loginByRefreshToken = async () => {
        getRefreshToken();
        if (refreshToken !== '')
        {
            try {
                const response = await fetch('https://sandbox.api.lettutor.com/auth/refresh-token?', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    refreshToken: refreshToken,
                }),
                });
                const json = await response.json();
                if (response.status === 200) {
                    storeToken(json.tokens.refresh.token);
                    setToken(json.tokens.access.token);
                    setUser(json.user);
                    setIsSigned(true);
                }
            } catch (e) {
            } finally {
            }
        }
        setLoading(false);
    };
    useEffect(() => {
        loginByRefreshToken();
    }, [refreshToken]);

    if ( isLoading ) {
        return (
        <View style={styles.splashScreen}>
            <Image style={styles.imageLogoLogin}
            source={require('./assets/logo-removedbackground.png')}/>
            <ActivityIndicator />
        </View>
        );
    }

    return (
        <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
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
        </AuthContext.Provider>
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
        } else if (route.name === ScreenKey.Schedule) {
            iconName = 'calendar';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'lightskyblue',
        tabBarInactiveTintColor: 'gray',
    })}>
    <Tab.Screen name= {ScreenKey.Home} component={Home} />
    <Tab.Screen name= {ScreenKey.Message} component={Message} />
    <Tab.Screen name= {ScreenKey.Schedule} component={Upcoming} />
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
