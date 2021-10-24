/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState}  from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {AirbnbRating} from 'react-native-ratings';
import {Chip} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TeacherCard(props) {
    const navigation = props.nav;
    const [isLoved, setIsLoved] = useState(props.isLoved);
    const onPressTeacherCard = () => {
        navigation.navigation.navigate('TeacherDetail');
    };
    const getNameOfHeart = () => {
        return isLoved ?  'heart' : 'heart-outline';
    };
    return (
        <TouchableOpacity style={styles.Container} onPress={onPressTeacherCard}>
            <View style={{flexDirection:'row', width: '100%'}}>
                <Image style={styles.Image}
                source={require('../../../assets/logo.png')}/>
                <View style={{flex:6}}>
                    <Text style={styles.Name}>{props.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <AirbnbRating showRating={false} defaultRating={props.avgRating} isDisabled={false} size={20}/>
                        <Text style={{margin: 6}}>({props.rateCount})</Text>
                    </View>
                    <View style={{flexDirection:'row', flex:1}}>
                        <Chip style={{backgroundColor:'deepskyblue'}}>{props.language}</Chip>
                    </View>
                </View>
                <Ionicons onPress={() => {setIsLoved(!isLoved);}} size={36} name={getNameOfHeart(isLoved)} color="red"/>
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
    Image: {
        height:70,
        width:70,
        borderRadius:35,
        margin:8,
        flex:2,
    },
    Name: {
        fontWeight:'bold',
        marginTop: 8,
        fontSize:16,
    },
    Description:{
        margin:8,
    },
});
