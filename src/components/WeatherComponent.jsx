import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChartComponent from './ChartComponent';
import Giphy from './Giphy';
import '../styles/WeatherComponent.scss';
import SevenDayListComponent from './SevenDayListComponent';

const WeatherComponent = (props) => {
  const [today, setToday] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [currentConditions, setCurrentConditions] = useState(null);
  const [precipitation, setPrecipitation] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [windDirection, setWindDirection] = useState(null);
  const [seven, setSeven] = useState([]);

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
      'wind_direction'
    ];

    const sevenDayFields = [
      'temp',
      'feels_like',
      'weather_code'
    ];

    const data = {
      lat: 43.6532,
      lon: -79.3832,
      unit_system: 'si',
      start_time: 'now',
      end_time: date.toISOString(),
      fields: todayFields,
      apikey: '41TLa8tmFLxgs1eTv8n9pN9f6rqABJ7i'
    }
    const todaySearchParams = new URLSearchParams(data);

    date.setDate(date.getDate() + 6);
    const sevenDaySearchParams = new URLSearchParams({...data, end_time: date.toISOString(), fields: sevenDayFields})

    axios.get(`https://api.climacell.co/v3/weather/forecast/hourly?${todaySearchParams.toString()}`)
    .then(response => {
      setToday(response.data);
    })

    axios.get(`https://api.climacell.co/v3/weather/forecast/daily?${sevenDaySearchParams.toString()}`)
    .then(response => {
      setSeven(response.data);
    })
  }, []);

  useEffect(() => {
    if (today) {
      setCurrentConditions(today[0].weather_code.value.toUpperCase().split('_').join(' '));
      setVisibility(today[0].visibility.value);
      setPrecipitation(today[0].precipitation.value);
      setHumidity(today[0].humidity.value);
      setWind(Math.round(today[0].wind_speed.value * 3.6))

      const degreePerDirection = 360 / 8;
      const offsetAngle = today[0].wind_direction.value + degreePerDirection / 2;

      const direction = (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "N"
        : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "NE"
          : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "E"
            : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "SE"
              : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "S"
                : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "SW"
                  : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "W"
                    : "NW";
      setWindDirection(direction);
    }
  }, [today])

  return (
    <div className='weather'>
      <div className="weather-top">
        <div className="weather-top__left">
          {
            today ?
            <div className='today'>
                <h1 className='today__title'>Toronto Weather</h1>
              <div className='today__text'>
                <p className='today__temp'>{`${Math.round(today[0].temp.value)}°C`}</p>
                <p className='today__current'>{`${currentConditions || ''}`}</p>
                <p className='today__precip'>{`Precipitation: ${precipitation}mm`}</p>
                <p className='today__visibility'>{`Visibility: ${visibility || ''} km`}</p>
                <p className='today__humidity'>{`Humidity: ${humidity || ''} km`}</p>
                <p className='today__wind'>{`Wind: ${wind || ''} km/h ${windDirection}`}</p>
              </div>
              <img
                className='today__icon'
                src={require(`../assets/${
                  today[0].weather_code.value
                }.svg`)} 
                alt='An icon depicting the current conditions'
              />
            </div> : null
          }

          <div className="chart">
            <h3 className="chart__title">15 hour forecast</h3>
            <ChartComponent data={
              today ? today.reduce((accumulator, current) => {
                const time = new Date(current.observation_time.value);
                const hours = time.getHours();

                accumulator.push({
                  time: `${hours % 12 || 12}${(hours < 12 || hours === 24) ? 'AM' : 'PM'}`,
                  temp: Math.round(current.temp.value)
                });

                return accumulator;
              }, []) : null
            }/>
          </div>
        </div>
        <Giphy keyword={today ? today[0].weather_code.value:null} />
      </div>
      <SevenDayListComponent days={seven ? seven.slice(0, 7) : []}/>
    </div>
  )
}

export default WeatherComponent;