import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const ChartComponent = (props) => {
  const [data, setData] = useState(null);

  const backup_data = [
    {
      "time": "Page A",
      "temp": 4000
    },
    {
      "time": "Page B",
      "temp": 3000
    },
    {
      "time": "Page C",
      "temp": 2000
    },
    {
      "time": "Page D",
      "temp": 2780
    },
    {
      "time": "Page E",
      "temp": 1890
    },
    {
      "time": "Page F",
      "temp": 2390
    },
    {
      "time": "Page G",
      "temp": 3490
    }
  ]

  useEffect(() => {
    const date = new Date();
    date.setTime(date.getTime() + 15*60*60*1000);
  
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
  
    const params = {
      lat: 43.6532,
      lon: 79.3832,
      unit_system: 'si',
      start_time: 'now',
      end_time: date.toISOString(),
      fields: todayFields,
      apikey: '41TLa8tmFLxgs1eTv8n9pN9f6rqABJ7i'
    }
    const todaySearchParams = new URLSearchParams(params);

    // axios.get(`https://api.climacell.co/v3/weather/forecast/hourly?${todaySearchParams.toString()}`)
    // .then(response => {
    //   console.log(response.data);
    //   setData(response.data.reduce((accumulator, current) => {
    //     const time = new Date(current.observation_time.value);
    //     accumulator.push({
    //       name: time.toLocaleTimeString('en-us'),
    //       temp: Math.round(current.temp.value)
    //     });

    //     return accumulator;
    //   }, []));
    // })

    const date2 = new Date();
    console.log(date2);
    const hours = date2.getHours();
    console.log(hours);
    var h = hours % 12 || 12;
    var ampm = (hours < 12 || hours === 24) ? "AM" : "PM";
    let timeString = h + ampm;

    console.log(timeString)
  }, [])

  return (
    <AreaChart
      width={500}
      height={250}
      data={backup_data}
    >
      <defs>
        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#32a8a8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#32a8a8" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="time" />
      <Tooltip />
      <Area type="monotone" dataKey="temp" stroke="#3292a8" fillOpacity={1} fill="url(#colorTemp)" />
    </AreaChart>
  );
}

export default ChartComponent;