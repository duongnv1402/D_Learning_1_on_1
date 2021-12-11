/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {courses} from '../../models/courses';

export default function CourseCard(props) {
    const [isLoved, setIsLoved] = useState(props.item.isLoved);

    const getNameOfHeartIcon = (isLoved) => {
        return isLoved ?  'heart' : 'heart-outline';
    };
    return (
        <TouchableOpacity style={styles.Container} onPress={()=>{props.onPressTeacherCard(props.item);}}>
            <View style={{flexDirection:'row', width: '100%'}}>
                <Image style={styles.Image}
                source={{uri:props.item.imgUrl}}/>
                <View style={{flex:4}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.Title}>{props.item.title}</Text>
                        <Ionicons
                            onPress={
                                () => {
                                    setIsLoved(!isLoved);
                                    let pos = courses.findIndex(u => u.id === props.item.id);
                                    courses[pos].isLoved = !courses[pos].isLoved;
                                }
                            }
                            size={36}
                            name={getNameOfHeartIcon(isLoved)} color="red"/>
                    </View>
                    <Text style={styles.Author}>{props.item.author}</Text>
                    <Text style={styles.Description}>{props.item.description}</Text>
                    <Text style={styles.Description}>Level: {props.item.levels} - {props.item.lessonCount} lesson</Text>
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
