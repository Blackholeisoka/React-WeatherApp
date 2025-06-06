import TodayCard from "./TodayCard";
import '../../../style/today.css';
import { useContext } from "react";
import { WeatherContext } from "../../../script/weatherContext";
import weatherVerif from '../../../script/weatherImg';

function Today() {

const {data} = useContext(WeatherContext);
const count = 4;

const hourlyData = data.weather[0].hourly;
const availableHours = hourlyData.map(h => parseInt(h.time) / 100);
let currentHour = new Date().getHours();
const nextHours = availableHours.filter(h => h > currentHour);
let hoursToShow = nextHours;

    if (nextHours.length < count) {
    hoursToShow = nextHours.concat(availableHours.slice(0, count - nextHours.length));
    } else {
    hoursToShow = nextHours.slice(0, count);
    }

  return (
    <div className="today">
        <div className="today_title">
          <h2>Today</h2>
          <p>{data.weather[0].date}</p>
        </div>
        <div className="today_container">
           {hoursToShow.map((hour, i) => {
          const hourStr = (hour * 100).toString();
          const slot = hourlyData.find(h => h.time === hourStr);
          const tempC = slot ? slot.tempC : "Non disponible";

          const hourDisplay = hour.toString().padStart(2, '0') + ":00";
          const img = weatherVerif(slot.weatherDesc?.[0]?.value);

          return <TodayCard key={i} img={img} tempC={tempC} hour={hourDisplay} />;
        })}
        </div>
    </div>
  )
}

export default Today