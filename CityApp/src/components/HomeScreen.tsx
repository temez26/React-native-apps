import React from 'react';
import { FlatList, View } from 'react-native';
import useCityStore, {City} from './CityStore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { Button, ActivityIndicator, Card } from 'react-native-paper';

type RootStackParamList = {
  Info: undefined;
  AddCity: undefined;
  City: { city: City };
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { cities, loading, fetchCities } = useCityStore();

  useFocusEffect(
    React.useCallback(() => {
      fetchCities();
    }, [fetchCities])
  );

  if (loading) {
    return <ActivityIndicator animating={true} color="#0000ff" />;
  }

  const renderButton = (iconName: string, screen: keyof RootStackParamList, buttonText: string) => (
    <Button icon={iconName} mode="contained" onPress={() => navigation.navigate(screen)}>
      {buttonText}
    </Button>
  );

  return (
    <View>
   <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
  {renderButton("information", "Info", "Info")}
  {renderButton("plus-circle", "AddCity", "Add")}
</View>
      <FlatList
        data={cities} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card onPress={() => navigation.navigate('City', { city: item })}>
            <Card.Title title={item.name} subtitle={`Country: ${item.country}`} />
          
          </Card>
        )}
      />
    </View>
  );
};

export default HomeScreen;