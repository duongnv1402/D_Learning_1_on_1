/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import { users } from '../../../models/users';
import { Avatar } from 'react-native-paper';
export default function FeedbackCard(props) {
    const user = users.find(u => u.id === props.item.id);
    return (
        <View style={styles.Container} >
            <View style={{flexDirection:'row', width: '100%'}}>
                <Avatar.Image style={styles.Avatar} size={76} source={{uri:user.avatarUrl}}  />
                <View style={{flex:6}}>
                    <Text style={styles.Name}>{user.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <AirbnbRating showRating={false} defaultRating={props.item.ratings} isDisabled={true} size={20}/>
                    </View>
                </View>
            </View>
            <Text style={styles.Description}>{props.item.content}</Text>
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
        marginTop: 8,
        fontSize:16,
    },
    Description:{
        margin:8,
    },
});
