/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
export default function SessionCard(props) {
    const session = props.item;
    return (
        <TouchableOpacity style={styles.Container}  onPress={()=>{props.onPressCard(props.item);}}>
            <View style={{flexDirection:'row'}}>
                <Image style={styles.Image}
                source={{uri:session.scheduleDetailInfo.scheduleInfo.tutorInfo.avatar}}/>
                <View>
                <Text style={styles.Name}>{session.scheduleDetailInfo.scheduleInfo.tutorInfo.name}</Text>
                    <View style={styles.Description}>
                        <Text >{session.scheduleDetailInfo.scheduleInfo.date} </Text>
                        <Text style={styles.TimeStart}>{session.scheduleDetailInfo.scheduleInfo.startTime} </Text>
                        <Text> - </Text>
                        <Text style={styles.TimeEnd}>{session.scheduleDetailInfo.scheduleInfo.endTime}</Text>
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
        marginTop: 24,
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
