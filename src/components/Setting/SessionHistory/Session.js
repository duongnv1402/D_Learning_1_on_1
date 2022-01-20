/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {ScrollView, View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import { Button, Avatar, TextInput } from 'react-native-paper';
import {AirbnbRating} from 'react-native-ratings';
import { ScreenKey } from '../../../globals/constants';
import { AuthContext } from '../../../globals/context';
import Video from 'react-native-video';


export default function Session(props) {
    const item = props.route.params.item;
    const {getToken} = useContext(AuthContext);
    const token = getToken();
    const teacher = item.scheduleDetailInfo.scheduleInfo.tutorInfo;
    const [content, setContent] = useState('');
    let rating = 5;
    const onPressMessage = () => {
        props.navigation.navigate(ScreenKey.MessageDialog, {teacher});
    };
    const onPressReport = () => {
        Alert.alert('Report', 'Do you want to report this session?',
        [
            {
                text: 'cancel',
            },
            {
                text:'ok',
                onPress: ()=>{
                },
            },
        ]);
    };
    const onPressSend = async () => {
        try {
            const response = await fetch('https://sandbox.api.lettutor.com/user/feedbackTutor', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                bookingId: item.id,
                userId: item.scheduleDetailInfo.scheduleInfo.tutorId,
                rating: rating,
                content: content,
            }),
            });
            if (response.status === 200) {
                Alert.alert('Success', 'Your review has been posted successfully',
                [
                    {
                        text: 'ok',
                    },
                ]);
            }
            else {
                Alert.alert('Failed', 'Something went wrong',
                [
                    {
                        text: 'ok',
                    },
                ]);
            }
        } catch (e) {
        } finally {
        }
    };

    const ratingCompleted = (r) => {
        rating = r;
    };

    return (
        <ScrollView>
        { item.recordUrl === null ? (<View style={{width: '100%', height: 250, backgroundColor:'blue'}}>
        </View>) : (<Video source={{uri: teacher.video}}
        style={styles.backgroundVideo} />)}
        <View style={styles.Container}>
            <View style={{flexDirection: 'row'}}>
            <Avatar.Image style={styles.Avatar} size={76} source={{uri:teacher.avatar}}  />
            <View style={{flex:7}}>
                <Text style={styles.Name}>{teacher.name}</Text>
                <Text style={styles.Description}>Teacher</Text>
                <Text style={styles.Description}>{teacher.country}</Text>
            </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button
                    labelStyle={{fontSize: 30}}
                    icon="android-messages"
                    onPress={()=>{onPressMessage();}}/>
                <Button
                    labelStyle={{fontSize: 30}}
                    icon="alert-circle"
                    onPress={onPressReport}/>
            </View>
            <View style={styles.RowView}>
            <TextInput.Icon name="alphabetical" color="lightskyblue"/>
            <Text style={styles.TextTitle}>Student Request</Text>
            </View>
            <Text style={styles.Description}>{item.studentRequest || 'No request'}</Text>
            <View style={styles.RowView}>
            <TextInput.Icon name="border-color" color="lightskyblue"/>
            <Text style={styles.TextTitle}>Tutor Review</Text>
            <Text style={{...styles.Description, color: 'red'}}>{item.scoreByTutor === null ? '' : item.scoreByTutor + '/10'}</Text>
            </View>
            <Text style={styles.Description}>{item.tutorReview || 'No reviews'}</Text>
            <View style={styles.RowView}>
            <TextInput.Icon name="clipboard-text-outline" color="lightskyblue"/>
            <Text style={styles.TextTitle}>Document</Text>
            </View>
            <Text style={styles.Description}>{item.studentMaterials}</Text>
            <View style={styles.RowView}>
                <TextInput.Icon name="star" color="lightskyblue"/>
                <Text style={styles.TextTitle}>Write a review</Text>
                <AirbnbRating
                    showRating={false}
                    isDisabled={false}
                    defaultRating={rating}
                    onFinishRating={(r) => {ratingCompleted(r);}}
                    size={20}/>
            </View>
            <View style={styles.RowView}>
                <TextInput
                        style={styles.TextInput}
                        onChangeText={ c =>setContent(c)}>
                </TextInput>
                <TouchableOpacity style={{justifyContent: 'center', alignSelf: 'center'}} onPress={()=>{onPressSend();}}>
                    <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize:18, color:'lightskyblue'}}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        margin: 8,
        width: '100%',
        backgroundColor: 'aliceblue',
    },
    TextInput: {
        backgroundColor: 'white',
        height: 50,
        flex: 1,
        margin: 8,
    },
    RowView: {
        flexDirection:'row',
        alignItems: 'center',
        margin: 8,
    },
    backgroundVideo: {
        width: '100%',
        height: 250,
    },
    Button: {
        alignItems: 'center',
        backgroundColor: 'deepskyblue',
        padding: 10,
        width: 250,
        borderRadius: 28,
        marginTop: 10,
        alignSelf: 'center',
    },
    Avatar: {
        alignSelf: 'center',
        margin: 8,
    },
    Name: {
        fontWeight: 'bold',
        margin: 8,
        fontSize: 16,
    },
    Description: {
        marginLeft: 8,
    },
    TextTitle: {
        color: 'lightskyblue',
        margin: 8,
        marginLeft: 36,
        fontSize: 16,
        fontWeight: 'bold',
    },
    Chip: {
        borderRadius: 36,
        backgroundColor:'deepskyblue',
        marginLeft: 5,
    },
});
