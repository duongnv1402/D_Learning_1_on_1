/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import BookingCard from './BookingCard';

export default function BookingHistory(props) {
    return (
        <ScrollView>
            <BookingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00" isOver={true}/>
            <BookingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="12:00" timeEnd="14:00" isOver={true}/>
            <BookingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="16:00" timeEnd="18:00" isOver={true}/>
            <BookingCard nav={props} name="Dương Nguyễn" date="14-02-2021" timeStart="08:00" timeEnd="10:00" isOver={false}/>
            <BookingCard nav={props} name="Dương Nguyễn" date="14-02-2021" timeStart="18:00" timeEnd="20:00" isOver={false}/>
            <BookingCard nav={props} name="Dương Nguyễn" date="14-02-2021" timeStart="22:00" timeEnd="23:00" isOver={false}/>
        </ScrollView>
    );
}
