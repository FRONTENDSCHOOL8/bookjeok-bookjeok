import getDay from './getDay';

function calcDay(dateTime) {
  const month = dateTime.slice(5, 7);
  const date = dateTime.slice(8, 11);
  const day = getDay(dateTime.slice(0, 11));
  let hour;
  if (dateTime.slice(11, 13) * 1 > 12) {
    hour = `오후 ${dateTime.slice(11, 13) * 1 - 12}`;
  } else if (dateTime.slice(11, 13) * 1 == 12) {
    hour = `오후 ${dateTime.slice(11, 13) * 1}`;
  } else {
    hour = `오전 ${dateTime.slice(11, 13)}`;
  }
  const miniute = dateTime.slice(14, 16);
  return `${month}.${date}${day} ${hour}:${miniute}`;
}
export default calcDay;
