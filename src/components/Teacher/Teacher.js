/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState, useEffect} from 'react';
import { View, StyleSheet, FlatList, Text, LogBox, ActivityIndicator } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeacherCard from './TeacherCard';
import {ScreenKey} from '../../globals/constants';
import { AuthContext } from '../../globals/context';

export default function Teacher(props) {
    const [data, setData] = useState([]);
    const [filteredTeachers, setFilteredTeachers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [ascendingName, setAscendingName] = useState(false);
    const [ascendingRatings, setAscendingRatings] = useState(false);
    const [ascendingFavorites, setAscendingFavorites] = useState(false);
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
         setFilteredTeachers(json.tutors.rows);
         setData(json.tutors.rows);
       } catch (error) {
         console.error(error);
       } finally {
           setIsLoading(false);
       }
    };
     useEffect(() => {
        getTeachers();
      },[]);

    const renderItem = ({item}) => (
    <TeacherCard nav={props} item={item} onPressTeacherCard={onPressTeacherCard}/>
    );

    const onPressTeacherCard = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
    };

    const onChangeSearch = (query) => {
        if (query) {
            const newData = data.filter(
              function (item) {
                const itemData = item.name.toLowerCase();
                const textData = query.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredTeachers(newData);
        }
        else {setFilteredTeachers(data);}
        setSearchQuery(query);
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);

    const closeMenu = ()=> {
        setVisible(false);
    };

    const openMenu = ()=> {
        setVisible(true);
    };
    LogBox.ignoreLogs(['EventEmitter.removeListener']);
    return (
        <View style={styles.Container}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:9}}>
                    <Searchbar
                    placeholder="Search teacher"
                    onChangeText={onChangeSearch}
                    value={searchQuery} />
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Ionicons  onPress={openMenu} size={36} name="options" color="gray"/>}>
                        <Menu.Item onPress={
                                () => {
                                    setFilteredTeachers(data.sort(function(a, b) {
                                        if (ascendingName){
                                            if (a.name < b.name) { return -1; }
                                            if (a.name > b.name) { return 1; }
                                        } else {
                                            if (a.name < b.name) { return 1; }
                                            if (a.name > b.name) { return -1; }
                                        }
                                        return 0;
                                    }));
                                    setAscendingName(!ascendingName);
                                    setAscendingRatings(false);
                                    setAscendingFavorites(false);
                                    closeMenu();
                                }
                            } title= {ascendingName ? 'Name   ✔' : 'Name'} />
                        <Menu.Item
                            onPress={
                                () => {
                                    setFilteredTeachers(
                                        data.sort(function(a, b) {
                                            return ascendingRatings ? (b.avgRating - a.avgRating) :
                                            (a.avgRating - b.avgRating);
                                        }));
                                    setAscendingRatings(!ascendingRatings);
                                    setAscendingName(false);
                                    setAscendingFavorites(false);
                                    closeMenu();
                                }
                            }
                            title={ascendingRatings ? 'Ratings    ✔' : 'Ratings'} />
                        <Menu.Item onPress={
                            () => {
                                setFilteredTeachers(
                                    data.sort(function(a, b) {
                                        return ascendingFavorites ? (a.isFavorite - b.isFavorite) : (b.isFavorite - a.isFavorite);
                                    }));
                                setAscendingFavorites(!ascendingFavorites);
                                setAscendingRatings(false);
                                setAscendingName(false);
                                closeMenu();
                            }
                        } title={ascendingFavorites ? 'Loved    ✔' : 'Loved'} />
                    </Menu>
                </View>
            </View>
            {isLoading === true ?
                (<ActivityIndicator size="large" />
                ) :
                (filteredTeachers.length === 0 ?
                    (<View style = {styles.Container2}>
                        <Text style={styles.CenterText}>{searchQuery} is not found</Text>
                        <Text style={styles.MiddleLeftText}>Recommended Tutors</Text>
                        <FlatList data={data} renderItem = {renderItem} />
                    </View>
                    ) :
                    (<FlatList data={filteredTeachers} renderItem = {renderItem} />)
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
