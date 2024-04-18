import { Button, Card, Title, Subheading, List,RouteProp ,useCityStore, City,useNavigation,FlatList,useState, useEffect} from '../deps';

interface CityScreenProps {
  route: RouteProp<{ params: { city: City } }>;
}

const CityScreen: React.FC<CityScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { cities } = useCityStore();
  const cityParam = route.params.city;
  const [city, setCity] = useState<City | null>(cityParam);

  useEffect(() => {
    const updatedCity = cities.find(c => c.id === cityParam.id) || cityParam;
    setCity(updatedCity);
  }, [cities]);

  const updateCity = (updatedCity: City) => {
    setCity(updatedCity);
  };

  if (!city) {
    return null;
  }

  return (
    <Card>
      <Card.Content>
        <Title>Country: {city.country}</Title>
        <Button mode="contained" onPress={() => navigation.navigate('AddLocation', { city, updateCity })}>
          Add Location
        </Button>
        <Subheading>Locations:</Subheading>
        <FlatList
          data={city.locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <List.Item
              title={item}
              right={() => <List.Icon icon="chevron-right" />}
            />
          )}
        />
      </Card.Content>
    </Card>
  );
};

export default CityScreen;