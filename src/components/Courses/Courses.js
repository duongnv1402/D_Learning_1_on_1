/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useContext, useEffect, useState} from 'react';
import { View,  StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import CourseCard from './CourseCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScreenKey } from '../../globals/constants';
import { AuthContext } from '../../globals/context';

export default function Courses(props) {
    const [filteredCourses, setFilteredCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [courses, setCourse] = useState([]);
    const [ascendingName, setAscendingName] = useState(true);
    const [ascendingLevel, setAscendingLevel] = useState(true);
    const [ascendingTopics, setAscendingTopics] = useState(true);
    const {getToken} = useContext(AuthContext);
    let isFetched = false;
    const token = getToken(props);
    const getCourses = async () => {
        if (isFetched === false) {
            try {
                const response = await fetch('https://sandbox.api.lettutor.com/course?page=1&size=100', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                }});
                    const json = await response.json();
                    setFilteredCourses(json.data.rows);
                    setCourse(json.data.rows);
                } catch (error) {
                    console.error(error);
                } finally {
                    setIsLoading(false);
                }
        }
     };
    useEffect(() => {
        getCourses();
    },[]);
    const onPressCourseCard = (id) => {
        props.navigation.navigate(ScreenKey.CourseDetail, {id});
    };
    const renderItem = ({item}) => (
        <CourseCard item={item} onPressTeacherCard={onPressCourseCard}/>
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);
    const closeMenu = ()=> {
        setVisible(false);
    };
    const openMenu = ()=> {
        setVisible(true);
    };
    const onChangeSearch = (query) => {
        if (query ) {
            const newData = courses.filter(
              function (item) {
                const itemData = item.name.toLowerCase();
                const textData = query.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredCourses(newData);
        }
        else {setFilteredCourses(courses);}
        setSearchQuery(query);
    };

    return (
        <View style={styles.Container}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:9}}>
                    <Searchbar
                    placeholder="Search course"
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
                                    setFilteredCourses(courses.sort(function(a, b) {
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
                                    closeMenu();
                                }
                            } title="Name" />
                        <Menu.Item
                            onPress={
                                () => {
                                    setFilteredCourses(
                                        courses.sort(function(a, b) {
                                            return ascendingTopics ?  (b.topics.length - a.topics.length) :
                                            (a.topics.length - b.topics.length);
                                        })
                                    );
                                    setAscendingTopics(!ascendingTopics);
                                    closeMenu();
                                }
                            }
                            title="Topics" />
                        <Menu.Item onPress={
                            () => {
                                setFilteredCourses(
                                    courses.sort(function(a, b) {
                                        return ascendingLevel ? (b.level - a.level) : (a.level - b.level);
                                    })
                                );
                                setAscendingLevel(!ascendingLevel);
                                closeMenu();
                            }
                        } title="Level" />
                    </Menu>
                </View>
            </View>
            {isLoading ?
            (<ActivityIndicator size="large" />
            ) :
            (
                filteredCourses.length === 0 ?
                (<View style = {styles.Container2}>
                    <Text style={styles.CenterText}>{searchQuery} is not found</Text>
                    <Text style={styles.MiddleLeftText}>Recommended Courses</Text>
                    <FlatList data={courses} renderItem = {renderItem} />
                </View>
                ) :
                (<FlatList data={filteredCourses} renderItem = {renderItem} />)
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
