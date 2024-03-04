// yyyy-MM-dd 형식으로 날짜를 받아오면 해당 요일을 계산해주는 함수
export function getDay(yyyyMMdd) {
  const dayOfWeek = new Date(yyyyMMdd).getDay();
  switch (dayOfWeek) {
    case 0:
      return '(일)';

    case 1:
      return '(월)';

    case 2:
      return '(화)';

    case 3:
      return '(수)';

    case 4:
      return '(목)';

    case 5:
      return '(금)';

    case 6:
      return '(토)';
  }
  return dayOfWeek;
}

// 주어진 양식에 맞게 DB 날짜 data를 가공하는 함수
export function calcDay(dateTime) {
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
