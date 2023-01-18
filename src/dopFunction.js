export default function getDate() {
  const currentTime = new Date();
  let hours = currentTime.getUTCHours();
  let minutes = currentTime.getUTCMinutes();
  let seconds = currentTime.getUTCSeconds();

  return [hours, minutes, seconds];
}
