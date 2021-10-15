/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet,Alert, Image} from 'react-native';
import { Button } from 'react-native-paper';


export default function TeacherDetail(props) {
  const onPressBooking = () => {
    props.navigation.navigate('Booking');
  };
  const onPressMessage = () => {
    props.navigation.navigate('MessageDialog');
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
  return (
    <ScrollView>
      <View style={{width: '100%', height: 250, backgroundColor:'blue'}}>
      </View>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.ImageAvatar}
            source={require('../../../assets/logo.png')}
          />
          <View>
            <Text style={styles.Name}>My Name</Text>
            <Text style={styles.Description}>Teacher</Text>
            <Text style={styles.Description}>Viet Nam</Text>

          </View>
        </View>
        <TouchableOpacity style={styles.Button} onPress={onPressBooking}>
            <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize:18}}>Booking</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button labelStyle={{fontSize: 30}}
                    icon="android-messages"
                    onPress={onPressMessage}/>
            <Button labelStyle={{fontSize: 30}}
                    icon="alert-circle"
                    onPress={onPressReport}/>
        </View>
        <Text style={styles.Description}>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.
        </Text>
        <Text style={styles.TextTitle}>Language</Text>
        <View style={{flexDirection: 'row'}}>
              <View style={styles.Language}>
                <Text style={{margin: 4}}>My language</Text>
              </View>
              <View style={styles.Language}>
                <Text style={{margin: 4}}>My language</Text>
              </View>
        </View>
        <Text style={styles.TextTitle}>Education</Text>
        <Text style={styles.TextTitle}>Experience</Text>
        <Text style={styles.TextTitle}>Interest</Text>
        <Text style={styles.TextTitle}>Profession</Text>
        <Text style={styles.TextTitle}>Specialties</Text>
        <Text style={styles.TextTitle}>Courses</Text>
        <Text style={styles.TextTitle}>Rating and Comments</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    margin: 8,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    padding: 10,
    width: 250,
    borderRadius: 28,
    marginTop: 10,
    alignSelf: 'center',
  },
  ImageAvatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    margin: 8,
  },
  Name: {
    fontWeight: 'bold',
    margin: 8,
    fontSize: 16,
  },
  Description: {
    marginLeft: 8,
  },
  TextTitle: {
    color: 'lightskyblue',
    margin: 8,
  },
  Language: {
    borderRadius: 36,
    backgroundColor: 'lightskyblue',
    elevation: 2,
    marginLeft: 5,
  },
});
