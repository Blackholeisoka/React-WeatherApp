// WeatherProvider.js
import { useEffect, useState } from 'react';
import { WeatherContext } from './weatherContext';
import fetchApi from './data_api';

const WeatherProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const updateWeather = async (city) => {
    const result = await fetchApi(city);
    setData(result);
  };

  useEffect(() => {
    updateWeather(); 
  }, []);

  return (
    <WeatherContext.Provider value={{ data, updateWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;