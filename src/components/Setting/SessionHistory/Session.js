/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, View, Text, StyleSheet, Alert, Image} from 'react-native';
import { Button, Chip } from 'react-native-paper';

const EXAMPLE_TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. ';

export default function TeacherDetail(props) {
  const onPressMessage = () => {
    props.navigation.navigate('MessageDialog');
  };
  const onPressReport = () => {
    Alert.alert('Report', 'Do you want to report this session?',
    [
        {
            text: 'cancel',
        },
        {
             text:'ok',
             onPress: ()=>{
             },
        },
    ]);
};
  return (
    <ScrollView>
      <View style={{width: '100%', height: 250, backgroundColor:'blue'}}>
      </View>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.ImageAvatar}
            source={require('../../../../assets/logo.png')}
          />
          <View style={{flex:7}}>
            <Text style={styles.Name}>My Name</Text>
            <Text style={styles.Description}>Teacher</Text>
            <Text style={styles.Description}>Viet Nam</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Button labelStyle={{fontSize: 30}}
                    icon="android-messages"
                    onPress={onPressMessage}/>
            <Button labelStyle={{fontSize: 30}}
                    icon="alert-circle"
                    onPress={onPressReport}/>
        </View>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Language</Text>
        <View style={{flexDirection: 'row'}}>
          <Chip style={styles.Chip}>English</Chip>
          <Chip style={styles.Chip}>Vietnamese</Chip>
        </View>
        <Text style={styles.TextTitle}>Content</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Document</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    margin: 8,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
    padding: 10,
    width: 250,
    borderRadius: 28,
    marginTop: 10,
    alignSelf: 'center',
  },
  ImageAvatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
    margin: 8,
    flex:2,
  },
  Name: {
    fontWeight: 'bold',
    margin: 8,
    fontSize: 16,
  },
  Description: {
    marginLeft: 8,
  },
  TextTitle: {
    color: 'lightskyblue',
    margin: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Chip: {
    borderRadius: 36,
    backgroundColor:'deepskyblue',
    marginLeft: 5,
  },
});
