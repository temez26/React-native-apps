import * as React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { Card, Switch, Button, Paragraph,Title,Divider } from 'react-native-paper';
// component to display the notifications settings
export const Notifications = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isOutdatedSwitchOn, setIsOutdatedSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleOutdatedSwitch = () => setIsOutdatedSwitchOn(!isOutdatedSwitchOn);

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
        <Button onPress={() => {}}>Save</Button>
      </Card.Actions>
    </Card>
    </View>
  );
};