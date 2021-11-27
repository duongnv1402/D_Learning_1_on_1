/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import WeekView from 'react-native-week-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function TeacherSchedule() {
    const myEvents = [
        {
            id: 1,
            description: 'Booked',
            startDate: new Date(2021, 10, 24, 12, 0),
            endDate: new Date(2021, 10, 24, 14, 0),
            color: 'deepskyblue',
        },
        {
            id: 2,
            description: 'Booked',
            startDate: new Date(2021, 10, 24, 14, 0),
            endDate: new Date(2021, 10, 24, 18, 0),
            color: 'deepskyblue',
            },// More events...
    ];

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDateTimePicker();
    };
    return (
        <ScrollView>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <Text style={styles.Text}>Schedule: </Text>
                <TouchableOpacity style={styles.buttonSave} onPress={showDateTimePicker}>
                    <Text >Booking</Text>
                </TouchableOpacity>
            </View>
            <WeekView
            events={myEvents}
            selectedDate={new Date()}
            numberOfDays={7}
            hoursInDisplay={30}
            />
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDateTimePicker}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  Text: {
    color: 'lightskyblue',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  buttonSave: {
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    padding: 10,
    width: 100,
    borderRadius: 28,
    margin: 8,
    alignSelf: 'center',
  },
});
