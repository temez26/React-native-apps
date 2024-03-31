import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Card, Switch, Button, Paragraph, Title, Divider } from 'react-native-paper';
import * as Notifications1 from 'expo-notifications';

// component to display the notifications settings
export const Notifications = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isOutdatedSwitchOn, setIsOutdatedSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleOutdatedSwitch = () => setIsOutdatedSwitchOn(!isOutdatedSwitchOn);

  const saveSettings = async () => {
    // save your settings here

    // send a notification
    if (isSwitchOn) {
      await Notifications1.scheduleNotificationAsync({
        content: {
          title: "Settings Saved!",
          body: 'Your notification settings have been saved.',
        },
        trigger: null,
      });
    }
  };

  return (
    <View style={{margin:10}}>
      <Title style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center',marginBottom: 5}}>Notifications</Title>
        <Divider />
      <Card>
        <Card.Title title="Notifications Settings" />
        <Card.Content>
          <Paragraph>Allow Notifications</Paragraph>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Paragraph>Allow Notifications for Outdated Items</Paragraph>
          <Switch value={isOutdatedSwitchOn} onValueChange={onToggleOutdatedSwitch} />
        </Card.Content>
        <Card.Actions>
          <Button onPress={saveSettings}>Save</Button>
        </Card.Actions>
      </Card>
    </View>
  );
};