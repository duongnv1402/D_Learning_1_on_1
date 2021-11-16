/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import CourseCard from './CourseCard';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Courses(props) {
    const courses = [
        {
            id: 1,
            name: 'Duong Pham',
            title: 'React Native Courses',
            imgUrl: 'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e',
            levels: 'Beginner',
            description: 'The quick brown fox jumped over the lazy dog',
            lessonCount: 4,
            isLoved: true,
        },
        {
            id: 2,
            name: 'Hai Nguyen',
            title: 'React Native Courses',
            imgUrl: 'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e',
            levels: 'Beginner',
            description: 'The quick brown fox jumped over the lazy dog',
            lessonCount: 4,
            isLoved: true,
        },
        {
            id: 3,
            name: 'Tuam Pham',
            title: 'React Native Courses',
            imgUrl: 'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e',
            levels: 'Beginner',
            description: 'The quick brown fox jumped over the lazy dog',
            lessonCount: 4,
            isLoved: false,
        },
        {
            id: 4,
            name: 'An Nguyen',
            title: 'React Native Courses',
            imgUrl: 'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e',
            levels: 'Beginner',
            description: 'The quick brown fox jumped over the lazy dog',
            lessonCount: 4,
            isLoved: true,
        },
        {
            id: 5,
            name: 'Duc Nguyen',
            title: 'React Native Courses',
            imgUrl: 'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e',
            levels: 'Beginner',
            description: 'The quick brown fox jumped over the lazy dog',
            lessonCount: 4,
            isLoved: false,
        },
        {
            id: 6,
            name: 'Quynh Pham',
            title: 'React Native Courses',
            imgUrl: 'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e',
            levels: 'Beginner',
            description: 'The quick brown fox jumped over the lazy dog',
            lessonCount: 4,
            isLoved: false,
        },
        {
            id: 7,
            name: 'Duong Nguyen',
            title: 'React Native Courses',
            imgUrl: 'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e',
            levels: 'Beginner',
            description: 'The quick brown fox jumped over the lazy dog',
            lessonCount: 4,
            isLoved: true,
        },
    ];
    const renderItem = ({item}) => (
        <CourseCard nav = {props} name={item.name} title={item.true} imgUrl={item.imgUrl} subtitle={item.subtitle} description={item.description} isLoved={item.isLoved} lessonCount={item.lessonCount}/>
    );
    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);
    const closeMenu = ()=> {
        setVisible(false);
    };
    const openMenu = ()=> {
        setVisible(true);
    };
    const onChangeSearch = query => setSearchQuery(query);
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
                        <Menu.Item onPress={() => {}} title="Name" />
                        <Menu.Item onPress={() => {}} title="Level" />
                        <Menu.Item onPress={() => {}} title="Loved" />
                    </Menu>
                </View>
            </View>
            <FlatList
            data={courses}
            renderItem={renderItem} />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height:'100%',
        backgroundColor: 'aliceblue',
    },
});
