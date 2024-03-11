function getCreatedHoursAgo(createdTime) {
  const now = new Date();
  const create = new Date(createdTime);
  const timeDiff = now - create;

  if (timeDiff / 1000 < 60) {
    return '방금 전';
  } else if (timeDiff / 1000 / 60 >= 1 && timeDiff / 1000 / 60 < 60) {
    return `${Math.round(timeDiff / 1000 / 60)}분 전`;
  } else if (timeDiff / 1000 / 60 / 60 >= 1 && timeDiff / 1000 / 60 / 60 < 24) {
    return `${Math.round(timeDiff / 1000 / 60 / 60)}시간 전`;
  } else if (timeDiff / 1000 / 60 / 60 / 24 >= 1) {
    return `${Math.round(timeDiff / 1000 / 60 / 60 / 24)}일 전`;
  }
  // const hoursAgo = Math.round(timeDiff / (1000 * 60 * 60));
  // return hoursAgo;
}

export default getCreatedHoursAgo;
