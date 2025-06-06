import { useContext, useEffect } from 'react';
import '../../style/maindegrees.css';
import { WeatherContext } from '../../script/weatherContext';
import imageVerif from '../../script/weatherImg';
import weatherBackground from '../../script/weatherBackground';

function MainDegrees() {

  const {data} = useContext(WeatherContext);
  const s = data.current_condition[0].weatherDesc[0].value;

  useEffect(() =>{
    document.body.style.background = weatherBackground(s);    

    return () => document.body.style.background = '';
  }, [s]);

  return (
    <div className='main_container'>
        <img src={imageVerif(s)} style={{maxWidth : '100%', marginTop : '20px'}} alt="" />
        <h1>{data.current_condition[0].temp_C}º</h1>
        <p style={{marginBottom : '10px'}}>{s}</p>
        <div className="min_max-degrees">
            <p><strong>Max.: </strong>{data.current_condition[0].FeelsLikeC}º</p>
            <p><strong>Min.: </strong>{data.weather[0].mintempC}º</p>
             <div>
          </div>
        </div>
    </div>
  )
}

export default MainDegrees
