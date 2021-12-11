/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { FlatList, Alert, View } from 'react-native';
import BookingCard from './BookingCard';
import { ScreenKey } from '../../../globals/constants';
import {bookingHistory} from '../../../models/bookingHistory';

export default function BookingHistory(props) {
    const [data, setData] = useState(bookingHistory);
    const onPressEnter = (date) => {
        props.navigation.navigate(ScreenKey.Room, {startDate: date});
    };
    const onPressCancel = (item) => {
        Alert.alert('Cancel?', 'Do you want to cancel this lesson?',
        [
            {
                text: 'cancel',
            },
            {
                text:'ok',
                onPress: ()=>{
                    setData(bookingHistory.filter( i => i.id !== item.id));
                },
            },
        ]);
    };
    const onPressTeacherName = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
    };

    const renderItem = ({item}) => (
        <BookingCard item={item} onPressEnter={onPressEnter} onPressTeacherName={onPressTeacherName} onPressCancel={onPressCancel}/>
    );
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem} />
        </View>

    );
}
