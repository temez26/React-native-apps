import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { useItemStoreContext } from '../../store/itemStoreContext'; // import useItemStoreContext
import { AddItem } from './AddItem';
import { ItemList } from './ItemList';
import { Favorites } from './Favorites';
import { History } from './History';
import { Notifications } from './Notifications';
import { Card } from 'react-native-paper';
import { styles } from '../../Styles';

const ListRoute = () => {
  return (
    <>
      <Card style={styles.card}>
        <AddItem />
      </Card>
      <ItemList /> 
    </>
  );
};
export const Navigation = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'list', title: 'List', focusedIcon: 'format-list-bulleted', unfocusedIcon: 'format-list-bulleted' },
        { key: 'favorites', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        { key: 'history', title: 'History', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        list: ListRoute,
        favorites: Favorites,
        history: History,
        notifications: Notifications,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};