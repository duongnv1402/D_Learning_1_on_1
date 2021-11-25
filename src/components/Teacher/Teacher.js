/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeacherCard from './TeacherCard';

export default function Teacher(props) {
    const teachers = [
        {
            id: 1,
            name: 'Duong Nguyen',
            avgRating: 4,
            rateCount:1234,
            language:'English',
            isLoved: false,
        },
        {
            id: 2,
            name: 'Duong Nguyen',
            avgRating: 4,
            rateCount:1234,
            language:'English',
            isLoved: false,
        },
        {
            id: 3,
            name: 'Duong Nguyen',
            avgRating: 4,
            rateCount:1234,
            language:'English',
            isLoved: false,
        },
        {
            id: 4,
            name: 'Duong Nguyen',
            avgRating: 4,
            rateCount:1234,
            language:'English',
            isLoved: false,
        },
        {
            id: 5,
            name: 'Duong Nguyen',
            avgRating: 4,
            rateCount:1234,
            language:'English',
            isLoved: false,
        },
    ];
    const renderItem = ({item}) => (
    <TeacherCard nav={props} name = {item.name} avgRating={item.avgRating} rateCount={item.rateCount} language={item.language} isLoved = {item.isLoved} />
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
                    placeholder="Search teacher"
                    onChangeText={onChangeSearch}
                    value={searchQuery} />
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
                    <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={<Ionicons  onPress={openMenu} size={36} name="options" color="gray"/>}>
                        <Menu.Item onPress={() => {}} title="Name" />
                        <Menu.Item onPress={() => {}} title="Ratings" />
                        <Menu.Item onPress={() => {}} title="Loved" />
                    </Menu>
                </View>
            </View>
            <FlatList
            data={teachers}
            renderItem = {renderItem} />
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        height:'100%',
        backgroundColor: 'aliceblue',
    },
});
