function createRandomId() {
  return crypto.randomUUID().replaceAll('-', '').slice(0, 15);
}

export default createRandomId;
