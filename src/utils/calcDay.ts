import getDay from './getDay';
type TcalcDay = (dateTime:string) => string
const calcDay:TcalcDay = (dateTime) =>{
  const month = dateTime.slice(5, 7);
  const date = dateTime.slice(8, 11);
  const day = getDay(dateTime.slice(0, 11));
  const extractedHour = +dateTime.slice(11, 13)
  
  let hour;
  if (extractedHour  > 12) {
    hour = `오후 ${extractedHour - 12}`;
  } else if (extractedHour == 12) {
    hour = `오후 ${extractedHour}`;
  } else {
    hour = `오전 ${extractedHour}`;
  }
  const miniute = dateTime.slice(14, 16);
  return `${month}.${date}${day} ${hour}:${miniute}`;
}
export default calcDay;
