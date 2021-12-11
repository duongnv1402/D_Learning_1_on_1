/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';
import SessionCard from './SessionCard';
import {sessions} from '../../../models/sessions';
import { ScreenKey } from '../../../globals/constants';

export default function SessionHistory(props) {
    const onPressTeacherName = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
    };
    const onPressCard = (item) => {
        props.navigation.navigate(ScreenKey.Session, {item});
    };
    const renderItem = ({item}) => (
        <SessionCard item={item} onPressTeacherName = {onPressTeacherName} onPressCard = {onPressCard}/>
    );
    return (
        <FlatList data={sessions}
        renderItem={renderItem} />
    );
}
