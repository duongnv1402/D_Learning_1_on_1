/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState}  from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../../../globals/styles';
export default function Login(props) {
  const [isHide, setHide] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const getTitleText = isHide => {
    return isHide ? 'Show' : 'Hide';
  };
  const onPressSignup = ()=> {
    props.navigation.navigate('Register');
  };
  const onPressForgetPassword = ()=> {
    props.navigation.navigate('ForgetPassword');
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
          placeholder="Your Password"
          onChangeText={password=>setPassword(password)}
          secureTextEntry={isHide}/>
          <TouchableOpacity style={{justifyContent: 'center', flex:1}}
            onPress={() => setHide(!isHide)}>
            <Text >{getTitleText(isHide)}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1}} onPress={onPressSignup}>
            <Text style={styles.text}> Register!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressForgetPassword}>
            <Text style={styles.text}> Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>Log in</Text>
        </TouchableOpacity>
  </View>
  );
}
