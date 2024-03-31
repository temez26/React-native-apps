import * as React from 'react';
import { useState } from 'react';
import { Card, Switch, Button, Paragraph } from 'react-native-paper';
// component to display the notifications settings
export const Notifications = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isOutdatedSwitchOn, setIsOutdatedSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleOutdatedSwitch = () => setIsOutdatedSwitchOn(!isOutdatedSwitchOn);

  return (
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
  );
};