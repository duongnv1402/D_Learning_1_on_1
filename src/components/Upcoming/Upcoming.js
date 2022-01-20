/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react';
import { FlatList, StyleSheet, View, Text, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import UpcomingCard from './UpcomingCard';
import {ScreenKey} from '../../globals/constants';
import { AuthContext } from '../../globals/context';

export default function Upcoming(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const {getToken} = useContext(AuthContext);
    const token = getToken();
    const today = new Date(Date.now()).getTime();
    const getData = async () => {
        try {
        const response = await fetch(`https://sandbox.api.lettutor.com/booking/list/student?page=1&perPage=20&dateTimeGte=${today}&sortBy=time`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }});
        const json = await response.json();
        if (response.status === 200){
            setData(json.data.rows);
        }
        } catch (error) {
         console.error(error);
        } finally {
           setIsLoading(false);
           setRefresh(false);
        }
     };
     const cancelBookedClass = async (scheduleDetailId) =>{
        await fetch('https://sandbox.api.lettutor.com/booking', {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // notice the Bearer before your token
            },
            body: JSON.stringify({
                scheduleDetailIds: [scheduleDetailId],
              }),
        });
     };
    useEffect(() => {
        getData();
    },[refresh]);

    const renderItem = ({item}) => (
        <UpcomingCard nav={props} item={item} onPressCancel={onPressCancel} onPressEnter={()=>{
            onPressEnter(item.scheduleDetailInfo.scheduleInfo.date + ' ' + item.scheduleDetailInfo.scheduleInfo.startTime);}}/>
    );
    const onPressCancel = (scheduleDetailId) => {
        Alert.alert('Report', 'Do you want to cancel this lesson?',
        [
            {
                text: 'cancel',
            },
            {
                text:'ok',
                onPress: ()=>{
                    cancelBookedClass(scheduleDetailId);
                    setRefresh(true);
                },
            },
        ]);
    };
    const onPressEnter = (date) => {
        props.navigation.navigate(ScreenKey.Room, {startDate: date});
    };

    const onPressBook = () => {
        props.navigation.navigate(ScreenKey.Teachers);
    };

    return (
        <View>
            <View style={styles.HeaderBar}>
                <Text style={styles.HeaderText}>Upcoming</Text>
            </View>
            {isLoading === true ?
                (<ActivityIndicator size="large" />
                ) :
                (data.length === 0 ?
                    (<View style={styles.Container}>
                        <Text style={styles.CenterText}>You don't have upcoming class</Text>
                        <TouchableOpacity onPress={onPressBook}>
                            <Text style={styles.CenterTextLink}>Go to book?</Text>
                        </TouchableOpacity>
                        <FlatList data={data} renderItem = {renderItem} />
                    </View>) :
                    (<FlatList style={styles.Container}
                        data={data}
                        renderItem={renderItem} />)
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height:'93%',
        backgroundColor: 'aliceblue',
    },
    CenterText: {
        alignSelf: 'center',
        margin: 8,
        fontSize: 16,
    },
    HeaderText: {
        fontWeight:'bold',
        fontSize:16,
        marginLeft:16,
        flex:10,
        alignSelf: 'center',
    },
    CenterTextLink: {
        alignSelf: 'center',
        margin: 8,
        fontStyle: 'italic',
        color: 'lightskyblue',
    },
    HeaderBar:{
        flexDirection:'row',
        height:50,
        backgroundColor:'white',
    },
});
