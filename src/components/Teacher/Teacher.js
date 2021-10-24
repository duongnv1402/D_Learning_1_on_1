/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Searchbar, Menu } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TeacherCard from './TeacherCard';

export default function Teacher(props) {
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
            <ScrollView>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" avgRating={4} rateCount={1234} isLoved = {true}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" avgRating={4} rateCount={1234} isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" avgRating={4} rateCount={1234} isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" avgRating={4} rateCount={1234} isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" avgRating={4} rateCount={1234} isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" avgRating={4} rateCount={1234} isLoved = {false}/>
                <TeacherCard nav={props} name ="Duong Nguyen" language="English" avgRating={4} rateCount={1234} isLoved = {false}/>
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
