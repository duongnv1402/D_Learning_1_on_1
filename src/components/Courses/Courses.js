/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import CourseCard from './CourseCard';

export default function Courses(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.Container}>
            <Searchbar
            placeholder="Search courses"
            onChangeText={onChangeSearch}
            value={searchQuery} />
            <ScrollView>
                <CourseCard nav={props} title="React Native" subtitle="Beginer" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginer" description="The quick brown fox jumps over the lazy dog." isLoved={true} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginer" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginer" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginer" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>
                <CourseCard nav={props} title="React Native" subtitle="Beginer" description="The quick brown fox jumps over the lazy dog." isLoved={false} lessonCount={10}/>

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
