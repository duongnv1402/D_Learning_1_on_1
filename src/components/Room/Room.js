/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, LogBox, ActivityIndicator} from 'react-native';
import CountDown from 'react-native-countdown-component';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';
import moment from 'moment';

export default function Room({route}) {
    const [totalDuration, setTotalDuration] = useState(() => {
        let date = moment().utcOffset('+07:30').format('YYYY-MM-DD hh:mm:ss');
        let expirydate = route.params.startDate;
        let diff = moment.duration(moment(expirydate).diff(moment(date)));
        var hours = parseInt(diff.asHours(), 10);
        var minutes = parseInt(diff.minutes(), 10);
        var seconds = parseInt(diff.seconds(), 10);
        return hours * 60 * 60 + minutes * 60 + seconds;
    });

    useEffect(() => {
        setTimeout(() => {
        const url = 'https://meet.jit.si/duongnv14022000hd';
        const userInfo = {
            displayName: 'User',
            email: 'user@example.com',
            avatar: 'https:/gravatar.com/avatar/abc123',
        };
        JitsiMeet.call(url, userInfo);
        /* Você também pode usar o JitsiMeet.audioCall (url) para chamadas apenas de áudio */
        /* Você pode terminar programaticamente a chamada com JitsiMeet.endCall () */
        }, 1000);
    }, []);

    useEffect(() => {
        return () => {
        JitsiMeet.endCall();
        };
    });

    function onConferenceTerminated(nativeEvent) {
        /* Conference terminated event */
        console.log(nativeEvent);
    }

    function onConferenceJoined(nativeEvent) {
        /* Conference joined event */
        console.log(nativeEvent);
    }

    function onConferenceWillJoin(nativeEvent) {
        /* Conference will join event */
        console.log(nativeEvent);
    }
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
        var interval = setInterval(() => {
            setTotalDuration(totalDuration);
        }, 1000);
        }
        return () => {
        isMounted = false;
        clearInterval(interval);
        };
    }, [totalDuration]);
    LogBox.ignoreLogs(['EventEmitter.removeListener']);

    return (
        <View style={styles.Container}>
        {totalDuration <= 0 ? (
            <JitsiMeetView
            onConferenceTerminated={e => onConferenceTerminated(e)}
            onConferenceJoined={e => onConferenceJoined(e)}
            onConferenceWillJoin={e => onConferenceWillJoin(e)}
            style={{
                flex: 1,
                height: '100%',
                width: '100%',
            }}
            />
        ) : (
            <><Text style={styles.Text}>Next lesson:</Text><CountDown
                until={totalDuration}
                timetoShow={('H', 'M', 'S')}
                onFinish={null}
                onPress={null}
                size={20} /><ActivityIndicator /></>)}
        </View>
    );
    }
    const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        justifyContent: 'center',
    },
    Text: {
        alignSelf: 'center',
        fontSize: 18,
    },
    });
