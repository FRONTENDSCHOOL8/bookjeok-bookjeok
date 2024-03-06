function getCreatedHoursAgo(createdTime) {
  const now = new Date();
  const create = new Date(createdTime);
  const timeDiff = now - create;
  const hoursAgo = Math.round(timeDiff / (1000 * 60 * 60));
  return hoursAgo;
}

export default getCreatedHoursAgo;
