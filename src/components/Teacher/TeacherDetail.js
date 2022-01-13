/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, View, Text, FlatList, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import { Button, Chip, Avatar } from 'react-native-paper';
import {AirbnbRating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../globals/constants';
import Video from 'react-native-video';
import { AuthContext } from '../../globals/context';
import FeedbackCard from '../Setting/Feedback/FeedbackCard';

export default function TeacherDetail(props) {
  const [teacher, setTeacher] = useState(props.route.params.item);
  const [isLoved, setIsLoved] = useState(false);
  const {getToken} = useContext(AuthContext);
  const token = getToken(props);
  const renderItem = ({item}) => (
    <FeedbackCard item={item}/>
);
  const getMoreData = async() => {
    try {
        const response = await fetch(`https://sandbox.api.lettutor.com/tutor/${teacher.userId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // notice the Bearer before your token

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
useEffect(() => {
    getMoreData();
},);
  const onPressMessage = (id) => {
    // props.navigation.navigate(ScreenKey.MessageDialog, {id});
    //console.log(teacher.feedbacks[0].firstInfo.avatar);
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
  const onPressSchedule = ()=>{
    props.navigation.navigate(ScreenKey.TeacherSchedule);
  };
  return (
    <ScrollView>
      <Video source={{uri: teacher.video}}   // Can be a URL or a local file.
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
                      // let pos = teachers.findIndex(u => u.id === user.id);
                      // teachers[pos].isLoved = !teachers[pos].isLoved;
                      // setIsLoved(!isLoved);
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
        <TouchableOpacity style={styles.Button} onPress={onPressSchedule}>
            <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize:18}}>Schedule</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button labelStyle={{fontSize: 30, justifyContent: 'center', alignItems: 'center'}}
                    icon="android-messages"
                    onPress={()=>{onPressMessage(teacher.id);}}/>
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
        {/* <View style={{flexDirection: 'row'}}>
          <Chip style={styles.Chip}>English</Chip>
          <Chip style={styles.Chip}>Vietnamese</Chip>
        </View> */}
        <Text style={styles.TextTitle}>Specialties</Text>
        <Text style={styles.Description}>{teacher.specialties}</Text>
        <Text style={styles.TextTitle}>Rating and Comments</Text>
        <View style={{flexDirection:'row', marginLeft: 8 }}>
          <AirbnbRating showRating={false} defaultRating={teacher.avgRating} isDisabled={false} size={20} color={'red'}/>
          <Text style={{margin: 6}}>({teacher.feedbacks.length})</Text>
        </View>
          <FlatList
            data={teacher.feedbacks}
            renderItem={renderItem} />
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
    margin:1,
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
