/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import TeacherCard from '../Commons/TeacherCard';
import {StyleSheet, ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
export default function Home() {
    const onPressAvatarLogo = () => {

    };
  return (
      <View style={styles.Container}>
          <View style={styles.Header}>
              <Text style={{fontWeight:'bold', fontSize:16, marginTop:20, marginLeft:16, flex:10}}>Home</Text>
              <TouchableOpacity onPress={onPressAvatarLogo}>
              <Image
                style={styles.Image}
                source={require('../../../assets/logo.png')} />
              </TouchableOpacity>
          </View>
        <ScrollView style={styles.Container}>
            <View style={styles.Box}>
                <Text style={{alignSelf:'center', fontSize:16,marginTop:20}}>Total lesson time is 1 hour 4 minutes</Text>
                <Text style={{alignSelf:'center', fontSize:14,marginTop:10}}>Up coming lesson</Text>
                <Text style={{alignSelf:'center', fontSize:16,marginTop:10}}>Sat, 16 Oct 2021, 16:00 - 18:00</Text>

                <TouchableOpacity style={styles.Button}>
                    <Text style={{alignSelf: 'center', fontSize:16}}>Enter the lesson room</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',margin:16}}>
                <Text style={{fontStyle:'italic', flex: 11}}>Recommended Tutors</Text>
                <TouchableOpacity style={{justifyContent: 'flex-end', flex:2}}>
                    <Text style={{color:'lightskyblue'}}>See all > </Text>
                </TouchableOpacity>
            </View>
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
            <TeacherCard />
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
},
});

