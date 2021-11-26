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
            avgRating: 3,
            rateCount:53,
            language:'English',
            isLoved: true,
        },
        {
            id: 2,
            name: 'Nam Nguyen',
            avgRating: 4,
            rateCount: 1234,
            language:'English',
            isLoved: false,
        },
        {
            id: 3,
            name: 'Tuan Pham',
            avgRating: 4,
            rateCount: 225,
            language:'English',
            isLoved: false,
        },
        {
            id: 4,
            name: 'Trinh Nguyen',
            avgRating: 4,
            rateCount: 1234,
            language:'Vietnamese',
            isLoved: true,
        },
        {
            id: 5,
            name: 'Tuan Tran',
            avgRating: 4,
            rateCount: 996,
            language:'English',
            isLoved: false,
        },
    ];
    const renderItem = ({item}) => (
    <TeacherCard nav={props} item={item} />
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
