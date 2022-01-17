/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import { View, ActivityIndicator, StyleSheet, Text, FlatList } from 'react-native';
import SessionCard from './SessionCard';
import { ScreenKey } from '../../../globals/constants';
import { AuthContext } from '../../../globals/context';

export default function SessionHistory(props) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {getToken} = useContext(AuthContext);
    const today = new Date(Date.now() + 7 * 3600 * 1000).getTime();
    const token = getToken();
    const getData = async () => {
        try {
        const response = await fetch(`https://sandbox.api.lettutor.com/booking/list/student?page=1&perPage=20&dateTimeLte=${today}&orderBy=time&sortBy=time`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }});
        const json = await response.json();
        //console.log(json.data.rows);
        setData(json.data.rows);
        } catch (error) {
         console.error(error);
        } finally {
           setIsLoading(false);
        }
    };
    useEffect(() => {
        getData();
    },[]);
    const onPressCard = (item) => {
        props.navigation.navigate(ScreenKey.Session, {item});
    };
    const renderItem = ({item}) => (
        <SessionCard item={item} onPressCard = {onPressCard}/>
    );
    return (
        <View>
            {isLoading === true  ?
            (<ActivityIndicator size="large" />
            ) :
            (data.length === 0 ?
                (<View style = {styles.Container2}>
                    <Text style={styles.CenterText}>You have no Session</Text>
                    <FlatList data={data} renderItem = {renderItem} />
                </View>
                ) :
                (<FlatList data={data}
                    renderItem={renderItem} />)
            )
        }
        </View>
    );
}


const styles = StyleSheet.create({
    Container: {
        height:'100%',
        backgroundColor: 'aliceblue',
    },
    CenterText: {
            alignSelf: 'center',
            margin: 8,
    },
    MiddleLeftText: {
            fontStyle: 'italic',
            color: 'lightskyblue',
            alignItems: 'flex-start',
            marginLeft: 16,
    },
    Container2: {
            backgroundColor: 'aliceblue',
    },
});
