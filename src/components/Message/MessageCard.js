/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Avatar} from 'react-native-paper';

export default function MessageCard(props) {
    const onPressCard = () => {
        props.props.navigation.navigate('MessageDialog');

    };
    return (
        <TouchableOpacity onPress={onPressCard} style={styles.Container}>
            <Avatar.Image style={styles.Avatar} size={64} source={require('../../../assets/logo.png')} />
            <View style={{width: '80%'}}>
                <Text style={styles.TextName}>Name</Text>
                <View style={{flexDirection:'row', width: '100%'}}>
                    <Text style={styles.TextMessage}>Hello 😍</Text>
                    <Text style={styles.TextTime}>at 06:00PM 12/3/2021</Text>
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
    },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    TextName: {
        margin: 8,
        fontSize: 18,
    },
    TextMessage: {
        marginLeft: 8,
        marginTop: 14,
        flex: 1,
    },
    TextTime: {
        marginLeft: 8,
        marginTop: 14,
        flex: 1,
    },
});
