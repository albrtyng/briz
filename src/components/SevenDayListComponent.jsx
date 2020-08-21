import React from 'react';
import SevenDayListItemComponent from './SevenDayListItemComponent';
import '../styles/SevenDay.scss';

const SevenDayListComponent = (props) => {
  return (
    <div className='seven'>
      {
        props && props.days ?
        props.days.map(day => <SevenDayListItemComponent key={day.observation_time.value} {...day}/>) : null
      }
    </div>

  )
}

export default SevenDayListComponent;