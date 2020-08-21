import React, { useState, useEffect } from 'react';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const SevenDayListItemComponent = (props) => {
  const [day, setDay] = useState(null);
  const [lowHigh, setLowHigh] = useState(null);

  useEffect(() => {
    if (props) {
      const date = new Date(props.temp[1].observation_time);
      setDay(days[date.getDay()]);
      setLowHigh([Math.round(props.temp[0].min.value), Math.round(props.temp[1].max.value)])
    }
  }, [props])

  return (
    <div className='seven__item'>
      <h2>{day || ''}</h2>
      <img
        className='seven__img'
        src={require(`../assets/${props.weather_code.value}.svg`)}
        alt='An icon depicting the weather'
      />
      <p className='seven__temp'>{lowHigh ? `${lowHigh[0]}°C/${lowHigh[1]}°C` : ''}</p>
    </div>
  )
}

export default SevenDayListItemComponent;