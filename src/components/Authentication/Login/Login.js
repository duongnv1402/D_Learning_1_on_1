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
  const onPressFacebookLogo = () => {

  };
  const onPressGoogleLogo = () => {

  };
  const getStateOfPassword = isHide => {
    return isHide ? 'Show' : 'Hide';
  };
  const onPressForgetPassword = ()=> {
    props.navigation.navigate('ForgetPassword');
  };
  const onPressSignUp = ()=> {
    props.navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
        <Image style={styles.imageLogoLogin}
          source={require('../../../../assets/logo-removedbackground.png')}/>
        <Text style={styles.textTitle}>Email</Text>
        <TextInput style={styles.textInput}
          placeholder="Your Email"
          keyboardType="email-address"
          onChangeText={userName=>setUserName(userName)}
        />
        <Text style={styles.textTitle}>Password</Text>
        <View style={styles.passwordInput}>
          <TextInput style={{flex:10}}
          placeholder="Your Password"
          onChangeText={password=>setPassword(password)}
          secureTextEntry={isHide}/>
          <TouchableOpacity style={{justifyContent: 'center', flex:1, margin:10}}
            onPress={() => setHide(!isHide)}>
            <Text >{getStateOfPassword(isHide)}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row-reverse'}}>
          <TouchableOpacity onPress={onPressForgetPassword} >
            <Text style={{fontSize:15, color:'cornflowerblue', marginTop:6}}> Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Log in</Text>
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
          <TouchableOpacity onPress={onPressSignUp}>
            <Text style={{fontSize:16, color:'cornflowerblue'}}> Sign up</Text>
          </TouchableOpacity>
        </View>
  </View>
  );
}
