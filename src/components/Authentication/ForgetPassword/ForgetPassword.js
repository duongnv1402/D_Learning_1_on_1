/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import styles from '../../../globals/styles';

export default function ForgetPassword(props) {
  const [email, setEmail] = useState('');
  const onPressSubmit = async () => {
    if (email) {
      try {
        const response = await fetch('https://sandbox.api.lettutor.com/user/forgotPassword', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
          }),
          });
        const json = await response.json();
        if (response) {
          if (response.status === 200) {
            Alert.alert('Success', json.message, [{text:'ok'}]);
          }
          else {
            Alert.alert('Failed', json.message, [{text:'ok'}]);
          }
        }
        else {
          Alert.alert('Failed', 'Something went wrong', [{text:'ok'}]);
        }
      } catch (e) {
        throw e;
      }
    }
  };
  return (
    <View style={styles.container}>
        <Image style={styles.imageLogoLogin}
          source={require('../../../../assets/logo-removedbackground.png')}/>
        <TextInput style={styles.textInput}
          placeholder="Your Email"
          keyboardType="email-address"
          left={<TextInput.Icon name="email" />}
          onChangeText={email=>setEmail(email)}
        />
        <TouchableOpacity style={styles.button} onPress={onPressSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
  </View>
);
}
