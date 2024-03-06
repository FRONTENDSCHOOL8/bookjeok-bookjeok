// 제한인원에 맞는 배열을 만들어주는 함수
function createNumberArray(start, end) {
  const numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}
export default createNumberArray;
