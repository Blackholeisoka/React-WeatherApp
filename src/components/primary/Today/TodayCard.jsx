import '../../../style/todayCard.css';

function TodayCard({tempC, hour, img}) {
  return (
    <div className='today_card'>
      <p>{tempC}°C</p>
      <img src={img} height={'60px'} alt="" />
      <p>{hour}</p>
    </div>
  )
}

export default TodayCard
