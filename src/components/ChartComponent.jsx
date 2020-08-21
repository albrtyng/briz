import React from 'react';
import {
  AreaChart, Area, XAxis
} from 'recharts';
import TemperatureLabelComponent from './TemperatureLabelComponent';

const ChartComponent = (props) => {
  return (
    <AreaChart
      width={500}
      height={250}
      data={props.data}
    >
      <defs>
        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#32a8a8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#32a8a8" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="time" />
      <Area type="monotone" dataKey="temp" stroke="#3292a8" fillOpacity={1} fill="url(#colorTemp)"
        isAnimationActive={false}
        label={(props) => {
          if (props.index % 2 === 1) {
            return <TemperatureLabelComponent {...props}/>
          } else { return null }
        }} 
      />
    </AreaChart>
  );
}

export default ChartComponent;