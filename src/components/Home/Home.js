/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import TeacherCard from '../Teacher/TeacherCard';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../globals/constants';
import {Chip} from 'react-native-paper';
import { AuthContext } from '../../globals/context';
import moment from 'moment';

export default function Home(props) {
    const [data, setData] = useState({});
    const [schedule, setSchedule] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [scheduleInfo, setScheduleInfo] = useState({});
    const [isExist, setIsExist] = useState(false);
    const {getToken} = useContext(AuthContext);
    const [token, setToken] = useState('');
    // const token = getToken();
    const today = new Date(Date.now()).getTime();
    const getData = async () => {
        setIsLoading(true);
        if (token !== '') {
            try {
                const response = await fetch('https://sandbox.api.lettutor.com/tutor/more?perPage=9&page=1', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }});
                const json = await response.json();
                if (response.status === 200) {
                    setData(json.tutors.rows);
                }
            } catch (error) {
                console.error(error);
            }
            try {
                const response = await fetch(`https://sandbox.api.lettutor.com/booking/list/student?page=1&perPage=20&dateTimeGte=${today}&orderBy=time&sortBy=time`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }});
                    const json = await response.json();
                    if (response.status === 200 && json.data.count !== 0) {
                        setSchedule(json.data.rows[0]);
                        setIsExist(true);
                    }
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        }
    };
    useEffect(() => {
        setToken(getToken());
        getData();
        return () => {
            setData([]);
            setSchedule({});
            setToken('');
        };
    },[token]);
    const renderItem = ({item}) => (
    <TeacherCard item={item} onPressTeacherCard={onPressTeacherCard}/>
    );
    const onPressTeacherCard = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
    };
    const onPressMenu = () => {
        props.navigation.navigate(ScreenKey.Setting);
    };
    const onPressSeeAllButton = () => {
        props.navigation.navigate(ScreenKey.Teachers);
    };
    const onPressEnterRoom = (url, startDate) => {
        props.navigation.navigate(ScreenKey.Room,{extendUrl: url, startDate: startDate});
    };
  return (
    <View>
        <View style={styles.HeaderBar}>
            <Text style={styles.HeaderText}>Home</Text>
            <TouchableOpacity style={styles.HeaderRightButton} onPress={onPressMenu}>
                <Ionicons size={36} name="menu" color="gray" />
            </TouchableOpacity>
        </View>
        {isLoading === true ? (
        <ActivityIndicator size="large" />
        ) : (
            <View style={styles.Container}>
                <SafeAreaView>
                    <FlatList
                        ListHeaderComponent={
                            isExist === true ?
                            (<View>
                                <View style={styles.Box}>
                                    <Text style={styles.TextBox}>Up coming lesson</Text>
                                    <Text style={styles.TextBox}>{moment(schedule.scheduleDetailInfo.startPeriodTimestamp).format('LLL')} - {moment(schedule.scheduleDetailInfo.endPeriodTimestamp).format('LT')}</Text>
                                    {(schedule.studentRequest !== null) ?
                                    <Text style={styles.TextBox}>Your note: {schedule.studentRequest}</Text> : null}
                                    <TouchableOpacity onPress={()=>{onPressEnterRoom(schedule.studentMeetingLink, `${scheduleInfo.date} ${scheduleInfo.startTime}`);}} style={styles.Button}>
                                        <Chip style={styles.Chip}>Enter lesson Room</Chip>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.MiddleView}>
                                    <Text style={styles.MiddleLeftText}>Recommended Tutors</Text>
                                    <TouchableOpacity onPress={onPressSeeAllButton}>
                                        <Text style={styles.MiddleRightText}>See all </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>) : (
                                <View>
                                    <View style={styles.Box}>
                                        <Text style={styles.TextBox}>You don't have upcoming class</Text>
                                    </View>
                                    <View style={styles.MiddleView}>
                                        <Text style={styles.MiddleLeftText}>Recommended Tutors</Text>
                                        <TouchableOpacity onPress={onPressSeeAllButton}>
                                            <Text style={styles.MiddleRightText}>See all </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                        data={data}
                        renderItem={renderItem} />
                </SafeAreaView>
        </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor:'lightskyblue',
        height:200,
        width:'100%',
        justifyContent: 'space-around',
    },
    HeaderText: {
        fontWeight:'bold',
        fontSize:16,
        marginLeft:16,
        flex:10,
        alignSelf: 'center',
    },
    HeaderRightButton: {
        justifyContent: 'center',
         marginRight:16,
    },
    MiddleView: {
        flexDirection: 'row',
        margin: 16,
    },
    MiddleLeftText: {
        fontStyle: 'italic',
        flex: 1,
    },
    MiddleRightText: {
        color: 'lightskyblue',
    },
    HeaderBar:{
        flexDirection:'row',
        height:50,
        backgroundColor:'white',
    },
    TextBox: {
        alignSelf: 'center',
        fontSize: 16,
    },
    Button:{
        borderRadius:25,
        alignSelf: 'center',
    },
    Container: {
        height:'93%',
        backgroundColor: 'aliceblue',
    },
    Chip: {
        backgroundColor: 'white',
    },
});

