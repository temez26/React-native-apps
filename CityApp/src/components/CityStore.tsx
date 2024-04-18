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

  const getCitiesFromStorage = useCallback(async () => {
    const storedCities = await AsyncStorage.getItem('cities');
    return storedCities ? JSON.parse(storedCities) : [];
  }, []);

  const setCitiesToStorage = useCallback((cities: City[]) => {
    AsyncStorage.setItem('cities', JSON.stringify(cities));
  }, []);

  const fetchCities = useCallback(async () => {
    setLoading(true);
    const storedCities = await getCitiesFromStorage();
    if (Array.isArray(storedCities)) {
      setCities(storedCities);
    }
    setLoading(false);
  }, [getCitiesFromStorage]);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  useEffect(() => {
    setCitiesToStorage(cities);
  }, [cities, setCitiesToStorage]);

  const updateCity = (updatedCity: City) => {
    setCities(currentCities =>
      currentCities.map(city => city.id === updatedCity.id ? updatedCity : city)
    );
  };

  return { cities, setCities, updateCity, loading, fetchCities };
};

export default useCityStore;