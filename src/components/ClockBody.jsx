import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import getDate from '../dopFunction';
export default function ClockBody(props) {
  const { timeZone } = props;
  const [hours, minutes, seconds] = getDate();

  const [time, setTime] = useState({
    hours: hours - timeZone,
    minutes: minutes,
    seconds: seconds,
  });

  console.log(getDate());

  useEffect(() => {
    const clock = setTimeout(() => {
      setTime({
        hours: hours - timeZone,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
    console.log(typeof timeZone);

    return () => {
      clearTimeout(clock);
    };
  });

  return (
    <div className="clock__body">
      <div className="time">
        {time.hours + ':' + time.minutes + ':' + time.seconds}
      </div>
    </div>
  );
}
