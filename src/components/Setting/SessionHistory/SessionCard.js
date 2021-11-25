/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScreenKey } from '../../../globals/constants';

export default function SessionCard(props) {
    const nav = props.nav;
    const onPressTeacherName = () => {
        nav.navigation.navigate(ScreenKey.TeacherDetail);
    };
    const onPressCard = () => {
        nav.navigation.navigate(ScreenKey.Session);
    };
    return (
        <TouchableOpacity style={styles.Container}  onPress={onPressCard}>
            <View style={{flexDirection:'row'}}>
                <Image style={styles.Image}
                source={require('../../../../assets/logo.png')}/>
                <View>
                    <TouchableOpacity onPress={onPressTeacherName}>
                        <Text style={styles.Name}>{props.name}</Text>
                    </TouchableOpacity>
                    <View style={styles.Description}>
                        <Text style={styles.Date}>{props.date} </Text>
                        <Text style={styles.TimeStart}>{props.timeStart} </Text>
                        <Text> - </Text>
                        <Text style={styles.TimeEnd}>{props.timeEnd}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Container: {
        alignSelf:'center',
        width:'90%',
        borderWidth: 1,
        borderRadius:6,
        margin:8,
        elevation: 2,
        backgroundColor: 'white',
        },
    Image: {
        height:70,
        width:70,
        borderRadius:35,
        margin:8,
    },
    Name: {
        fontWeight:'bold',
        margin:8,
        fontSize:16,
    },
    Description:{
        flexDirection:'row',
        margin:8,
    },
    TimeStart:{
        color:'deepskyblue',
        marginLeft: 8,
    },
    TimeEnd:{
        color:'red',
    },
    ViewButton:{
        flexDirection:'row',
        width:'100%',
    },
    CancelButton:{
        flex:1,
        alignItems: 'center',
        borderWidth: 1,
        borderBottomLeftRadius:5,
        borderTopLeftRadius:6,
    },
    EnterButton:{
        flex:1,
        alignItems: 'center',
        borderWidth: 1,
        borderBottomRightRadius:5,
        borderTopRightRadius:6,
        backgroundColor: 'deepskyblue',
    },
    ButtonText: {
        fontSize:18,
    },
});
