// yyyy-MM-dd 형식으로 날짜를 받아오면 해당 요일을 계산해주는 함수
function getDay(yyyyMMdd) {
  const dateStr = yyyyMMdd.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
  const dayOfWeek = new Date(dateStr).getDay();
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

export default getDay;
