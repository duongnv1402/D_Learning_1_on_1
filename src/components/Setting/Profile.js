/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';

export default function Profile() {
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.HeaderProfile}>
        <Image style={styles.Image} source={require('../../../assets/logo.png')} />
        <View>
          <Text style={styles.Name}>Nguyễn Dương</Text>
          <Text style={styles.SDT}>0123456789</Text>
          <Text style={styles.Email}>Contact: example@example.com</Text>
        </View>
      </View>
      <Text style={styles.TextTitle}>Education</Text>
      <Text style={styles.TextTitle}>Experience</Text>
      <Text style={styles.TextTitle}>Interest</Text>
      <Text style={styles.TextTitle}>Profession</Text>
      <Text style={styles.TextTitle}>Specialties</Text>
      <Text style={styles.TextTitle}>Courses</Text>
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
    fontSize:16,
  },
});
