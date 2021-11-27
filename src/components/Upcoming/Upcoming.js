/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import UpcomingCard from './UpcomingCard';
import {ScreenKey} from '../../globals/constants';

export default function Upcoming(props) {
    const data = [
        {
            id: 1,
            name: 'Duong Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 2,
            name: 'Hai Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 3,
            name: 'Tuam Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 4,
            name: 'An Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 5,
            name: 'Duc Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 6,
            name: 'Quynh Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 7,
            name: 'Duong Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
    ];
    const renderItem = ({item}) => (
        <UpcomingCard nav={props} item={item} onPressCancel={onPressCancel} onPressEnter={onPressEnter}/>
    );
    const onPressCancel = () => {
        Alert.alert('Report', 'Do you want to cancel this lesson?',
        [
            {
                text: 'cancel',
            },
            {
                text:'ok',
                onPress: ()=>{
                },
            },
        ]);
    };
    const onPressEnter = () => {
        props.navigation.navigate(ScreenKey.Room);
    };
    return (
        <View>
            <View style={styles.HeaderBar}>
                <Text style={styles.HeaderText}>Upcoming</Text>
            </View>
        <FlatList style={styles.Container}
            data={data}
            renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height:'93%',
        backgroundColor: 'aliceblue',
    },
    HeaderText: {
        fontWeight:'bold',
        fontSize:16,
        marginLeft:16,
        flex:10,
        alignSelf: 'center',
    },
    HeaderBar:{
        flexDirection:'row',
        height:50,
        backgroundColor:'white',
    },
});
