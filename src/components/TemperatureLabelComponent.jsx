import React from 'react'

const TemperatureLabelComponent = (props) => {
  const {
    x, y, value
  } = props;

  return <text x={x} y={y} dy={-15} fontSize={12} textAnchor="middle">{value}</text>;
}

export default TemperatureLabelComponent;