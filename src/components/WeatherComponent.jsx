import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent';

const WeatherComponent = (props) => {
  const [today, setToday] = useState(null);
  const [seven, setSeven] = useState(null);

  useEffect(() => {
    const date = new Date();
    date.setTime(date.getTime() + (15*60*60*1000));

    const todayFields = [
      'temp',
      'feels_like',
      'precipitation',
      'humidity',
      'wind_speed',
      'visibility',
      'weather_code',
      'sunrise',
      'sunset',
      'wind_direction'
    ];

    const sevenDayFields = [
      'temp',
      'feels_like',
      'weather_code'
    ];

    const data = {
      lat: 43.6532,
      lon: 79.3832,
      unit_system: 'si',
      start_time: 'now',
      end_time: date.toISOString(),
      fields: todayFields,
      apikey: '41TLa8tmFLxgs1eTv8n9pN9f6rqABJ7i'
    }
    const todaySearchParams = new URLSearchParams(data);

    date.setDate(date.getDate() + 6);
    const sevenDaySearchParams = new URLSearchParams({...data, end_time: date.toISOString(), fields: sevenDayFields})


    // axios.get(`https://api.climacell.co/v3/weather/forecast/hourly?${todaySearchParams.toString()}`)
    // .then(response => {
    //   console.log(response.data);
    //   setToday(response.data);
    // })

    axios.get(`https://api.climacell.co/v3/weather/forecast/daily?${sevenDaySearchParams.toString()}`)
    .then(response => {
      console.log(response.data);
      setSeven(response.data);
    })
  }, []);

  return (
    <div className='weather'>
      {
        today ?
        <div className='today'>
          <h1 className='today__title'>Toronto Weather</h1>
          <p className='today__temp'>{`${Math.round(today[0].temp.value)}°C`}</p>
          <h3>15 hour forecast</h3>
        </div> : null
      }
      {/* <ChartComponent data={
        today ? today.reduce((accumulator, current) => {
          const time = new Date(current.observation_time.value);
          accumulator.push({
            name: time.toLocaleTimeString('en-us'),
            temp: Math.round(current.temp.value)
          });

          return accumulator;
        }, []) : null
      }/> */}
      <ChartComponent />
      <div className='seven'>

      </div>
    </div>
  )
}

export default WeatherComponent;