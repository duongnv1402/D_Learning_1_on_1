/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useContext, useState} from 'react';
import {ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../../../globals/context';
import { ScreenKey } from '../../../globals/constants';

export default function EditProfile(props) {
    const {getUser, setUser} = useContext(AuthContext);
    const user = getUser();
    const [name, setName] = useState(user.name);
    const [dob, setDob] = useState(user.birthday);
    const [country, setCountry] = useState(user.country);
    const [phone, setPhone] = useState(user.phone);
    const {getToken} = useContext(AuthContext);
    const token = getToken(props);
        const onPressChangeAvatar = () => {
        };
        const onPressCancel = () => {
        props.navigation.goBack();
        };
        const onPressSave = async () => {
            const response = await fetch('https://sandbox.api.lettutor.com/user/info', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                name: name,
                birthday: dob,
                country: country,
                phone: phone,
            }),
            });
            const json = await response.json();
            if (response) {
                if (response.status === 200) {
                    user.name = name;
                    user.phone = phone;
                    user.birthday = dob;
                    user.country = country;
                    setUser(user);
                    Alert.alert('Success', 'Change your information successfully', [{
                        text:'ok',
                        onPress: () => {props.navigation.navigate(ScreenKey.Home);}}]);
                }
                else {
                     Alert.alert('Failed', json.message, [{text:'ok'}]);
                }
              }
        };
        return (
            <ScrollView style={styles.Container}>
                <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                    <Image style={styles.Image} source={{uri: user.avatar}} />
                    <TouchableOpacity style={{justifyContent: 'center', marginRight:8}} onPress={onPressChangeAvatar}>
                        <Ionicons size={36} name="camera" color="gray"/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.TextTitle}>Name</Text>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={name=> setName(name)}
                    >{name} </TextInput>
                <Text style={styles.TextTitle}>Date of birth</Text>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={ dob => setDob(dob)}
                    >{dob}</TextInput>
                <Text style={styles.TextTitle}>Country</Text>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={ country => setCountry(country)}
                    >{country}</TextInput>
                <Text style={styles.TextTitle}>Phone number</Text>
                <TextInput
                    style={styles.TextInput}
                    onChangeText={ phone => setPhone(phone)}
                    >{phone}</TextInput>
                <Text style={styles.TextTitle}>Email</Text>
                <Text style={styles.Email}>{user.email}</Text>
                <View style={{flexDirection:'row', justifyContent: 'space-around', alignSelf:'center', width:'80%', margin:20}}>
                    <TouchableOpacity style={styles.buttonCancel} onPress={onPressCancel}>
                        <Text >Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonSave} onPress={onPressSave}>
                        <Text >Save</Text>
                    </TouchableOpacity>
            </View>
            </ScrollView>
        );
    }

    const styles = StyleSheet.create({
    Container:{
        width:'100%',
        height:'100%',
    },
    Image: {
        height:90,
        width:90,
        borderRadius:45,
        margin:16,
    },
    TextInput: {
        width:'90%',
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor:'deepskyblue',
        borderRadius:10,
    },
    TextInputLarger: {
        width:'90%',
        height:120,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor:'deepskyblue',
        borderRadius:10,
    },
    Email: {
        margin: 8,
        marginLeft: 16,
        fontSize: 16,
    },
    TextTitle: {
        color: 'lightskyblue',
        margin: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonCancel: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        width: 100,
        borderRadius: 28,
        marginTop: 10,
        alignSelf: 'center',
    },
    buttonSave: {
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
        padding: 10,
        width: 100,
        borderRadius: 28,
        marginTop: 10,
        alignSelf: 'center',
    },
});
