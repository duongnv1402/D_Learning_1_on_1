/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
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
        <Image style={styles.Image} source={require('../../../../assets/logo.png')} />
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
    width:'100%',
    height:'100%',
  },
  Image: {
    height:90,
    width:90,
    borderRadius:45,
    margin:16,
    flex:2,
  },
  HeaderProfile:{
    flexDirection:'row',
    width:'100%',
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
