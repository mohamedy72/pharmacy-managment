// 1- Get Current Date
export function currentDate() {
  const currentDate = new Date().toLocaleDateString();
  const day = currentDate.substring(0, 1);
  const month = currentDate.substring(2, 3);
  const year = currentDate.substring(4, 8);
  return { day, month, year };
}

// 2- Get Current Time
export function currentTime() {
  //   let time = {};

  const currentTime = new Date().toLocaleTimeString();
  return currentTime;
}
