import { 
  React, 
  FC, 
  useCallback, 
  FlatList, 
  View, 
  useCityStore, 
  City, 
  useNavigation, 
  useFocusEffect, 
  NavigationProp, 
  Button, 
  ActivityIndicator, 
  Card 
} from '../deps';

type RootStackParamList = {
  Info: undefined;
  AddCity: undefined;
  City: { city: City };
};

const renderButton = (iconName: string, screen: keyof RootStackParamList, buttonText: string, navigation: NavigationProp<RootStackParamList>) => (
  <Button icon={iconName} mode="contained" onPress={() => navigation.navigate(screen)}>
    {buttonText}
  </Button>
);

const CityCard: FC<{ item: City, navigation: NavigationProp<RootStackParamList> }> = React.memo(({ item, navigation }) => (
  <Card onPress={() => navigation.navigate('City', { city: item })}>
    <Card.Title title={item.name} subtitle={`Country: ${item.country}`} />
  </Card>
));

const HomeScreen: FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { cities, loading, fetchCities } = useCityStore();

  useFocusEffect(
    useCallback(() => {
      fetchCities();
    }, [fetchCities])
  );

  if (loading) {
    return <ActivityIndicator animating={true} color="#0000ff" />;
  }

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
        {renderButton("information", "Info", "Info", navigation)}
        {renderButton("plus-circle", "AddCity", "Add", navigation)}
      </View>
      <FlatList
        data={cities} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CityCard item={item} navigation={navigation} />}
      />
    </View>
  );
};

export default HomeScreen;