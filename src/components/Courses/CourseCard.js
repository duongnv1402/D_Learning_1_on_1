/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function CourseCard(props) {
    return (
        <TouchableOpacity style={styles.Container} onPress={()=>{props.onPressTeacherCard(props.item.id);}}>
            <View style={{flexDirection:'row', width: '100%'}}>
                <Image style={styles.Image}
                source={{uri:props.item.imageUrl}}/>
                <View style={{flex:4}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.Title}>{props.item.name}</Text>
                    </View>
                    <Text style={styles.Author}>{props.item.description}</Text>
                    <Text style={styles.Description} numberOfLines= {2} >{props.item.purpose}</Text>
                    <Text style={styles.Description}>Level: {props.item.level} - {props.item.topics.length} topics</Text>
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
        height:120,
        width:120,
        margin:8,
        flex:3,
    },
    Title: {
        fontWeight:'bold',
        margin: 8,
        fontSize:16,
        flex:1,
    },
    Author: {
        margin: 8,
        fontSize: 16,
    },
    Description:{
        margin: 8,
    },
});
