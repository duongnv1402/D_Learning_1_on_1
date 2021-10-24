/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import UpcomingCard from './UpcomingCard';

export default function Upcoming(props) {
    return (
        <ScrollView style={styles.Container}>
            <UpcomingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00"/>
            <UpcomingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00"/>
            <UpcomingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00"/>
            <UpcomingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00"/>
            <UpcomingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00"/>
            <UpcomingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00"/>
            <UpcomingCard nav={props} name="Dương Nguyễn" date="14-02-2022" timeStart="08:00" timeEnd="10:00"/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        height:'100%',
        backgroundColor: 'aliceblue',
    },
});
