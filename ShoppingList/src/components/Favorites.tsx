import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Card, IconButton, Title, Caption, Divider } from 'react-native-paper';
import { useItemStoreContext, Item } from '../../store/itemStoreContext';

// Function to randomise the color of favorite items
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Favorites component to display the favorite items
export const Favorites = () => {
    const { items, setFavorite } = useItemStoreContext();
    const favorites = items.filter(item => item.favorite);
    const renderItem = ({ item }: { item: Item }) => (
        <View style={{ flex: 1, margin: 5 }}>
            <Card style={{ elevation: 3, backgroundColor: getRandomColor(), opacity: 0.8 }}>
                <Card.Content>
                    <View style={{ backgroundColor: 'white', borderRadius: 5 }}>
                        <Card.Title 
                            title={item.name} 
                            titleStyle={{ fontSize: 25, fontWeight: 'bold', color: 'black', alignSelf: 'center' }} 
                        />
                    </View>
                </Card.Content>
                <Card.Actions>
                    <IconButton
                        icon="heart"
                        iconColor='red'
                        size={30}
                        onPress={() => setFavorite(item.id, false)}
                    />
                </Card.Actions>
            </Card>
        </View>
    );

    return (
       
        <View style={{margin:10}}>
        <Title style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>Favorites</Title>
        <Divider />
        {favorites.length > 0 ? (
            <FlatList
                data={favorites}
                renderItem={renderItem}
                numColumns={2}
                keyExtractor={(item) => item.id}
            />
        ) : (
            <Caption style={{fontSize: 20, alignSelf: 'center', marginTop: 270}}>Looks so empty...</Caption>
        )}
    </View>
    );
};