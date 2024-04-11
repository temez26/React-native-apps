import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface City {
  id: string;
  name: string;
  country: string;
  locations?: string[]; 
}

const useCityStore = () => {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    (async () => {
      const storedCities = await AsyncStorage.getItem('cities');
      if (storedCities) {
        setCities(JSON.parse(storedCities));
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('cities', JSON.stringify(cities));
    
  }, [cities]);

  return { cities, setCities };
};

export default useCityStore;