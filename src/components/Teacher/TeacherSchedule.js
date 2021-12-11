/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, View, Alert } from 'react-native';
import WeekView from 'react-native-week-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {events} from '../../models/events';

export default function TeacherSchedule(props) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDateTimePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDateTimePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let event = {
            id: events.length + 1,
            description: 'Booked',
            startDate: date,
            endDate: new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours() + 2, date.getMinutes(), date.getSeconds()),
            color: 'deepskyblue',
        };
        events.push(event);
        hideDateTimePicker();
        Alert.alert('Success', 'Successful booking',
      [
          {
              text:'ok',
              onPress: ()=>{
                    props.navigation.goBack();
              },
          },
      ]);
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
            events={events}
            selectedDate={new Date(Date.now())}
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
