/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Alert} from 'react-native';
import { Button, Avatar, TextInput } from 'react-native-paper';
import { ScreenKey } from '../../../globals/constants';
import Video from 'react-native-video';

const EXAMPLE_TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. ';

export default function Session(props) {
  const item = props.route.params.item;
  console.log(item.recordUrl);
  const teacher = item.scheduleDetailInfo.scheduleInfo.tutorInfo;
  const onPressMessage = () => {
    props.navigation.navigate(ScreenKey.MessageDialog, {teacher});
  };
  const onPressReport = () => {
    Alert.alert('Report', 'Do you want to report this session?',
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
      { item.recordUrl === null ? (<View style={{width: '100%', height: 250, backgroundColor:'blue'}}>
      </View>) : (<Video source={{uri: teacher.video}}
       style={styles.backgroundVideo} />)}
      <View style={styles.Container}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image style={styles.Avatar} size={76} source={{uri:teacher.avatar}}  />
          <View style={{flex:7}}>
            <Text style={styles.Name}>{teacher.name}</Text>
            <Text style={styles.Description}>Teacher</Text>
            <Text style={styles.Description}>Viet Nam</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button labelStyle={{fontSize: 30}}
                    icon="android-messages"
                    onPress={()=>{onPressMessage();}}/>
            <Button labelStyle={{fontSize: 30}}
                    icon="alert-circle"
                    onPress={onPressReport}/>
        </View>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <View style={styles.RowView}>
          <TextInput.Icon name="alphabetical" color="lightskyblue"/>
          <Text style={styles.TextTitle}>Student Request</Text>
        </View>
        <Text style={styles.Description}>{item.studentRequest || 'No request'}</Text>
        <View style={styles.RowView}>
          <TextInput.Icon name="border-color" color="lightskyblue"/>
          <Text style={styles.TextTitle}>Tutor Review</Text>
        <Text style={{...styles.Description, color: 'red'}}>{item.scoreByTutor === null ? '' : item.scoreByTutor + '/10'}</Text>
        </View>
        <Text style={styles.Description}>{item.tutorReview || 'No reviews'}</Text>
        <View style={styles.RowView}>
          <TextInput.Icon name="clipboard-text-outline" color="lightskyblue"/>
          <Text style={styles.TextTitle}>Document</Text>
        </View>
        <Text style={styles.Description}>{item.studentMaterials}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    margin: 8,
  },
  RowView: {
    flexDirection:'row',
    alignItems: 'center',
  },
  backgroundVideo: {
    width: '100%',
    height: 250,
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
  Avatar: {
    alignSelf: 'center',
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
    marginLeft: 36,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Chip: {
    borderRadius: 36,
    backgroundColor:'deepskyblue',
    marginLeft: 5,
  },
});
