import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface City {
  id: string;
  name: string;
  country: string;
  locations?: string[]; 
}

const useCityStore = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCities = useCallback(async () => {
    setLoading(true);
    const storedCities = await AsyncStorage.getItem('cities');
    if (storedCities) {
      const parsedCities = JSON.parse(storedCities);
      if (Array.isArray(parsedCities)) {
        setCities(parsedCities);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  useEffect(() => {
    AsyncStorage.setItem('cities', JSON.stringify(cities));
  }, [cities]);

  const updateCity = (updatedCity: City) => {
    setCities(currentCities =>
      currentCities.map(city => city.id === updatedCity.id ? updatedCity : city)
    );
  };

  return { cities, setCities, updateCity, loading, fetchCities };
};

export default useCityStore;