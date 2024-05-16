const convertTime = (time: string | Date, option: 1 | 2 | 3) => {
  const date = new Date(time);
  let res;
  // 3.13(토) 오후 2:00
  const options1: Intl.DateTimeFormatOptions = {
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  // 오후 3:23
  const options2: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  // 2024년 5월 9일
  const options3: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  };

  // // 5월 9일 목요일
  // const options4 = { weekday: 'long', month: 'long', day: 'numeric' };

  // // 2024-05-09
  // const options5 = { year: 'numeric', month: '2-digit', day: '2-digit' };

  switch (option) {
    case 1:
      res = date
        .toLocaleDateString('ko-KR', options1)
        .replaceAll('. ', '.')
        .replace('.(', ' (');
      break;
    case 2:
      res = date.toLocaleTimeString('ko-KR', options2);
      break;
    case 3:
      res = date.toLocaleDateString('ko-KR', options3);
      break;
  }
  return res;
};

export default convertTime;
