/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {courses} from '../../models/courses';
import {users} from '../../models/users';

const EXAMPLE_TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. ';

export default function CoursesDetail(props) {
  const item = props.route.params.item;
  const user = users.find(u => u.id === item.id);
  const [isLoved, setIsLoved] = useState(item.isLoved);
  const getNameOfHeartIcon = () => {
    return isLoved ?  'heart' : 'heart-outline';
  };
  return (
    <ScrollView>
      <Image style={{width: '100%', height: 300, backgroundColor:'blue'}} source={{uri:'https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e'}}></Image>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex:7}}>
            <Text style={styles.Name}>{item.title} - {item.author}</Text>
          </View>
          <Ionicons
            style={styles.Icon}
            onPress={
              () => {
                let pos = courses.findIndex(u => u.id === user.id);
                courses[pos].isLoved = !courses[pos].isLoved;
                setIsLoved(!isLoved);
              }
            } size={36} name={getNameOfHeartIcon(isLoved)} color="red"/>
        </View>
        <Text style={styles.TextTitle}>Overview</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Experience Level</Text>
        <Text style={styles.Description}>{item.levels}</Text>
        <Text style={styles.TextTitle}>Course Length</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>List Topics</Text>
        <Text style={styles.Description}>1. Foods You Love{'\n'}
                                        2. Your Job{'\n'}
                                        3. Playing and Watching Sports{'\n'}
                                        4. The Best Pet{'\n'}5.Having Fun in Your Free Time{'\n'}
                                        6. Your Daily Routine{'\n'}
                                        7. Childhood Memories{'\n'}
                                        8. Your Family Members{'\n'}
                                        9. Your Hometown{'\n'}
                                        10. Shopping Habits{'\n'}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Container: {
    alignSelf: 'center',
    backgroundColor: 'aliceblue',
  },
  Icon: {
    justifyContent: 'center',
    margin: 8,
  },
  Name: {
    fontWeight: 'bold',
    margin: 16,
    fontSize: 20,
  },
  Description: {
    marginLeft: 16,
  },
  TextTitle: {
    color: 'lightskyblue',
    margin: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
