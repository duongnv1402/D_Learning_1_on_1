/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog.';
export default function BecomeATeacher() {
    const onPressUploadCertificate = () => {
        setIsUploadedCertificate(true);
    };
    const onPressUploadVideo = () => {
        setIsUploadedVideo(true);
    };
    const onPressCancel = () => {
    };
    const onPressSave = () => {
    };
    const [isUploadedCertificate, setIsUploadedCertificate] = useState(false);
    const [isUploadedVideo, setIsUploadedVideo] = useState(false);

    return (
        <ScrollView style={styles.Container}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.TextTitle}>Upload your certificate</Text>
                <TouchableOpacity style={{justifyContent: 'center', marginRight:8}} onPress={onPressUploadCertificate}>
                    <Ionicons size={36} name="folder" color="gray"/>
                </TouchableOpacity>
                {isUploadedCertificate ? (<Ionicons size={36} name="checkmark" color="lightskyblue"/>) : (<Ionicons size={36} color="lightskyblue"/>)}
            </View>
            <Text style={styles.TextTitle}>Languages</Text>
            <TextInput style={styles.TextInput} />
            <Text style={styles.TextTitle}>Interests</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Education</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Experience</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Current or Previous Profession</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <Text style={styles.TextTitle}>Introduction</Text>
            <TextInput style={styles.TextInputLarger} multiline={true} numberOfLines={4}>{TEXT}</TextInput>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.TextTitle}>Introduction video</Text>
                <TouchableOpacity style={{justifyContent: 'center', marginRight:8}} onPress={onPressUploadVideo}>
                    <Ionicons size={36} name="folder" color="gray"/>
                </TouchableOpacity>
                {isUploadedVideo ? (<Ionicons size={36} name="checkmark" color="lightskyblue"/>) : (<Ionicons size={36} color="lightskyblue"/>)}

            </View>
            <View style={{flexDirection:'row', justifyContent: 'space-around', alignSelf:'center', width:'80%', margin:20}}>
                <TouchableOpacity style={styles.buttonCancel} onPress={onPressCancel}>
                    <Text >Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSave} onPress={onPressSave}>
                    <Text >Submit</Text>
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
