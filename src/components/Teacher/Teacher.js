/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import { View, StyleSheet, FlatList, Text, LogBox } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeacherCard from './TeacherCard';
import {ScreenKey} from '../../globals/constants';
import {teachers} from '../../models/teachers';
import {users} from '../../models/users';

export default function Teacher(props) {
    const data = teachers.map(teacher =>{
        const user = users.find(u => u.id === teacher.id);
        return {...teacher, user};
    });
    const [filteredTeachers, setFilteredTeachers] = useState(data);

    const renderItem = ({item}) => (
    <TeacherCard nav={props} item={item} onPressTeacherCard={onPressTeacherCard}/>
    );

    const onPressTeacherCard = (item) => {
        props.navigation.navigate(ScreenKey.TeacherDetail, {item});
    };

    const onChangeSearch = (query) => {
        if (query) {
            const newData = data.filter(
              function (item) {
                const itemData = item.user.name.toLowerCase();
                const textData = query.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredTeachers(newData);
        }
        else {setFilteredTeachers(data);}
        setSearchQuery(query);
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [visible, setVisible] = useState(false);

    const closeMenu = ()=> {
        setVisible(false);
    };

    const openMenu = ()=> {
        setVisible(true);
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
                                    setFilteredTeachers(data.sort(function(a, b) {
                                        if (a.user.name < b.user.name) { return -1; }
                                        if (a.user.name > b.user.name) { return 1; }
                                        return 0;
                                    }));
                                    closeMenu();
                                }
                            } title="Name" />
                        <Menu.Item
                            onPress={
                                () => {
                                    setFilteredTeachers(data.sort(function(a, b) { return b.avgRating - a.avgRating;}));
                                    closeMenu();
                                }
                            }
                            title="Ratings" />
                        <Menu.Item onPress={
                            () => {
                                setFilteredTeachers(data.sort(function(a, b) { return b.isLoved - a.isLoved;}));
                                closeMenu();
                            }
                        } title="Loved" />
                    </Menu>
                </View>
            </View>
            {filteredTeachers.length === 0 ?
                (<View style = {styles.Container2}>
                    <Text style={styles.CenterText}>{searchQuery} is not found</Text>
                    <Text style={styles.MiddleLeftText}>Recommended Tutors</Text>
                    <FlatList data={data} renderItem = {renderItem} />
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
