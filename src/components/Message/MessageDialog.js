/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import {Avatar, Button} from 'react-native-paper';
export default function MessageDialog({route}) {
    const onClickSend = () => {
    };
    const teacher = route.params.item;
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Avatar.Image style={styles.Avatar} size={48} source={{uri:teacher.avatar}} />
                <View >
                    <Text style={styles.TextName}>{teacher.name}</Text>
                    <Text style={styles.TextType}>Teacher</Text>
                </View>
            </View>
            <ScrollView />
            <View style={styles.Footer}>
                <TextInput style={styles.Input} placeholder="Message" />
                <TouchableOpacity style={styles.Button} onClick={onClickSend} >
                    <Button labelStyle={styles.ButtonStyle} icon="send" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        width:'100%',
        height:'100%',
        backgroundColor: 'aliceblue',
    },
    Header: {
        flexDirection:'row',
        backgroundColor:'lightskyblue',
    },
    Avatar:{
        alignSelf: 'center',
        margin: 8,
    },
    TextName: {
        margin: 6,
        fontSize: 14,
    },
    TextType: {
        margin: 6,
        fontSize: 12,
    },
    Footer: {
        flexDirection:'row',
    },
    Input: {
        flex:10,
        borderRadius:12,
        borderWidth:1,
        margin:8,
        height: 50,
    },
    Button: {
        flex:1,
        alignSelf: 'center',
        alignItems:'center',
        width: 30,
        height: 50,
    },
    ButtonStyle: {
        fontSize: 25,
    },
});
