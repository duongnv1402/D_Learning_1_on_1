/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState}  from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

export default function TeacherCard() {
    return (
        <TouchableOpacity style={styles.Container}>
            <View style={{flexDirection:'row'}}>
                <Image style={styles.Image}
                source={require('../../../assets/logo.png')}/>
                <View>
                    <Text style={styles.Name}>My Name</Text>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.Language}>
                        <Text style={{margin:4}}>My language</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Language}>
                        <Text style={{margin:4}}>My language</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text
            style={styles.Description}>
            The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog.
            </Text>
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
        margin:8,
    },
    Language: {
        borderRadius:36,
        backgroundColor:'lightskyblue',
        elevation:2,
        marginLeft:5,
    },
});
