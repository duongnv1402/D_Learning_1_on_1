/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';
import MessageCard from './MessageCard';
import {messages} from '../../models/messages';
import { users } from '../../models/users';
import { ScreenKey } from '../../globals/constants';

export default function Message(props) {
    const data = messages.map(ms =>{
        const user = users.find(u => u.id === ms.id);
        return {...ms, user};
    });
    const [filteredMessages, setFilteredMessages] = useState(data);

    const renderItem = ({item}) => (
        <MessageCard nav={props} item={item} onPressMessageCard={onPressMessageCard}/>
    );

    const onPressMessageCard = (id) => {
        props.navigation.navigate(ScreenKey.MessageDialog, {id});
    };

    const onChangeSearch = (query) => {
        if (query) {
            const newData = data.filter(
              function (item) {
                const itemData = item.user.name.toLowerCase();
                const textData = query.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredMessages(newData);
        }
        else {setFilteredMessages(data);}
        setSearchQuery(query);
    };

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View >
            <Searchbar
                placeholder="Search messages"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
            <SafeAreaView style={styles.Container}>
            {filteredMessages.length === 0 ?
                (<View style = {styles.Container2}>
                    <Text style={styles.CenterText}>{searchQuery} is not found</Text>
                    <Text style={styles.MiddleLeftText}>Recent messages</Text>
                    <FlatList data={data} renderItem = {renderItem} />
                </View>
                ) :
                (<FlatList data={filteredMessages} renderItem = {renderItem} />)
            }
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'aliceblue',
        height: '93%',
        },
    Container2: {
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
    },
);
