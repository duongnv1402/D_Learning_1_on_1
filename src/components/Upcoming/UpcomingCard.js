/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

export default function UpcomingCard(props) {

    return (
        <View style={styles.Container} >
            <View style={{flexDirection:'row'}}>
                <Avatar.Image style={styles.Avatar} size={64} source={{uri:props.item.avatarUrl}} />
                <View>
                    <Text style={styles.Name}>{props.item.name}</Text>
                    <View style={styles.Description}>
                        <Text >{props.item.date} </Text>
                        <Text style={styles.TimeStart}>{props.item.timeStart} </Text>
                        <Text> - </Text>
                        <Text style={styles.TimeEnd}>{props.item.timeEnd}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ViewButton}>
                <TouchableOpacity style={styles.CancelButton} onPress={props.onPressCancel}>
                    <Text style={styles.ButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.EnterButton} onPress={props.onPressEnter}>
                    <Text style={styles.ButtonText}>Go to the lesson room</Text>
                </TouchableOpacity>
            </View>
        </View>
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
    Avatar: {
        alignSelf: 'center',
        margin: 8,
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
