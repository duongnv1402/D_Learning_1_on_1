/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

export default function Room() {
  const [totalDuration, setTotalDuration] = useState(() => {
    let date = moment().utcOffset('+07:30').format('YYYY-MM-DD hh:mm:ss');
    let expirydate = '2021-12-23 08:00:45';
    let diff = moment.duration(moment(expirydate).diff(moment(date)));
    var hours = parseInt(diff.asHours(), 10);
    var minutes = parseInt(diff.minutes(), 10);
    var seconds = parseInt(diff.seconds(), 10);
    return hours * 60 * 60 + minutes * 60 + seconds;
  });
  return (
    <View style={styles.Container}>
      <Text>Next lesson:</Text>
      <CountDown
        until={totalDuration}
        //duration of countdown in seconds
        timetoShow={('H', 'M', 'S')}
        //formate to show
        onFinish={() => alert('finished')}
        //on Finish call
        onPress={() => alert('hello')}
        //on Press call
        size={20}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    width:'100%',
    height:'100%',
    backgroundColor: 'aliceblue',
},
});
