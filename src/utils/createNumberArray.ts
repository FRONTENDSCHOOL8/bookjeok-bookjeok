type TcreateNumberArray = (start:number,end:number) => number[]
// 제한인원에 맞는 배열을 만들어주는 함수
const createNumberArray:TcreateNumberArray = (start, end) => {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}
export default createNumberArray;
