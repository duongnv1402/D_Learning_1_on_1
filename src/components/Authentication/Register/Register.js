/* eslint-disable prettier/prettier */
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
  const [fullName, setFullname] = useState('');

  const [confirmPassword, setConfirmPassword] = useState('');
  const onPressFacebookLogo = () => {

  };
  const onPressGoogleLogo = () => {

  };
  const onPressSignUp = () => {
    props.navigation.goBack();
    };
  const onPressLogin = () => {
      props.navigation.goBack();
    };
  const getStateOfPassword = isHide => {
    return isHide ? 'Show' : 'Hide';
  };
  return (
    <View style={styles.container}>
        <Text style={styles.textTitle}>Fullname</Text>
        <TextInput style={styles.textInput}
          placeholder="Name"
          onChangeText={fullName => setFullname(fullName)}
        />
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
            <Text >{getStateOfPassword(isHidePassword)}</Text>
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
            <Text >{getStateOfPassword(isHideConfirmPassword)}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPressSignUp}>
          <Text>Sign up!</Text>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', marginTop:10, fontSize:16}}>Or continue with</Text>
        <View style={{flexDirection:'row', justifyContent: 'space-around', alignSelf:'center', width:200, marginTop:20}}>
          <TouchableOpacity onPress={onPressGoogleLogo}>
            <Image style={styles.imageLogoItemLogin} source={require('../../../../assets/logo-google.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressFacebookLogo}>
            <Image style={styles.imageLogoItemLogin} source={require('../../../../assets/logo-facebook.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center', marginTop:10}}>
          <Text style={styles.text}>Don't have account?</Text>
          <TouchableOpacity onPress={onPressLogin}>
            <Text style={{fontSize:16, color:'cornflowerblue'}}> Log in</Text>
          </TouchableOpacity>
        </View>
  </View>
  );
}
