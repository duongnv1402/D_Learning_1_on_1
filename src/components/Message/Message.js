/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MessageCard from './MessageCard';


export default function Message(props) {
    const user = [
        {
            id: 1,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
            name: 'An Nguyen',
            messages: 'Xin chao, ban co khoe khong',
            time: '14-02-2021 08:00 AM',
        },
        {
            id: 2,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
            name: 'Minh Nguyen',
            messages: 'Xin chao',
            time: '14-02-2021 08:00 AM',
        },
        {
            id: 3,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
            name: 'Tuan Pham',
            messages: 'Xin chao, ban co khoe khong',
            time: '14-02-2021 08:00 AM',
        },
        {
            id: 4,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
            name: 'Lam Vu',
            messages: 'Love you',
            time: '14-02-2021 08:00 AM',
        },
        {
            id: 5,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
            name: 'Hai Nguyen',
            messages: 'Hi',
            time: '14-02-2021 08:00 AM',
        },
        {
            id: 6,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
            name: 'Pham Duc',
            messages: 'Xin chao, ban co khoe khong',
            time: '14-02-2021 08:00 AM',
        },
        {
            id: 7,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
            name: 'Duong Nguyen',
            messages: 'Xin chao, ban co khoe khong',
            time: '14-02-2021 08:00 AM',
        },
    ];
    const renderItem = ({item}) => (
        <MessageCard nav={props} avatarUrl = {item.avatarUrl} title ={item.name} subtitle={item.messages} time ={item.time}/>
    );
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.Container}>
            <Searchbar
            placeholder="Search messages"
            onChangeText={onChangeSearch}
            value={searchQuery} />
            <FlatList
            data={user}
            renderItem={renderItem}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'aliceblue',
        height: '100%',
        },
    }
);
