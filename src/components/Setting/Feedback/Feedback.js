/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList } from 'react-native';
import FeedbackCard from './FeedbackCard';

export default function Feedback() {
    const feedbacks = [
        {
            id: 1,
            name: 'Duong Pham',
            content: 'The quick brown fox jumped over the lazy dog',
            ratings: 4,
        },
        {
            id: 2,
            name: 'Hai Nguyen',
            content: 'The quick brown fox jumped over the lazy dog',
            ratings: 4,
        },
        {
            id: 3,
            name: 'Tuam Pham',
            content: 'The quick brown fox jumped over the lazy dog',
            ratings: 4,
        },
        {
            id: 4,
            name: 'An Nguyen',
            content: 'The quick brown fox jumped over the lazy dog',
            ratings: 4,
        },
        {
            id: 5,
            name: 'Duc Nguyen',
            content: 'The quick brown fox jumped over the lazy dog',
            ratings: 5,
        },
        {
            id: 6,
            name: 'Quynh Pham',
            content: 'The quick brown fox jumped over the lazy dog',
            ratings: 4,
        },
        {
            id: 7,
            name: 'Duong Nguyen',
            content: 'The quick brown fox jumped over the lazy dog',
            ratings: 3,
        },
    ];
    const renderItem = ({item}) => (
        <FeedbackCard name={item.name} item={item}/>
    );
    return (
        <FlatList
        data={feedbacks}
        renderItem={renderItem} />
    );
}
