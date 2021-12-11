/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState}  from 'react';
import {View, Image, TouchableOpacity, Alert} from 'react-native';
import styles from '../../../globals/styles';
import {Text, TextInput} from 'react-native-paper';

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
    if (userName && password && fullName && confirmPassword) {
      if (confirmPassword === password) {
        Alert.alert('Successfully', 'Back to login screen',
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
        Alert.alert('Failed', 'Password and confirm password do not match',
        [
            {
                text:'ok',
                onPress: ()=>{
                },
            },
        ]);
      }
    }
    else {
      Alert.alert('Failed', 'Please try again',
      [
          {
              text:'ok',
              onPress: ()=>{
              },
          },
      ]);
    }
    };
  const onPressLogin = () => {
      props.navigation.goBack();
    };
  const getStateOfPassword = isHide => {
    return isHide ? 'eye-off' : 'eye';
  };
  return (
    <View style={styles.container}>
        <TextInput style={styles.textInput}
          placeholder="Your Full Name"
          onChangeText={fullName => setFullname(fullName)}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput style={styles.textInput}
          placeholder="Your Email"
          onChangeText={userName=>setUserName(userName)}
          left={<TextInput.Icon name="email" />}

        />
        <View style={styles.passwordInput}>
          <TextInput style={{flex:10}}
            placeholder="Your Password"
            left={<TextInput.Icon name="key" />}
            right={<TextInput.Icon onPress={() => setHidePassword(!isHidePassword)} name={getStateOfPassword(isHidePassword)} />}
            onChangeText={password=>setPassword(password)}
            secureTextEntry={isHidePassword}/>
        </View>
        <View style={styles.passwordInput}>
          <TextInput style={{flex:10}}
          placeholder="Enter your password again"
          onChangeText={confirmPassword=>setConfirmPassword(confirmPassword)}
          secureTextEntry={isHideConfirmPassword}
          left={<TextInput.Icon name="key" />}
          right={<TextInput.Icon onPress={() => setHideConfirmPassword(!isHideConfirmPassword)}
          name={getStateOfPassword(isHideConfirmPassword)} />}
          />
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
