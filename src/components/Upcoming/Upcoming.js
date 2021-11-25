/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import UpcomingCard from './UpcomingCard';

export default function Upcoming(props) {
    const data = [
        {
            id: 1,
            name: 'Duong Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
        },
        {
            id: 2,
            name: 'Hai Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
        },
        {
            id: 3,
            name: 'Tuam Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
        },
        {
            id: 4,
            name: 'An Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
        },
        {
            id: 5,
            name: 'Duc Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
        },
        {
            id: 6,
            name: 'Quynh Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
        },
        {
            id: 7,
            name: 'Duong Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
        },
    ];
    const renderItem = ({item}) => (
        <UpcomingCard nav={props} name={item.name} date={item.date} timeStart={item.timeStart} timeEnd={item.timeEnd}/>
    );
    return (
        <FlatList style={styles.Container}
        data={data}
        renderItem={renderItem} />
    );
}

const styles = StyleSheet.create({
    Container: {
        height:'100%',
        backgroundColor: 'aliceblue',
    },
});
