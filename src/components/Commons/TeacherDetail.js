/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native';

export default function TeacherDetail() {
  const onPressBooking = () => {

  };
  return (
    <View>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.ImageAvatar}
            source={require('../../../assets/logo.png')}
          />
          <View>
            <Text style={styles.Name}>My Name</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.Language}>
                <Text style={{margin: 4}}>My language</Text>
              </View>
              <View style={styles.Language}>
                <Text style={{margin: 4}}>My language</Text>
              </View>
            </View>
          </View>
        </View>
        <View icon="camera" />
        <TouchableOpacity style={styles.Button} onPress={onPressBooking}>
            <Text style={{justifyContent: 'center', alignSelf: 'center', fontSize:18}}>Booking</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity>
                <Image style={styles.ImageButton}
                    source={require('../../../assets/message-icon.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.ImageButton}
                    source={require('../../../assets/message-icon.png')} />
            </TouchableOpacity>
        </View>
        <Text style={styles.Description}>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    margin: 8,
  },
  Button: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius:16,
    width:240,
    backgroundColor: 'lightskyblue',
  },
  ImageAvatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    margin: 8,
  },
  ImageButton: {
    height: 35,
    width: 35,
    borderRadius: 35,
    margin: 8,
  },
  Name: {
    fontWeight: 'bold',
    margin: 8,
    fontSize: 16,
  },
  Description: {
    margin: 8,
  },
  Language: {
    borderRadius: 36,
    backgroundColor: 'lightskyblue',
    elevation: 2,
    marginLeft: 5,
  },
});
