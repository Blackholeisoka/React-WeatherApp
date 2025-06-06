import Sunset from '../../img/2.png';
import Sunrise from '../../img/6.png';
import '../../style/SunTime.css';
import { WeatherContext } from '../../script/weatherContext';
import { useContext } from 'react';

function SunTime() {

  const {data} = useContext(WeatherContext);

  let sunrise = data.weather[0].astronomy[0].sunrise;
  let sunset = data.weather[0].astronomy[0].sunset;

  let sunrise_data = sunrise.toLowerCase().slice(1);
  let sunset_data = sunset.toLowerCase().slice(1);

  return (
    <div className='sunTime'>
      <div className="sunTime_title">
        <h2>Sun Time</h2><i style={{fontSize : '22.5px'}} className="fa-regular fa-star"></i>
      </div>
      <div className="sunTime_container">
        <div className="sunrise">
        <strong>Sunrise</strong>
        <img src={Sunrise} height={'60px'} alt="" />
        <p>{sunrise_data}</p>
      </div>
        <div className="separation"></div>
      <div className="sunset">
        <strong>Sunset</strong>
        <img src={Sunset} height={'60px'} alt="" />
        <p>{sunset_data}</p>
      </div>
      </div>
    </div>
  )
}

export default SunTime
