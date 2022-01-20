/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, {useContext, useState, useEffect}  from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {Avatar, Chip} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../globals/context';

export default function TeacherCard(props) {
    const [isLoved, setIsLoved] = useState(false);
    const {getToken} = useContext(AuthContext);
    const token = getToken(props);
    const [teacher, setTeacher] = useState(props.item);
    const getNameOfHeartIcon = () => {
        return isLoved ?  'heart' : 'heart-outline';
    };
    const getMoreData = async() => {
        try {
            const response = await fetch(`https://sandbox.api.lettutor.com/tutor/${props.item.userId}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }});
            const json = await response.json();
            teacher.avgRating = json.avgRating;
            teacher.isFavorite = json.isFavorite;
            setIsLoved(teacher.isFavorite);
           } catch (error) {
             console.error(error);
           } finally {
           }
    };

    const onPressFavorite = async () => {
        try {
            await fetch('https://sandbox.api.lettutor.com/user/manageFavoriteTutor', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                tutorId: teacher.userId,
              }),
            });
            teacher.isFavorite = !teacher.isFavorite;
            setIsLoved(teacher.isFavorite);
           } catch (error) {
             console.error(error);
           } finally {
           }
    };

    useEffect(() => {
        getMoreData();
        return () => {
            setTeacher(props.item);
        }
    },[isLoved]);

    return (
        <TouchableOpacity style={styles.Container} onPress={()=>{
            props.onPressTeacherCard(teacher);
        }}>
            <View style={{flexDirection:'row', width: '100%'}}>
                <Avatar.Image style={styles.Avatar} size={64} source={{uri:teacher.avatar}}  />
                <View style={{flex:6}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.Name}>{teacher.name}</Text>
                        <Ionicons
                            onPress={() => {onPressFavorite();}}
                            size={36}
                            name={getNameOfHeartIcon(isLoved)}
                            color="red"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <AirbnbRating showRating={false} defaultRating={teacher.avgRating} isDisabled={true} size={20}/>
                        <Text style={{margin: 6}}>({teacher.feedbacks.length})</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Chip style={{backgroundColor:'deepskyblue'}}>{teacher.country}</Chip>
                    </View>
                </View>
            </View>
            <Text
            style={styles.Description}>
            {teacher.bio}
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
        flex:1,
    },
    Description:{
        margin:8,
    },
});
