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
    const [isLoading, setLoading] = useState(true);
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmNTY5YzIwMi03YmJmLTQ2MjAtYWY3Ny1lY2MxNDE5YTZiMjgiLCJpYXQiOjE2NDIzNDM4ODcsImV4cCI6MTY0MjQzMDI4NywidHlwZSI6ImFjY2VzcyJ9.GrgNZUDMn3DyG8FWO7lvArRV1zavjTjYPwm6HnhpwDc');
    const [user, setUser] = useState({
        'id': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
        'email': 'student@lettutor.com',
        'name': 'Moc Student',
        'avatar': 'https://sandbox.api.lettutor.com/avatar/f569c202-7bbf-4620-af77-ecc1419a6b28avatar1642237117312.jpg',
        'country': 'VN',
        'phone': '842499996508',
        'roles': [
            'student',
            'CHANGE_PASSWORD',
        ],
        'language': 'Vietnamese',
        'birthday': '2000-03-03',
        'isActivated': true,
        'tutorInfo': {
            'id': 'db37f185-399f-470d-995b-bf6143cb1a5f',
            'userId': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
            'video': 'https://sandbox.api.lettutor.com/video/f569c202-7bbf-4620-af77-ecc1419a6b28video1642268185398.mp4',
            'bio': "You can't Xi me ! Bing chilling ! 1",
            'education': 'University of Science 1',
            'experience': '3 years',
            'profession': 'WWE, Online English teacher',
            'accent': null,
            'targetStudent': 'Intermediate',
            'interests': 'I like reading book in my spare time ',
            'languages': '+1268',
            'specialties': 'conversational-english,movers,flyers,toefl,toeic,business-english,Business English,Conversational English,Ielts,Movers,Toeic',
            'resume': null,
            'isActivated': false,
            'isNative': false,
            'createdAt': '2021-12-28T14:11:54.006Z',
            'updatedAt': '2022-01-15T17:36:25.535Z',
        },
        'walletInfo': {
            'id': '285396c8-2c82-4dbd-abca-af3e8d0b3a03',
            'userId': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
            'amount': '100500000',
            'isBlocked': false,
            'createdAt': '2021-10-19T13:08:04.697Z',
            'updatedAt': '2022-01-16T15:03:41.587Z',
            'bonus': 0,
        },
        'feedbacks': [
            {
                'id': 'a5aaea0f-c69c-4d09-b94c-cff9d00444c5',
                'bookingId': '661d4fa8-b67f-43b8-aa42-c52dc6adb0fd',
                'firstId': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
                'secondId': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
                'rating': 5,
                'content': 'So greate !',
                'createdAt': '2022-01-07T10:53:01.541Z',
                'updatedAt': '2022-01-07T10:53:01.541Z',
                'firstInfo': {
                    'id': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
                    'level': 'INTERMEDIATE',
                    'email': 'student@lettutor.com',
                    'google': null,
                    'facebook': null,
                    'apple': null,
                    'avatar': 'https://sandbox.api.lettutor.com/avatar/f569c202-7bbf-4620-af77-ecc1419a6b28avatar1642237117312.jpg',
                    'name': 'Moc Student',
                    'country': 'VN',
                    'phone': '842499996508',
                    'language': 'Vietnamese',
                    'birthday': '2000-03-03',
                    'requestPassword': true,
                    'isActivated': true,
                    'isPhoneActivated': true,
                    'requireNote': null,
                    'timezone': 7,
                    'phoneAuth': null,
                    'isPhoneAuthActivated': false,
                    'createdAt': '2021-10-19T13:08:04.242Z',
                    'updatedAt': '2022-01-16T02:56:39.735Z',
                    'deletedAt': null,
                },
                'secondInfo': {
                    'id': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
                    'level': 'INTERMEDIATE',
                    'email': 'student@lettutor.com',
                    'google': null,
                    'facebook': null,
                    'apple': null,
                    'avatar': 'https://sandbox.api.lettutor.com/avatar/f569c202-7bbf-4620-af77-ecc1419a6b28avatar1642237117312.jpg',
                    'name': 'Moc Student',
                    'country': 'VN',
                    'phone': '842499996508',
                    'language': 'Vietnamese',
                    'birthday': '2000-03-03',
                    'requestPassword': true,
                    'isActivated': true,
                    'isPhoneActivated': true,
                    'requireNote': null,
                    'timezone': 7,
                    'phoneAuth': null,
                    'isPhoneAuthActivated': false,
                    'createdAt': '2021-10-19T13:08:04.242Z',
                    'updatedAt': '2022-01-16T02:56:39.735Z',
                    'deletedAt': null,
                },
            },
        ],
        'courses': [],
        'requireNote': null,
        'level': 'INTERMEDIATE',
        'learnTopics': [
            {
                'id': 4,
                'key': 'business-english',
                'name': 'Business English',
            },
        ],
        'testPreparations': [
            {
                'id': 6,
                'key': 'ielts',
                'name': 'IELTS',
            },
        ],
        'isPhoneActivated': true,
        'timezone': 7,
        'referralInfo': {
            'id': 1,
            'referralCode': 'RSJYDZYQLE',
            'userId': 'f569c202-7bbf-4620-af77-ecc1419a6b28',
            'referralPackId': 1,
            'createdAt': '2021-10-19T13:08:04.708Z',
            'updatedAt': '2021-10-19T13:08:04.708Z',
            'referralPackInfo': {
                'id': 1,
                'earnPercent': 5,
                'isActive': true,
                'createdAt': '2021-10-13T16:13:35.606Z',
                'updatedAt': '2021-10-13T16:13:35.606Z',
            },
        },
        'avgRating': 5,
        'priceOfEachSession': {
            'id': '0e5574d5-922f-4809-8af1-a06ed3205188',
            'key': 'pricePerSession',
            'price': '100000',
            'createdAt': '2021-06-10T14:53:56.032Z',
            'updatedAt': '2021-06-10T14:53:56.032Z',
    },
    },);
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
            setIsSigned(true);
            setToken(json.tokens.access.token);
            setUser(json.user);
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
        setIsSigned(false);
        },
        getUser: () => {return user;},
        getToken: () => {return token;},
        setUser: (u) => {setUser(u);},
    }));

    useEffect(() => {
        let timer = setTimeout(() => {
        setLoading(false);
        }, 1000);
        return () => {
        clearTimeout(timer);
        };
    }, []);

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
