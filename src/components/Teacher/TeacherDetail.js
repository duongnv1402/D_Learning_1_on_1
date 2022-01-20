/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import {AirbnbRating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../globals/constants';
import Video from 'react-native-video';

export default function TeacherDetail(props) {
    const [teacher, setTeacher] = useState(props.route.params.item);
    const [isLoved, setIsLoved] = useState(teacher.isFavorite);

    const onPressMessage = (item) => {
        props.navigation.navigate(ScreenKey.MessageDialog, {item});
    };
    const onPressMore = (feedbacks)=>{
        props.navigation.navigate(ScreenKey.TeacherFeedbacks, {feedbacks});
    };
    const getNameOfHeartIcon = () => {
        return isLoved ?  'heart' : 'heart-outline';
    };
        const onPressReport = () => {
        Alert.alert('Report', 'Do you want to report this account?',
        [
            {
                text: 'cancel',
            },
            {
                text:'ok',
                onPress: ()=>{
                },
            },
        ]);
    };
    const onPressSchedule = (tutorId)=>{
        props.navigation.navigate(ScreenKey.TeacherSchedule, {tutorId});
    };

    return (
        <ScrollView>
        <Video source={{uri: teacher.video}}
        style={styles.backgroundVideo} />
        <View style={styles.Container}>
            <View style={{flexDirection: 'row', width: '100%'}}>
            <Avatar.Image style={styles.Avatar} size={76} source={{uri:teacher.avatar}}  />
            <View style={{flex:7}}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.Name}>{teacher.name}</Text>
                <Ionicons
                    onPress={
                        () => {
                        setIsLoved(!isLoved);
                        }
                    }
                    size={36}
                    name={getNameOfHeartIcon(isLoved)}
                    color="red"/>
                </View>
                <Text style={styles.Description}>{teacher.email}</Text>
                <Text style={styles.Description}>{teacher.country}</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.Button} onPress={() =>{onPressSchedule(teacher.userId);}}>
                <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize:18}}>Schedule</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button labelStyle={{fontSize: 30, justifyContent: 'center', alignItems: 'center'}}
                        icon="android-messages"
                        onPress={()=>{onPressMessage(teacher);}}/>
                <Button labelStyle={{fontSize: 30}}
                        icon="alert-circle"
                        onPress={onPressReport}/>
            </View>
            <Text style={styles.TextTitle}>Introduction</Text>
            <Text style={styles.Description}>{teacher.bio}</Text>
            <Text style={styles.TextTitle}>Birthday</Text>
            <Text style={styles.Description}>{teacher.birthday}</Text>
            <Text style={styles.TextTitle}>Phone</Text>
            <Text style={styles.Description}>{teacher.phone}</Text>
            <Text style={styles.TextTitle}>Education</Text>
            <Text style={styles.Description}>{teacher.education}</Text>
            <Text style={styles.TextTitle}>Experience</Text>
            <Text style={styles.Description}>{teacher.experience}</Text>
            <Text style={styles.TextTitle}>Profession</Text>
            <Text style={styles.Description}>{teacher.profession}</Text>
            <Text style={styles.TextTitle}>Target Student</Text>
            <Text style={styles.Description}>{teacher.targetStudent}</Text>
            <Text style={styles.TextTitle}>Interests</Text>
            <Text style={styles.Description}>{teacher.interests}</Text>
            <Text style={styles.TextTitle}>Specialties</Text>
            <Text style={styles.Description}>{teacher.specialties}</Text>
            <Text style={styles.TextTitle}>Rating and Comments</Text>
            <View style={{flexDirection:'row', marginLeft: 8 }}>
            <AirbnbRating showRating={false} defaultRating={teacher.avgRating} isDisabled={true} size={20} color={'red'}/>
            <Text style={{margin: 6}}>({teacher.feedbacks.length})</Text>
            <TouchableOpacity style={{justifyContent: 'center', alignSelf: 'center'}} onPress={()=>{onPressMore(teacher.feedbacks);}}>
                <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize:18, color:'lightskyblue'}}>More</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
    alignSelf: 'center',
    margin: 8,
    },
    Cover: {
        width: '100%',
        height: 250,
    },
    Button: {
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
        padding: 10,
        width: 250,
        borderRadius: 15,
        marginTop: 10,
        alignSelf: 'center',
    },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    backgroundVideo: {
        width: '100%',
        height: 250,
    },
    Name: {
        fontWeight: 'bold',
        margin: 8,
        fontSize: 16,
        flex: 1,
    },
    Description: {
        marginLeft: 8,
    },
    TextTitle: {
        color: 'lightskyblue',
        margin: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    Chip: {
        borderRadius: 36,
        backgroundColor:'deepskyblue',
        marginLeft: 5,
    },
});
