/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Alert} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import styles from '../../../globals/styles';

export default function ForgetPassword(props) {
  const [email, setEmail] = useState('');
  const onPressSubmit = () => {
    if (email) {
      Alert.alert('Successfully', 'Please check your email and try again?',
      [
          {
              text:'ok',
              onPress: ()=>{
                props.navigation.goBack();
              },
          },
      ]);
    }
    else {
      Alert.alert('Failed', 'Please check your email and try again',
      [
          {
              text:'ok',
              onPress: null,
          },
      ]);
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
