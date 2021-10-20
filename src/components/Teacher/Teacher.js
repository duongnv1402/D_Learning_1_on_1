/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import TeacherCard from './TeacherCard';

export default function Teacher(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.Container}>
            <Searchbar
            placeholder="Search teacher"
            onChangeText={onChangeSearch}
            value={searchQuery} />
            <ScrollView>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" isLoved = {true}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" isLoved = {false}/>
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
