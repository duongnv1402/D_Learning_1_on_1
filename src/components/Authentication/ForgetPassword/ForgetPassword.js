/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, Text,TouchableOpacity, Image, TextInput} from 'react-native';
import styles from '../../../globals/styles';

export default function ForgetPassword(props) {
  const [userName, setUserName] = useState('');
  const onPressSubmit = () => {
  //Do something
  props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <Image style={styles.image}
          source={require('../../../../assets/logo-removebg.png')}/>
        <Text style={styles.textTitle}>Email</Text>
        <TextInput style={styles.textInput}
          placeholder="Your Email"
          onChangeText={userName=>setUserName(userName)}
        />
        <TouchableOpacity style={styles.button} onPress={onPressSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
  </View>
);
}