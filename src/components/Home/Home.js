/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import TeacherCard from '../Teacher/TeacherCard';
import {StyleSheet, ScrollView, View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home(props) {
    const onPressMenu = () => {
        props.navigation.navigate('Setting');
    };
    const onPressSeeAllButton = () => {
        props.navigation.navigate('Teachers');
    };
    const onPressEnterRoom = () => {
        props.navigation.navigate('Room');
    };
  return (
      <View style={styles.Container}>
          <View style={styles.Header}>
              <Text style={{fontWeight:'bold', fontSize:16, marginTop:20, marginLeft:16, flex:10}}>Home</Text>
              <TouchableOpacity style={{justifyContent: 'center', marginRight:8}} onPress={onPressMenu}>
                <Ionicons size={36} name="menu" color="gray"/>
              </TouchableOpacity>
          </View>
        <ScrollView style={styles.Container}>
            <View style={styles.Box}>
                <Text style={{alignSelf:'center', fontSize:16,marginTop:20}}>Total lesson time is 1 hour 4 minutes</Text>
                <Text style={{alignSelf:'center', fontSize:14,marginTop:10}}>Up coming lesson</Text>
                <Text style={{alignSelf:'center', fontSize:16,marginTop:10}}>Sat, 16 Oct 2021, 16:00 - 18:00</Text>
                <TouchableOpacity onPress={onPressEnterRoom} style={styles.Button}>
                    <Text style={{alignSelf: 'center', fontSize:16}}>Enter the lesson room</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',margin:16}}>
                <Text style={{fontStyle:'italic', flex: 11}}>Recommended Tutors</Text>
                <TouchableOpacity style={{justifyContent: 'flex-end', flex:2}} onPress={onPressSeeAllButton}>
                    <Text style={{color:'lightskyblue'}}>See all </Text>
                </TouchableOpacity>
            </View>
            <TeacherCard nav={props} name ="Duong Nguyen" avgRating={4} rateCount={1234} language="English" isLoved = {false} />
            <TeacherCard nav={props} name ="Duong Nguyen" avgRating={4} rateCount={1234} language="English" isLoved = {true}/>
            <TeacherCard nav={props} name ="Duong Nguyen" avgRating={4} rateCount={1234} language="English" isLoved = {false}/>
            <TeacherCard nav={props} name ="Duong Nguyen" avgRating={4} rateCount={1234} language="English" isLoved = {false}/>
            <TeacherCard nav={props} name ="Duong Nguyen" avgRating={4} rateCount={1234} language="English" isLoved = {false}/>
            <TeacherCard nav={props} name ="Duong Nguyen" avgRating={4} rateCount={1234} language="English" isLoved = {true}/>
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor:'lightskyblue',
        height:200,
        width:'100%',
    },
    Header:{
        flexDirection:'row',
        height:60,
        backgroundColor:'white',
    },
    Button:{
        backgroundColor:'white',
        borderRadius:20,
        width:160,
        height:32,
        alignSelf:'center',
        justifyContent: 'center',
        marginTop:20,
    },
    Image: {
        justifyContent: 'flex-end',
        width:40,
        height:40,
        borderRadius:20,
        margin:10,
    },
    Container: {
        width:'100%',
        height:'100%',
        backgroundColor: 'aliceblue',
},
});

