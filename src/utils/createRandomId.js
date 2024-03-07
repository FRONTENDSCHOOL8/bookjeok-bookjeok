function createRandomId() {
  // return crypto.randomUUID().replaceAll('-', '').slice(0, 15);
  const randomChar =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const resultArray = [];
  for (let i = 0; i < 15; i++) {
    resultArray.push(randomChar[~~(Math.random() * randomChar.length)]);
  }
  return resultArray.join('');
}

export default createRandomId;
