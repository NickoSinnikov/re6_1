import React from 'react';
import ClockBody from './ClockBody';
export default function Clocks(props) {
  const { title, timeZone } = props;
  return (
    <div className="clockItem">
      <h3 className="clock__title">{title}</h3>
      <ClockBody timeZone={timeZone} />
    </div>
  );
}
