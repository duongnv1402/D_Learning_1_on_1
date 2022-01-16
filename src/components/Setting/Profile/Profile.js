/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useContext} from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar, TextInput, Chip } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../../globals/constants';
import { AuthContext } from '../../../globals/context';

export default function Profile(props) {
  const {getUser} = useContext(AuthContext);
  const user = getUser();
  const onPressEdit = ()=>{
    props.navigation.navigate(ScreenKey.EditProfile);

  };
  return (
    <ScrollView style={styles.Container}>
      <View style={styles.HeaderProfile}>
        <Avatar.Image style={styles.Avatar} size={82} source={{uri:user.avatar}} />
        <View style={{flex:5}}>
          <Text style={styles.Name}>{user.name}</Text>
          <Text style={styles.SDT}>{user.phone}</Text>
          <Text style={styles.Email}>Contact: {user.email}</Text>
        </View>
        <TouchableOpacity style={{justifyContent: 'center', marginRight:8}} onPress={onPressEdit}>
          <Ionicons size={36} name="create" color="gray"/>
        </TouchableOpacity>
      </View>
      <View style={styles.RowView}>
        <TextInput.Icon name="cake-variant" color="lightskyblue"/>
        <Text style={styles.TextTitle}>Date of Birth</Text>
      </View>
      <Text style={styles.Description}>{user.birthday}</Text>
      <View style={styles.RowView}>
        <TextInput.Icon name="map-marker" color="lightskyblue"/>
        <Text style={styles.TextTitle}>From</Text>
      </View>
      <Text style={styles.Description}>{user.country}</Text>
      <View style={styles.RowView}>
        <TextInput.Icon name="book-open-variant" color="lightskyblue"/>
        <Text style={styles.TextTitle}>Learn Topics</Text>
      </View>
      <View style={styles.RowView}>
      { user.learnTopics.length === 0 ? <Text> You have no topics.</Text> :
      user.learnTopics.map((topic) => <Chip style={styles.Chip} key={topic.id}>{topic.name}</Chip>)}
      </View>
      <View style={styles.RowView}>
        <TextInput.Icon name="chart-line-variant" color="lightskyblue"/>
        <Text style={styles.TextTitle}>Level</Text>
      </View>
      <Text style={styles.Description}>{user.level}</Text>
      {/* <View style={styles.RowView}>
        <TextInput.Icon name="check-circle-outline" color="lightskyblue"/>
        <Text style={styles.TextTitle}>Interest</Text>
      </View>
      <Text style={styles.Description}>{TEXT}</Text>
      <View style={styles.RowView}>
        <TextInput.Icon name="account-check-outline" color="lightskyblue"/>
        <Text style={styles.TextTitle}>Profession</Text>
      </View>
      <Text style={styles.Description}>{TEXT}</Text>
      <View style={styles.RowView}>
        <TextInput.Icon name="account-box-outline" color="lightskyblue"/>
        <Text style={styles.TextTitle}>Specialties</Text>
      </View>
      <Text style={styles.Description}>{TEXT}</Text> */}
      <View style={styles.RowView}>
        <TextInput.Icon name="view-list" color="lightskyblue"/>
        <Text style={styles.TextTitle}>Courses</Text>
      </View>
      <View style={styles.RowView}>
      { user.courses.length === 0 ? <Text> You have no courses</Text> :
      user.courses.map( (course) => <Chip style={styles.Chip} key={course.id}>{course.name}</Chip>)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container:{
    height:'100%',
    margin: 16,
  },
  Chip: {
    borderRadius: 36,
    backgroundColor:'deepskyblue',
    marginLeft: 5,
  },
  RowView: {
    flexDirection:'row',
    alignItems: 'center',
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
    marginLeft: 30,
  },
});
