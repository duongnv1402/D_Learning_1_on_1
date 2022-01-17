/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useContext} from 'react';
import TeacherCard from '../Teacher/TeacherCard';
import {StyleSheet, View, Text, TouchableOpacity, FlatList, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../globals/constants';
import {Chip} from 'react-native-paper';
import { AuthContext } from '../../globals/context';

export default function Home(props) {
    const [data, setData] = useState();
    const {getToken} = useContext(AuthContext);
    const token = getToken();
    const getTeachers = async () => {
        try {
        const response = await fetch('https://sandbox.api.lettutor.com/tutor/more?perPage=9&page=1', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,

        }});
         const json = await response.json();
         setData(json.tutors.rows);
       } catch (error) {
         console.error(error);
       } finally {
       }
     };
     useEffect(() => {
        getTeachers();
      },[]);
    const renderItem = ({item}) => (
    <TeacherCard item={item} onPressTeacherCard={onPressTeacherCard}/>
    );
    const onPressTeacherCard = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
        //console.log(item);
    };
    const onPressMenu = () => {
        props.navigation.navigate(ScreenKey.Setting);
    };
    const onPressSeeAllButton = () => {
        props.navigation.navigate(ScreenKey.Teachers);
    };
    const onPressEnterRoom = () => {
        props.navigation.navigate(ScreenKey.Room,{startDate: '2021-12-23 08:00:00'});
    };
  return (
    <>
    <View style={styles.HeaderBar}>
        <Text style={styles.HeaderText}>Home</Text>
        <TouchableOpacity style={styles.HeaderRightButton} onPress={onPressMenu}>
            <Ionicons size={36} name="menu" color="gray" />
        </TouchableOpacity>
        </View><View style={styles.Container}>
            <SafeAreaView>
                <FlatList
                    ListHeaderComponent={<View>
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
                        </View>}
                        data={data}
                        renderItem={renderItem} />
            </SafeAreaView>
    </View>
    </>
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
        height:'93%',
        backgroundColor: 'aliceblue',
    },
    Chip: {
        backgroundColor: 'white',
    },
});

