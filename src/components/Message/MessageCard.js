/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Avatar } from 'react-native-paper';
import { ScreenKey } from '../../globals/constants';

export default function MessageCard(props) {
    const navigation = props.nav;
    const onPressCard = () => {
        navigation.navigation.navigate(ScreenKey.MessageDialog, {
            url: props.item.avatarUrl,
            name: props.item.name,
        });
    };
    return (
        <TouchableOpacity onPress={onPressCard} style={styles.Container}>
            <Avatar.Image style={styles.Avatar} size={56} source={{uri:props.item.avatarUrl}} />
            <View style={styles.RightView}>
                <Text style={styles.Title}>{props.item.name}</Text>
                <View style={styles.BottomText}>
                    <Text style={styles.SubTitle} numberOfLines={1}>{props.item.messages} </Text>
                    <Text >at {props.item.time}</Text>
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
    },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    Title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    SubTitle: {
        flex: 1,
    },
    RightView: {
        width:'80%',
        justifyContent: 'space-around',
    },
    BottomText: {
        flexDirection:'row',
        width: '100%',
    },
});
