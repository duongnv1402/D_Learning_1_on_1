/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView } from 'react-native';
import FeedbackCard from './FeedbackCard';

export default function Feedback() {
    return (
        <ScrollView>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={4}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={5}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={5}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={5}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={5}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={3}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={1}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={1}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={1}/>
            <FeedbackCard name="Dương Nguyễn" comment="The quick brown fox jumped over the lazy dog" ratings={1}/>
        </ScrollView>
    );
}
