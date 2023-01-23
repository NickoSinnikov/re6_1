import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useState } from 'react';
import { getDate } from '../dopFunction';
import { rightTimeDisplay } from '../dopFunction';
export default function ClockBody(props) {
  const { timeZone } = props;
  const [hours, minutes, seconds] = getDate(timeZone);

  const [time, setTime] = useState({
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });

  useEffect(() => {
    const clock = setTimeout(() => {
      setTime({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);

    return () => {
      clearTimeout(clock);
    };
  });

  return (
    <div className="clock__body">
      <div className="time">
        {rightTimeDisplay(time.hours) +
          ':' +
          rightTimeDisplay(time.minutes) +
          ':' +
          rightTimeDisplay(time.seconds)}
      </div>
    </div>
  );
}
