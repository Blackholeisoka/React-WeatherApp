import '../../style/nextDay.css';
import { useContext } from 'react';
import { WeatherContext } from '../../script/weatherContext';
import imageVerif from '../../script/weatherImg';
import Calender from '../../img/Calendar(1).png';

function NextDay() {
  const jours = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const index = new Date().getDay();
  const {data} = useContext(WeatherContext);

  const joursAFaire = [1, 2, 3].filter(i => i < data.weather.length);

  return (
    <div className='nextday'>
      <div className="nextday_title">
        <h2>Next Day</h2>
        <img src={Calender} alt="" />
      </div>
      {joursAFaire.map(i => (
        <div key={i} className="nextday_container">
          <div className="nextday_container-day">
            <strong>{jours[(index + i) % 7]}</strong>
          </div>
          <div className="nextday_container-img">
            <img style={{height : '60px'}} src={imageVerif(data.weather[i].hourly[5]?.weatherDesc?.[0]?.value ?? 'N/A')} alt="" />
          </div>
          <div className="nextday_container-degrees">
            <p>
              {data.weather[i]?.hourly[5]?.FeelsLikeC ?? 'N/A'}° {' '}
                <span style={{opacity : '0.7'}}>
                    {data.weather[i]?.hourly[7]?.FeelsLikeC ?? 'N/A'}°
                </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NextDay