import { useContext, useRef, useEffect } from 'react';
import { WeatherContext } from '../../script/weatherContext';
import '../../style/autocomplete.css';

function Autocomplete({ cities, onClose }) {
  const ref = useRef(null);
  const { updateWeather } = useContext(WeatherContext); 

  useEffect(() => {
    const clickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        if (onClose) onClose();
      }
    };

    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, [onClose]);

  const toggle = (index) => {
    const cityAll = document.querySelectorAll('.city');
    cityAll[index].classList.toggle('active');
    [...cityAll].forEach((el, i) => {
      if (i !== index) el.classList.remove('active');
    });
  };

  const handleCityClick = (city, index) => {
    updateWeather(city); 
    toggle(index);
    let toogleTiming = setTimeout(() =>{
      if (onClose) onClose();
    }, 300);

    return () => clearTimeout(toogleTiming);
  };

  return (
    <div className="autocomplete" ref={ref}>
      {cities.map((c, index) => (
        <div
          key={index}
          onClick={() => handleCityClick(c.name, index)}
          className="city"
        >
          <p>{c.name}, {c.country}</p>
        </div>
      ))}
    </div>
  );
}

export default Autocomplete;