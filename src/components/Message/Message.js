/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, View,StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MessageCard from './MessageCard';


export default function Message(props) {
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={styles.Container}>
            <Searchbar
            placeholder="Search messages"
            onChangeText={onChangeSearch}
            value={searchQuery} />
            <ScrollView>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
                <MessageCard nav={props} title = "Duong Nguyen" subtitle="Xin chao, ban co khoe khong?" time = "14-02-2021 08:00 AM"/>
            </ScrollView>
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
