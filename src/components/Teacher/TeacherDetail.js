/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet,Alert, Image} from 'react-native';
import { Button, Chip } from 'react-native-paper';
import {AirbnbRating} from 'react-native-ratings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../globals/constants';

const EXAMPLE_TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. ';

export default function TeacherDetail(props) {
  const [isLoved, setIsLoved] = useState(props.isLoved);
  const onPressMessage = () => {
    props.navigation.navigate(ScreenKey.MessageDialog);
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
  const onPressBooking = ()=>{
    props.navigation.navigate(ScreenKey.TeacherSchedule);
  };
  return (
    <ScrollView>
      <View style={{width: '100%', height: 250, backgroundColor:'blue'}}>
      </View>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <Image
            style={styles.ImageAvatar}
            source={require('../../../assets/logo.png')}
          />
          <View style={{flex:7}}>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.Name}>Duong Nguyen</Text>
              <Ionicons onPress={() => {setIsLoved(!isLoved);}} size={36} name={getNameOfHeartIcon(isLoved)} color="red"/>
            </View>
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
        <Text style={styles.TextTitle}>Introduction</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Language</Text>
        <View style={{flexDirection: 'row'}}>
          <Chip style={styles.Chip}>English</Chip>
          <Chip style={styles.Chip}>Vietnamese</Chip>
        </View>
        <Text style={styles.TextTitle}>Education</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Experience</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Interest</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Profession</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Specialties</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Courses</Text>
        <Text style={styles.Description}>React Native</Text>
        <Text style={styles.TextTitle}>Rating and Comments</Text>
        <View style={{flexDirection:'row', marginLeft: 8 }}>
          <AirbnbRating showRating={false} defaultRating={props.avgRating} isDisabled={false} size={20} color={'red'}/>
          <Text style={{margin: 6}}>(1234)</Text>
        </View>
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
    flex:2,
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
