/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Avatar } from 'react-native-paper';

export default function MessageCard(props) {
    const navigation = props.nav;
    const onPressCard = () => {
        navigation.navigation.navigate('MessageDialog');
    };
    return (
        <TouchableOpacity onPress={onPressCard} style={styles.Container}>
            <Avatar.Image style={styles.Avatar} size={64} source={{uri:props.avatarUrl}} />
            <View style={{width: '80%'}}>
                <Text style={styles.Title}>{props.title}</Text>
                <View style={{flexDirection:'row', width: '100%'}}>
                    <Text style={styles.SubTitle} numberOfLines={1}>{props.subtitle} </Text>
                    <Text style={styles.Time}>at {props.time}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    Container: {
        flexDirection:'row',
        alignSelf: 'center',
        margin: 8,
        width:'95%',
        borderBottomWidth:1,
    },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    Title: {
        margin: 8,
        fontSize: 18,
    },
    SubTitle: {
        marginLeft: 8,
        marginTop: 14,
        flex: 1,
    },
    Time: {
        marginLeft: 8,
        marginTop: 14,
        flex: 1,
    },
});
