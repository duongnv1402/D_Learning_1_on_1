/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {AirbnbRating} from 'react-native-ratings';

export default function FeedbackCard(props) {
    return (
        <View style={styles.Container} >
            <View style={{flexDirection:'row', width: '100%'}}>
                <Image style={styles.Image}
                source={require('../../../../assets/logo.png')}/>
                <View style={{flex:6}}>
                    <Text style={styles.Name}>{props.name}</Text>
                    <View style={{flexDirection:'row'}}>
                        <AirbnbRating showRating={false} defaultRating={props.ratings} isDisabled={true} size={20}/>
                    </View>
                </View>
            </View>
            <Text style={styles.Description}>{props.comment}</Text>
        </View>
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
