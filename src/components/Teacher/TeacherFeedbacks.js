/* eslint-disable prettier/prettier */
import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import FeedbackCard from '../../components/Setting/Feedback/FeedbackCard';

export default function TeacherFeedbacks({route}) {
    const feedbacks = route.params.feedbacks;
    const renderItem = ({item}) => (
        <FeedbackCard name={item.name} item={item}/>
    );
    return (
        <View style={styles.Container}>
             <FlatList
                data={feedbacks}
                renderItem={renderItem} />
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        height:'100%',
        backgroundColor: 'aliceblue',
    },
});
