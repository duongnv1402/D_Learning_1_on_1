/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import styles from '../../../globals/styles';

export default function ForgetPassword(props) {
  const [userName, setUserName] = useState('');
  const onPressSubmit = () => {
  //Do something
  props.navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <Image style={styles.imageLogoLogin}
          source={require('../../../../assets/logo-removedbackground.png')}/>
        <TextInput style={styles.textInput}
          placeholder="Your Email"
          keyboardType="email-address"
          left={<TextInput.Icon name="email" />}
          onChangeText={userName=>setUserName(userName)}
        />
        <TouchableOpacity style={styles.button} onPress={onPressSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
  </View>
);
}
