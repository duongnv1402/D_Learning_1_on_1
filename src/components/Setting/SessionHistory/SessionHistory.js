/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import SessionCard from './SessionCard';

export default function SessionHistory(props) {
    return (
        <ScrollView>
            <SessionCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00" />
            <SessionCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="12:00" timeEnd="14:00" />
            <SessionCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="16:00" timeEnd="18:00" />
            <SessionCard nav={props} name="Dương Nguyễn" date="14-02-2021" timeStart="08:00" timeEnd="10:00" />
            <SessionCard nav={props} name="Dương Nguyễn" date="14-02-2021" timeStart="18:00" timeEnd="20:00" />
            <SessionCard nav={props} name="Dương Nguyễn" date="14-02-2021" timeStart="22:00" timeEnd="23:00" />
            <SessionCard nav={props} name="Dương Nguyễn" date="14-02-2021" timeStart="22:00" timeEnd="23:00" />
        </ScrollView>
    );
}
