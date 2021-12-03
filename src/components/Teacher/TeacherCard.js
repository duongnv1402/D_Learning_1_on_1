/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState}  from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {Avatar, Chip} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {users} from '../../models/users';
import {teachers} from '../../models/teachers';
export default function TeacherCard(props) {
    const [isLoved, setIsLoved] = useState(props.item.isLoved);
    var user = users.find(u => u.id === props.item.id);
    const getNameOfHeartIcon = () => {
        return isLoved ?  'heart' : 'heart-outline';
    };
    return (
        <TouchableOpacity style={styles.Container} onPress={()=>{
            props.onPressTeacherCard(props.item);
        }}>
            <View style={{flexDirection:'row', width: '100%'}}>
                <Avatar.Image style={styles.Avatar} size={64} source={{uri:user.avatarUrl}}  />
                <View style={{flex:6}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.Name}>{user.name}</Text>
                        <Ionicons
                            onPress={
                                () => {
                                    setIsLoved(!isLoved);
                                    let pos = teachers.findIndex(u => u.id === props.item.id);
                                    teachers[pos].isLoved = !teachers[pos].isLoved;
                                }
                            }
                            size={36}
                            name={getNameOfHeartIcon(isLoved)}
                            color="red"/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <AirbnbRating showRating={false} defaultRating={props.item.avgRating} isDisabled={true} size={20}/>
                        <Text style={{margin: 6}}>({props.item.rateCount})</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Chip style={{backgroundColor:'deepskyblue'}}>{props.item.language}</Chip>
                    </View>
                </View>
            </View>
            <Text
            style={styles.Description}>
            The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog.
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    Container: {
        alignSelf:'center',
        width:'90%',
        borderWidth: 1,
        borderRadius:6,
        margin:8,
        elevation: 2,
        backgroundColor: 'white',
        },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    Name: {
        fontWeight:'bold',
        marginTop: 8,
        fontSize:16,
        flex:1,
    },
    Description:{
        margin:8,
    },
});
