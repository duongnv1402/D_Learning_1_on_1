/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React,{useContext} from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Avatar, Button, Divider} from 'react-native-paper';
import { ScreenKey } from '../../globals/constants';
import { AuthContext } from '../../globals/context';

export default function Setting(props) {
    const {logOut} = useContext(AuthContext);
    const {getUser} = useContext(AuthContext);
    const user = getUser();

    const onPressProfile = () => {
        props.navigation.navigate(ScreenKey.Profile);
    };
    const onPressFeedback = () => {
        props.navigation.navigate(ScreenKey.Feedback);
    };
    const onPressBookingHistory = () => {
        props.navigation.navigate(ScreenKey.BookingHistory);
    };
    const onPressSessionHistory = () => {
        props.navigation.navigate(ScreenKey.SessionHistory);
    };
    const onPressAdvancedSetting = () => {
        props.navigation.navigate(ScreenKey.AdvancedSetting);
    };
    const onPressBecomeATeacher = () => {
        props.navigation.navigate(ScreenKey.BecomeATeacher);
    };
    const onPressWebSite = () => {
        //props.navigation.navigate('Profile');
    };
    const onPressFacebook = () => {
        //props.navigation.navigate('Profile');
    };

    return (
        <ScrollView style={styles.Container}>
            <TouchableOpacity onPress={onPressProfile} style={styles.HeaderProfile}>
                <Avatar.Image
                    style={styles.Avatar}
                    size={82}
                    source={{uri:user.avatar}} />
                <View style={styles.HeaderRightView}>
                    <Text style={styles.Title}>{user.name}</Text>
                    <Text style={styles.SubTitle}>{user.email}</Text>
                </View>
                <TouchableOpacity style ={{justifyContent: 'center'}} onPress={()=>{logOut();}}>
                    <Button style={styles.LogoutButton} icon="logout" color="black" uppercase={false}>Logout</Button>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressFeedback}>
                <Button style={styles.Button} icon="account-heart" color="black" uppercase={false}>Feedback</Button>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressBookingHistory}>
                <Button style={styles.Button} icon="format-list-bulleted" color="black" uppercase={false}>Booking history</Button>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressSessionHistory}>
                <Button style={styles.Button} icon="history" color="black" uppercase={false}>Session history</Button>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressAdvancedSetting}>
                <Button style={styles.Button} icon="menu" color="black" uppercase={false}>Advanced Setting</Button>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressBecomeATeacher}>
                <Button style={styles.Button} icon="account-tie" color="black" uppercase={false}>Become a Teacher</Button>
            </TouchableOpacity>
            <View style={{height:20}} />
            <Divider />
            <View style={{height:20}} />
            <TouchableOpacity  onPress={onPressWebSite}>
                <Button style={styles.Button} icon="web" color="black" uppercase={false}>Ours web site</Button>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressFacebook}>
                <Button style={styles.Button} icon="facebook" color="black" uppercase={false}>Facebook</Button>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'aliceblue',
        flex: 1,
    },
    HeaderProfile: {
        flexDirection:'row',
        alignSelf: 'center',
        margin: 8,
        width:'95%',
        backgroundColor: 'white',
        borderRadius:10,
    },
    HeaderRightView: {
        flex:1,
        margin: 8,
        justifyContent: 'space-around',
    },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    Title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    SubTitle: {
        marginTop: 24,
        flex: 1,
    },
    Button: {
        alignSelf: 'center',
        alignItems:'flex-start',
        padding: 4,
        margin: 12,
        fontSize: 18,
        width: '85%',
        borderRadius:26,
        backgroundColor:'white',
    },
    LogoutButton: {
        margin: 4,
        fontSize: 18,
        width: '85%',
        borderRadius:26,
        backgroundColor:'tomato',
    },
});
