/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import TeacherCard from './TeacherCard';

export default function Teacher(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <Searchbar
            placeholder="Search teacher"
            onChangeText={onChangeSearch}
            value={searchQuery} />
            <ScrollView>
                <TeacherCard nav={props}/>
                <TeacherCard nav={props}/>
                <TeacherCard nav={props}/>
                <TeacherCard nav={props}/>
                <TeacherCard nav={props}/>
                <TeacherCard nav={props}/>
                <TeacherCard nav={props}/>
        </ScrollView>
        </View>
    );
}
