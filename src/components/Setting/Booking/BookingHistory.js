/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';
import BookingCard from './BookingCard';

export default function BookingHistory(props) {
    const data = [
        {
            id: 1,
            name: 'Duong Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            isOver: true,
        },
        {
            id: 2,
            name: 'Hai Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            isOver: true,
        },
        {
            id: 3,
            name: 'Tuam Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            isOver: true,
        },
        {
            id: 4,
            name: 'An Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            isOver: false,
        },
        {
            id: 5,
            name: 'Duc Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            isOver: false,
        },
        {
            id: 6,
            name: 'Quynh Pham',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            isOver: false,
        },
        {
            id: 7,
            name: 'Duong Nguyen',
            date: '14-02-2022',
            timeStart: '08:00',
            timeEnd: '10:00',
            isOver: false,
        },
    ];
    const renderItem = ({item}) => (
        <BookingCard nav={props} name={item.name} date={item.date} timeStart={item.timeStart} timeEnd={item.timeEnd} isOver={item.isOver}/>

    );
    return (
        <FlatList data={data}
        renderItem={renderItem} />
    );
}
