import * as React from 'react';
import { Appbar } from 'react-native-paper';

export const Header = () => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header mode = 'center-aligned' >
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Shopping List"  />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};