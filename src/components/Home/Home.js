/* eslint-disable prettier/prettier */
import React from 'react';
import TeacherCard from '../Teacher/TeacherCard';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../globals/constants';
import {Chip} from 'react-native-paper';

export default function Home(props) {
    const teachers = [
        {
            id: 1,
            name: 'Duong Nguyen',
            avgRating: 3,
            rateCount:53,
            language:'English',
            isLoved: true,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 2,
            name: 'Nam Nguyen',
            avgRating: 4,
            rateCount: 1234,
            language:'English',
            isLoved: false,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 3,
            name: 'Tuan Pham',
            avgRating: 4,
            rateCount: 225,
            language:'English',
            isLoved: false,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 4,
            name: 'Trinh Nguyen',
            avgRating: 4,
            rateCount: 1234,
            language:'Vietnamese',
            isLoved: true,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 5,
            name: 'Tuan Tran',
            avgRating: 4,
            rateCount: 996,
            language:'English',
            isLoved: false,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
    ];
    const renderItem = ({item}) => (
    <TeacherCard item={item} onPressTeacherCard={onPressTeacherCard}/>
    );
    const onPressTeacherCard = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
    };
    const onPressMenu = () => {
        props.navigation.navigate(ScreenKey.Setting);
    };
    const onPressSeeAllButton = () => {
        props.navigation.navigate(ScreenKey.Teachers);
    };
    const onPressEnterRoom = () => {
        props.navigation.navigate(ScreenKey.Room);
    };
  return (
      <View style={styles.Container}>
          <View style={styles.HeaderBar}>
              <Text style={styles.HeaderText}>Home</Text>
              <TouchableOpacity style={styles.HeaderRightButton} onPress={onPressMenu}>
                <Ionicons size={36} name="menu" color="gray"/>
              </TouchableOpacity>
          </View>
        <SafeAreaView >
            <FlatList
            ListHeaderComponent = {
                <View>
                    <View style={styles.Box}>
                        <Text style={styles.TextBox}>Up coming lesson</Text>
                        <Text style={styles.TextBox}>Sat, 16 Oct 2021, 16:00 - 18:00</Text>
                        <TouchableOpacity onPress={onPressEnterRoom} style={styles.Button}>
                            <Chip style={styles.Chip}>Enter lesson Room</Chip>
                        </TouchableOpacity>
                    </View>
                        <View style={styles.MiddleView}>
                            <Text style={styles.MiddleLeftText}>Recommended Tutors</Text>
                            <TouchableOpacity onPress={onPressSeeAllButton}>
                                <Text style={styles.MiddleRightText}>See all </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            }
            data = {teachers}
            renderItem = {renderItem}
            />
        </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
    Box: {
        backgroundColor:'lightskyblue',
        height:200,
        width:'100%',
        justifyContent: 'space-around',
    },
    HeaderText: {
        fontWeight:'bold',
        fontSize:16,
        marginLeft:16,
        flex:10,
        alignSelf: 'center',
    },
    HeaderRightButton: {
        justifyContent: 'center',
         marginRight:16,
    },
    MiddleView: {
        flexDirection: 'row',
        margin: 16,
    },
    MiddleLeftText: {
        fontStyle: 'italic',
        flex: 1,
    },
    MiddleRightText: {
        color: 'lightskyblue',
    },
    HeaderBar:{
        flexDirection:'row',
        height:50,
        backgroundColor:'white',
    },
    TextBox: {
        alignSelf: 'center',
        fontSize: 16,
    },
    Button:{
        borderRadius:25,
        alignSelf: 'center',
        marginTop:20,
    },
    Container: {
        height: '93%',
        backgroundColor: 'aliceblue',
    },
    Chip: {
        backgroundColor: 'white',
    },
});

