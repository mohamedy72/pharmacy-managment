// 1- Get Current Date
export function currentDate() {
  const currentDate = new Date().toLocaleDateString().split("/");
  const day = currentDate[0];
  const month = currentDate[1];
  const year = currentDate[2];
  return { day, month, year };
}

// 2- Get Current Time
export function currentTime() {
  //   let time = {};

  const currentTime = new Date().toLocaleTimeString();
  return currentTime;
}
