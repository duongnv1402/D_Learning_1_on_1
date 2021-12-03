/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import FeedbackCard from './FeedbackCard';
import { feedbacks } from '../../../models/feedbacks';
export default function Feedback() {
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
