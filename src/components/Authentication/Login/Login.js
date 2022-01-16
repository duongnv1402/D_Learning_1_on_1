/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useContext, useState}  from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from '../../../globals/styles';
import {Text, TextInput } from 'react-native-paper';
import { ScreenKey } from '../../../globals/constants';
import { AuthContext } from '../../../globals/context';

export default function Login(props) {

  const [isHide, setHide] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressFacebookLogo = () => {

  };
  const onPressGoogleLogo = () => {

  };

  const {logIn} = useContext(AuthContext);

  const getStateOfPassword = isHide => {
    return isHide ? 'eye-off' : 'eye';
  };
  const onPressForgetPassword = ()=> {
    props.navigation.navigate(ScreenKey.ForgetPassword);
  };
  const onPressSignUp = ()=> {
    props.navigation.navigate(ScreenKey.Register);
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
        <View style={styles.passwordInput}>
            <TextInput style={{flex:10}}
            placeholder="Your Password"
            left={<TextInput.Icon name="key" />}
            right={<TextInput.Icon onPress={() => setHide(!isHide)} name={getStateOfPassword(isHide)} />}
            onChangeText={password=>setPassword(password)}
            secureTextEntry={isHide}/>
        </View>
        <View style={{flexDirection:'row-reverse'}}>
            <TouchableOpacity onPress={onPressForgetPassword} >
                <Text style={{fontSize:15, color:'cornflowerblue', marginTop:6}}> Forgot Password?</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{logIn(email, password);}}>
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

