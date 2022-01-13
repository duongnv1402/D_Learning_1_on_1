/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet, Image, ActivityIndicator, FlatList, SafeAreaView, LogBox } from 'react-native';
import { AuthContext } from '../../globals/context';

export default function CoursesDetail(props) {
    const courseId = props.route.params.id;
    const [loading, setLoading] = useState(true);
    const {getToken} = useContext(AuthContext);
    const [course, setCourse] = useState([]);
    let isFetched = false;
    const token = getToken(props);
    const getCourse = async () => {
        if (isFetched === false) {
            try {
                const response = await fetch(`https://sandbox.api.lettutor.com/course/${courseId}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // notice the Bearer before your token
                }});
                const json = await response.json();
                setCourse(json.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
    };
    useEffect(() => {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        getCourse();
    },[]);

    return (
    <ScrollView>
        {loading ? (
            <View >
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        ) :
        (
            <><Image style={{ width: '100%', height: 300 }} source={{ uri: course.imageUrl }}></Image><View style={styles.Container}>
                <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 7 }}>
                    <Text style={styles.Name}>{course.name}</Text>
                </View>
                </View>
                <Text style={styles.TextTitle}>Description</Text>
                <Text style={styles.Description}>{course.description}</Text>
                <Text style={styles.TextTitle}>Reason</Text>
                <Text style={styles.Description}>{course.reason}</Text>
                <Text style={styles.TextTitle}>Purpose</Text>
                <Text style={styles.Description}>{course.purpose}</Text>
                <Text style={styles.TextTitle}>Price</Text>
                <Text style={styles.Description}>{course.course_price === 0 ? 'Free' : course.course_price}</Text>
                <Text style={styles.TextTitle}>List Topics</Text>
                <FlatList
                    data={course.topics}
                    renderItem = {({item}) => {return <Text style={styles.Description}>{item.name}</Text>;}}>
                </FlatList>
            </View></>
        )}
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        backgroundColor: 'aliceblue',
    },
    Icon: {
        justifyContent: 'center',
        margin: 8,
    },
    Name: {
        fontWeight: 'bold',
        margin: 16,
        fontSize: 20,
    },
    Description: {
        marginLeft: 16,
    },
    TextTitle: {
        color: 'lightskyblue',
        margin: 16,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
