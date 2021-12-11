/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Alert} from 'react-native';
import { Button, Chip, Avatar, TextInput } from 'react-native-paper';
import {users} from '../../../models/users';
import { ScreenKey } from '../../../globals/constants';
const EXAMPLE_TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. ';

export default function TeacherDetail(props) {
  const item = props.route.params.item;
  const user = users.find(u => u.id === item.id);
  const onPressMessage = (id) => {
    props.navigation.navigate(ScreenKey.MessageDialog, {id});
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
      <View style={{width: '100%', height: 250, backgroundColor:'blue'}}>
      </View>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image style={styles.Avatar} size={76} source={{uri:user.avatarUrl}}  />
          <View style={{flex:7}}>
            <Text style={styles.Name}>{user.name}</Text>
            <Text style={styles.Description}>Teacher</Text>
            <Text style={styles.Description}>Viet Nam</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button labelStyle={{fontSize: 30}}
                    icon="android-messages"
                    onPress={()=>{onPressMessage(user.id);}}/>
            <Button labelStyle={{fontSize: 30}}
                    icon="alert-circle"
                    onPress={onPressReport}/>
        </View>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <View style={styles.RowView}>
          <TextInput.Icon name="alphabetical" color="lightskyblue"/>
          <Text style={styles.TextTitle}>Language</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Chip style={styles.Chip}>English</Chip>
          <Chip style={styles.Chip}>Vietnamese</Chip>
        </View>
        <View style={styles.RowView}>
          <TextInput.Icon name="border-color" color="lightskyblue"/>
          <Text style={styles.TextTitle}>Content</Text>
        </View>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <View style={styles.RowView}>
          <TextInput.Icon name="clipboard-text-outline" color="lightskyblue"/>
          <Text style={styles.TextTitle}>Document</Text>
        </View>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
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
