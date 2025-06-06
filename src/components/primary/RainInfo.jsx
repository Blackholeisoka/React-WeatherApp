import Humidity from '../../img/Humidity.png';
import Degrees from '../../img/Degrees.png';
import Wind from '../../img/Wind.png';
import '../../style/rain.css';
import {WeatherContext} from '../../script/weatherContext';
import { useContext } from 'react';

function RainInfo() {

const {data} = useContext(WeatherContext);

  return (
    <div className='rain_info'>
        <div className="rain_info-container">
            <img src={Humidity} alt="" />
            <p>{data.current_condition[0].precipMM}mm</p>
        </div>
        <div className="rain_info-container">
            <img src={Degrees} alt="" />
            <p>{data.current_condition[0].humidity}%</p>
        </div>
        <div className="rain_info-container">
            <img src={Wind} alt="" />
            <p>{data.current_condition[0].windspeedKmph} km/h</p>
        </div>
    </div>
  )
}

export default RainInfo
