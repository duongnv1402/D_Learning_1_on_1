/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {List, Switch } from 'react-native-paper';
import {View, Text} from 'react-native';
export default function AdvancedSetting() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    return (
    <List.Section title="Advanced Settings">
      <List.Accordion
        title="Language"
        left={props => <List.Icon {...props} icon="alphabetical" />}
        expanded={isExpanded}
        onPress={()=>{setIsExpanded(!isExpanded);}}>
        <List.Item title="Tiếng Việt" right={props => <List.Icon {...props} />}/>
        <List.Item title="English" right={props => <List.Icon {...props} icon="check" />}/>
      </List.Accordion>
      <View style={{flexDirection:'row', margin:18, justifyContent: 'space-between'}}>
        <Text >Dark mode</Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color="lightskyblue" />
      </View>
    </List.Section>
    );
}
