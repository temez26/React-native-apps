import * as React from 'react';
import { Appbar, Switch } from 'react-native-paper';
import { BackHandler, View } from 'react-native';
import { DarkModeContext } from '../../DarkModeContext';

export const Header = () => {
  const { isDarkMode, toggleDarkMode } = React.useContext(DarkModeContext);

  const _goBack = () => BackHandler.exitApp();

  return (
    <Appbar.Header mode='center-aligned'>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content titleStyle={{fontSize: 25}} title='Shopping List App' />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Appbar.Action icon="theme-light-dark" />
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
    </Appbar.Header>
  );
};