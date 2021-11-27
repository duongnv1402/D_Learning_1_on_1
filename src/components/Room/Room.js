/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, LogBox} from 'react-native';
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
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      var interval = setInterval(() => {
        setTotalDuration(lastTimerCount => {
            lastTimerCount <= 1 && clearInterval(interval);
            return lastTimerCount - 1;
        });
      }, 1000);
    }
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);
  LogBox.ignoreLogs(['EventEmitter.removeListener']);

  return (
    <View style={styles.Container}>
      <Text style={styles.Text}>Next lesson:</Text>
      <CountDown
        until={totalDuration}
        timetoShow={('H', 'M', 'S')}
        onFinish={null}
        onPress={null}
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
    justifyContent: 'center',
  },
  Text: {
    alignSelf: 'center',
     fontSize: 18,
  },
});
