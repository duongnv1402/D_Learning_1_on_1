/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import CourseCard from './CourseCard';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Courses(props) {
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
            <ScrollView>
                <CourseCard nav={props} title="React Native" subtitle="Beginner" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginner" description="The quick brown fox jumps over the lazy dog." isLoved={true} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginner" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginner" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginner" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginner" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height:'100%',
        backgroundColor: 'aliceblue',
    },
});
