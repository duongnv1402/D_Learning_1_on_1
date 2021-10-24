/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EXAMPLE_TEXT = 'The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. The quick brown fox jumped over the lazy dog. ';

export default function CoursesDetail(props) {
  const [isLoved, setIsLoved] = useState(props.isLoved);
  const getNameOfHeartIcon = () => {
    return isLoved ?  'heart' : 'heart-outline';
  };
  return (
    <ScrollView>
      <View style={{width: '100%', height: 250, backgroundColor:'blue'}}></View>
      <View style={styles.Container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex:7}}>
            <Text style={styles.Name}>Basic Conversation Topics (New)</Text>
          </View>
          <Ionicons onPress={() => {setIsLoved(!isLoved);}} size={36} name={getNameOfHeartIcon(isLoved)} color="red"/>
        </View>
        <Text style={styles.TextTitle}>Overview</Text>
        <Text style={styles.Description}>{EXAMPLE_TEXT}</Text>
        <Text style={styles.TextTitle}>Experience Level</Text>
        <Text style={styles.Description}>Beginner</Text>
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
    margin: 8,
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
});
