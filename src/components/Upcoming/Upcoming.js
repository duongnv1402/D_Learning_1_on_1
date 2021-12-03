/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { FlatList, StyleSheet, View, Text, Alert } from 'react-native';
import UpcomingCard from './UpcomingCard';
import {ScreenKey} from '../../globals/constants';
import { upcoming } from '../../models/upcoming';

export default function Upcoming(props) {
    const [data, setData] = useState(upcoming);

    const renderItem = ({item}) => (
        <UpcomingCard nav={props} item={item} onPressCancel={onPressCancel} onPressEnter={()=>{onPressEnter(item.date + ' ' + item.timeStart);}}/>
    );
    const onPressCancel = (item) => {
        Alert.alert('Report', 'Do you want to cancel this lesson?',
        [
            {
                text: 'cancel',
            },
            {
                text:'ok',
                onPress: ()=>{
                    setData(data.filter( i => i.id !== item.id));
                },
            },
        ]);
    };
    const onPressEnter = (date) => {
        props.navigation.navigate(ScreenKey.Room, {startDate: date});
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
