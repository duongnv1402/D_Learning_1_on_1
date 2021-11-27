/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Text, LogBox } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeacherCard from './TeacherCard';
import {ScreenKey} from '../../globals/constants';

export default function Teacher(props) {
    const defaultTeachers = [
        {
            id: 1,
            name: 'Duong Nguyen',
            avgRating: 3,
            rateCount:53,
            language:'English',
            isLoved: true,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 2,
            name: 'Nam Nguyen',
            avgRating: 4,
            rateCount: 1234,
            language:'English',
            isLoved: false,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 3,
            name: 'Tuan Pham',
            avgRating: 4,
            rateCount: 225,
            language:'English',
            isLoved: false,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 4,
            name: 'Trinh Nguyen',
            avgRating: 4,
            rateCount: 1234,
            language:'Vietnamese',
            isLoved: true,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
        {
            id: 5,
            name: 'Tuan Tran',
            avgRating: 4,
            rateCount: 996,
            language:'English',
            isLoved: false,
            avatarUrl: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/239732778_2864726213792769_9066963956251065581_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lLviv4IdvtoAX8l3AZY&_nc_ht=scontent.fsgn2-4.fna&oh=645d6b1394d246c7af3d22001e1e4904&oe=6198D6D7',
        },
    ];

    const [filteredTeachers, setFilteredTeachers] = useState(defaultTeachers);

    const renderItem = ({item}) => (
    <TeacherCard nav={props} item={item} onPressTeacherCard={onPressTeacherCard}/>
    );

    const onPressTeacherCard = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);
    const closeMenu = ()=> {
        setVisible(false);
    };
    const openMenu = ()=> {
        setVisible(true);
    };
    const onChangeSearch = (query) => {
        if (query) {
            const newData = defaultTeachers.filter(
              function (item) {
                const itemData = item.name ? item.name.toLowerCase() : ''.toLowerCase();
                const textData = query.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredTeachers(newData);
        }
        else {setFilteredTeachers(defaultTeachers);}
        setSearchQuery(query);
    };
    LogBox.ignoreLogs(['EventEmitter.removeListener']);

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
                        <Menu.Item onPress={
                                () => {
                                    setFilteredTeachers(defaultTeachers.sort(function(a, b) { return b.name - a.name;}));
                                    closeMenu();
                                }
                            } title="Name" />
                        <Menu.Item
                            onPress={
                                () => {
                                    setFilteredTeachers(defaultTeachers.sort(function(a, b) { return b.rateCount - a.rateCount;}));
                                    closeMenu();
                                }
                            }
                            title="Ratings" />
                        <Menu.Item onPress={() => {closeMenu();}} title="Loved" />
                    </Menu>
                </View>
            </View>
            {filteredTeachers.length === 0 ?
                (<View style = {styles.Container2}>
                    <Text style={styles.CenterText}>{searchQuery} is not found</Text>
                    <Text style={styles.MiddleLeftText}>Recommended Tutors</Text>
                    <FlatList data={defaultTeachers} renderItem = {renderItem} />
                </View>
                ) :
                (<FlatList data={filteredTeachers} renderItem = {renderItem} />)
            }
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        height:'100%',
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
    Container2: {
        backgroundColor: 'aliceblue',
    },
});
