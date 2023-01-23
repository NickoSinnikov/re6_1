export function getDate(timeZone) {
  const currentTime = new Date();
  let num = Number(timeZone);
  let hours = currentTime.getUTCHours() + num;
  let minutes = currentTime.getUTCMinutes();
  let seconds = currentTime.getUTCSeconds();
  hours = hours >= 24 ? hours - 24 : hours;

  return [hours, minutes, seconds];
}

export function rightTimeDisplay(time) {
  let rightNum = time < 10 ? `0${time}` : time;
  return rightNum;
}
