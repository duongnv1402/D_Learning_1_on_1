/* eslint-disable prettier/prettier */

import React,{useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {Avatar, Button, Divider} from 'react-native-paper';
import { ScreenKey } from '../../globals/constants';
import { AuthContext } from '../../globals/context';

export default function Setting(props) {
    const {logOut} = useContext(AuthContext);

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
        <View style={styles.Container}>
            <TouchableOpacity onPress={onPressProfile} style={styles.HeaderProfile}>
                <Avatar.Image style={styles.Avatar} size={82} source={{uri:'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7'}} />
                <View style={styles.HeaderRightView}>
                    <Text style={styles.Title}>Duong Nguyen</Text>
                    <Text style={styles.SubTitle}>example@example.com</Text>
                </View>
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
            <Divider />
            <TouchableOpacity  onPress={onPressWebSite}>
                <Button style={styles.Button} icon="web" color="black" uppercase={false}>Ours web site</Button>
            </TouchableOpacity>
            <TouchableOpacity  onPress={onPressFacebook}>
                <Button style={styles.Button} icon="facebook" color="black" uppercase={false}>Facebook</Button>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{logOut();}}>
                <Button style={styles.LogoutButton} icon="logout" color="black" uppercase={false}>Logout</Button>
            </TouchableOpacity>
        </View>
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
        width: '80%',
    },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    Title: {
        margin: 8,
        fontSize: 18,
    },
    SubTitle: {
        marginLeft: 8,
        marginTop: 14,
        flex: 1,
    },
    Button: {
        alignSelf: 'center',
        alignItems:'flex-start',
        padding: 4,
        margin: 12,
        fontSize: 18,
        width: '95%',
        borderRadius:26,
        backgroundColor:'white',
    },
    LogoutButton: {
        alignSelf: 'center',
        alignItems:'flex-start',
        padding: 4,
        margin: 16,
        fontSize: 18,
        width: '95%',
        borderRadius:26,
        backgroundColor:'tomato',
    },
});
