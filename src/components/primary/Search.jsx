import Map from '../../img/Map.png';
import Chevron from '../../img/Chevron.png';
import Notification from '../../img/Notification.png';
import '../../style/search.sass';
import { WeatherContext } from '../../script/weatherContext';
import { useContext, useState } from 'react';
import Autocomplete from './Autocomplete';

function Search({onSearch}) {
  const {data} = useContext(WeatherContext);
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState('');

  const SearchCity = async (s) => {
    setValue(s);
    if (!s || s.length < 2){
      setCities([]);
      return;
    };

    const url = 'https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json';
    const response = await fetch(url);
    const cityList = await response.json();

    const filtered = cityList
      .filter((c) => c.name.toLowerCase().startsWith(s.toLowerCase()))
      .slice(0, 8);

    setCities(filtered);
    onSearch(s, filtered);
  };

  return (
    <div>
      <div className="header_top">
        <div className="header_top-city">
          <img src={Map} alt="" />
          <strong>{data.nearest_area[0].region[0].value ?? 'Aquitaine'}</strong>
          <img src={Chevron} alt="" />
        </div>
        <div className="header_top-notification">
          <img src={Notification} alt="" />
        </div>
      </div>

      <input
        type="text"
        onInput={(e) => SearchCity(e.target.value)}
        autoComplete="off"
        name="search_input"
        value={value}
        placeholder="Your city here..."
        id="search_input"
        style={{borderRadius : value.length >= 2 && cities.length > 0 ? '10px 10px 0px 0px' : '10px'}}
      />
      {cities && cities.length > 0 && <Autocomplete onClose={() => {setValue(''); setCities([])}} cities={cities}  />}
    </div>
  );
}

export default Search;