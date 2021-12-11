/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { View,  StyleSheet, FlatList, Text, LogBox } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import CourseCard from './CourseCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {courses} from '../../models/courses';
import { ScreenKey } from '../../globals/constants';

export default function Courses(props) {
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const onPressTeacherCard = (item) => {
        props.navigation.navigate(ScreenKey.CourseDetail, {item});
    };
    const renderItem = ({item}) => (
        <CourseCard item={item} onPressTeacherCard={onPressTeacherCard}/>
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
        if (query) {
            const newData = courses.filter(
              function (item) {
                const itemData = item.title.toLowerCase();
                const textData = query.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredCourses(newData);
        }
        else {setFilteredCourses(courses);}
        setSearchQuery(query);
    };
    LogBox.ignoreLogs(['EventEmitter.removeListener']);

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
                                        if (a.title < b.title) { return -1; }
                                        if (a.title > b.title) { return 1; }
                                        return 0;
                                    }));
                                    closeMenu();
                                }
                            } title="Name" />
                        <Menu.Item
                            onPress={
                                () => {
                                    setFilteredCourses(courses.sort(function(a, b) { return b.lessonCount - a.lessonCount;}));
                                    closeMenu();
                                }
                            }
                            title="Lessons" />
                        <Menu.Item onPress={
                            () => {
                                setFilteredCourses(courses.sort(function(a, b) { return b.isLoved - a.isLoved;}));
                                closeMenu();
                            }
                        } title="Loved" />
                    </Menu>
                </View>
            </View>
            {filteredCourses.length === 0 ?
                (<View style = {styles.Container2}>
                    <Text style={styles.CenterText}>{searchQuery} is not found</Text>
                    <Text style={styles.MiddleLeftText}>Recommended Courses</Text>
                    <FlatList data={courses} renderItem = {renderItem} />
                </View>
                ) :
                (<FlatList data={filteredCourses} renderItem = {renderItem} />)
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
