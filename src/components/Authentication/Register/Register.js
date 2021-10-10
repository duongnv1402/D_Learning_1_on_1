/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState}  from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../../../globals/styles';

export default function Register(props) {
  const [isHidePassword, setHidePassword] = useState(true);
  const [isHideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const onPressSignUp = () => {
    //Do something
    props.navigation.goBack();
    };
  const getTitleText = isHide => {
    return isHide ? 'Show' : 'Hide';
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
        <Text style={styles.textTitle}>Password</Text>
        <View style={styles.passwordInput}>
          <TextInput style={{flex:10}}
          placeholder="Your password"
          onChangeText={password=>setPassword(password)}
          secureTextEntry={isHidePassword}/>
          <TouchableOpacity style={{justifyContent: 'center', flex:1}}
            onPress={() => setHidePassword(!isHidePassword)}>
            <Text >{getTitleText(isHidePassword)}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textTitle}>Confirm Password</Text>
        <View style={styles.passwordInput}>
          <TextInput style={{flex:10}}
          placeholder="Enter your password again"
          onChangeText={confirmPassword=>setConfirmPassword(confirmPassword)}
          secureTextEntry={isHideConfirmPassword}/>
          <TouchableOpacity style={{justifyContent: 'center', flex:1}}
            onPress={() => setHideConfirmPassword(!isHideConfirmPassword)}>
            <Text >{getTitleText(isHideConfirmPassword)}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressSignUp}>
          <Text>Sign up!</Text>
        </TouchableOpacity>
  </View>
  );
}