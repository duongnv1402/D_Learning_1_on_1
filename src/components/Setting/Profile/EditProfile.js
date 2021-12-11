/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.';
export default function EditProfile(props) {
    const onPressChangeAvatar = () => {
    };
    const onPressCancel = () => {
      props.navigation.goBack();
    };
    const onPressSave = () => {
      props.navigation.goBack();
    };
    return (
        <ScrollView style={styles.Container}>
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                <Image style={styles.Image} source={{uri:'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7'}} />
                <TouchableOpacity style={{justifyContent: 'center', marginRight:8}} onPress={onPressChangeAvatar}>
                    <Ionicons size={36} name="camera" color="gray"/>
                </TouchableOpacity>
            </View>
            <Text style={styles.TextTitle}>Name</Text>
            <TextInput style={styles.TextInput}>Nguyễn Dương</TextInput>
            <Text style={styles.TextTitle}>Date of birth</Text>
            <TextInput style={styles.TextInput}>14-02-2000</TextInput>
            <Text style={styles.TextTitle}>Country</Text>
            <TextInput style={styles.TextInput}>Viet Nam</TextInput>
            <Text style={styles.TextTitle}>Phone number</Text>
            <TextInput style={styles.TextInput}>0123456789</TextInput>
            <Text style={styles.TextTitle}>Email</Text>
            <Text style={styles.Email}>example@example.com</Text>
            <Text style={styles.TextTitle}>Education</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Experience</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Interest</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Profession</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Specialties</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Courses</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <View style={{flexDirection:'row', justifyContent: 'space-around', alignSelf:'center', width:'80%', margin:20}}>
                <TouchableOpacity style={styles.buttonCancel} onPress={onPressCancel}>
                    <Text >Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSave} onPress={onPressSave}>
                    <Text >Save</Text>
                </TouchableOpacity>
        </View>
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
  TextInput: {
    width:'90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor:'deepskyblue',
    borderRadius:10,
  },
  TextInputLarger: {
    width:'90%',
    height:120,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor:'deepskyblue',
    borderRadius:10,
  },
  Email: {
    margin:8,
    fontSize:16,
  },
  TextTitle: {
    color: 'lightskyblue',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonCancel: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    width: 100,
    borderRadius: 28,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonSave: {
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    padding: 10,
    width: 100,
    borderRadius: 28,
    marginTop: 10,
    alignSelf: 'center',
  },
});
