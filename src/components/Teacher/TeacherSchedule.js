/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */

import React, {useState, useContext, useEffect} from 'react';
import { ScrollView, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { AuthContext } from '../../globals/context';
import WeekView from 'react-native-week-view';


export default function TeacherSchedule({route}) {
    const today = new Date().getTime();
    const tutorId = route.params.tutorId;
    var events = [];
    // const events2 = [
    //     {
    //         id: '1',
    //         description: 'Booked',
    //         startDate: new Date(1641290400000),
    //         endDate: new Date(1641291900000),
    //         color: 'lightskyblue',
    //     },
    //     {
    //         id: '2',
    //         description: 'Booked',
    //         startDate: new Date(2022, 0, 18, 14, 0),
    //         endDate: new Date(2022, 0, 18, 16, 0),
    //         color: 'lightskyblue',
    //     },
    // ];

    const [isLoading, setIsLoading] = useState(true);
    const {getToken} = useContext(AuthContext);
    const token = getToken();
    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://sandbox.api.lettutor.com/schedule', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    tutorId: tutorId,
                }),
            });
            const json = await response.json();
            if (response.status === 200) {
                events = json.data.map((item) => ({
                    id: item.id,
                    description: item.isBooked ? 'Booked' : 'Book',
                    color: item.isBooked ? 'deepskyblue' : 'lightskyblue',
                    startDate: new Date(item.startTimestamp),
                    endDate: new Date(item.endTimestamp),
                }));
            }
            events = events.filter((event) => {return (event.startDate > today && event.startDate < today + 3600000);});
        } catch (error) {
                console.error(error);
        } finally {
                setIsLoading(false);
        }
    };
    useEffect(() => {
        getData();
    },[token]);

    return (
        <ScrollView>
            {isLoading === true ?
                (<ActivityIndicator size="large" />
                ) : (
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.Text}>Schedule: </Text>
                        </View>
                        <WeekView
                            events={events}
                            selectedDate={new Date(Date.now())}
                            numberOfDays={7}
                            hoursInDisplay={10} />
                    </View>
                )
            }
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
