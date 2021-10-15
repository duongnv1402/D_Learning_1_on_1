/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MessageCard from './MessageCard';

export default function Message(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
        <View>
            <Searchbar
            placeholder="Search messages"
            onChangeText={onChangeSearch}
            value={searchQuery} />
            <ScrollView>
                <MessageCard props={props} />
                <MessageCard props={props}/>
                <MessageCard props={props}/>
                <MessageCard props={props}/>
                <MessageCard props={props}/>
                <MessageCard props={props}/>
                <MessageCard props={props}/>
                <MessageCard props={props}/>
            </ScrollView>
        </View>
    );
}
