/* eslint-disable prettier/prettier */

import React from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../../globals/constants';

const TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.';
export default function Profile(props) {
  const onPressEdit = ()=>{
    props.navigation.navigate(ScreenKey.EditProfile);

  };
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.HeaderProfile}>
        <Avatar.Image style={styles.Avatar} size={82} source={{uri:'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7'}} />
        <View style={{flex:5}}>
          <Text style={styles.Name}>Nguyễn Dương</Text>
          <Text style={styles.SDT}>0123456789</Text>
          <Text style={styles.Email}>Contact: example@example.com</Text>
        </View>
        <TouchableOpacity style={{justifyContent: 'center', marginRight:8}} onPress={onPressEdit}>
          <Ionicons size={36} name="create" color="gray"/>
        </TouchableOpacity>
      </View>
      <Text style={styles.TextTitle}>Date of Birth</Text>
      <Text style={styles.Description}>14-02-2000</Text>
      <Text style={styles.TextTitle}>From</Text>
      <Text style={styles.Description}>Viet Nam</Text>
      <Text style={styles.TextTitle}>Education</Text>
      <Text style={styles.Description}>{TEXT}</Text>
      <Text style={styles.TextTitle}>Experience</Text>
      <Text style={styles.Description}>{TEXT}</Text>
      <Text style={styles.TextTitle}>Interest</Text>
      <Text style={styles.Description}>{TEXT}</Text>
      <Text style={styles.TextTitle}>Profession</Text>
      <Text style={styles.Description}>{TEXT}</Text>
      <Text style={styles.TextTitle}>Specialties</Text>
      <Text style={styles.Description}>{TEXT}</Text>
      <Text style={styles.TextTitle}>Courses</Text>
      <Text style={styles.Description}>{TEXT}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container:{
    height:'100%',
    margin: 16,
  },
  Avatar: {
    alignSelf: 'center',
    margin: 8,
  },
  HeaderProfile:{
    flexDirection:'row',
  },
  Name: {
    fontWeight:'bold',
    margin:16,
    fontSize:20,
    marginLeft:8,
  },
  SDT:{
    marginLeft:8,
    fontSize:16,
  },
  Email: {
    margin:8,
    fontSize:16,
  },
  Description:{
      margin:8,
  },
  TextTitle: {
    color: 'lightskyblue',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
