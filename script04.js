function getWeather(month) {
  if (month >= 3 & month < 6) {
    console.log("It's spring!");
  }
  else if (month >= 6 & month < 9) {
    console.log("It's summer!");
  }
  else if (month >= 9 & month < 12) {
    console.log("It's fall!");
  }
  else if (month == 12 || month == 1 || month == 2) {
    console.log("It's winter!");
  }
  else {
    console.log("Invalid input. Try it again!");
  }
}

getWeather(1);  // "It's winter!"
getWeather(3);  // "It's spring!"
getWeather(7);  // "It's summer!"
getWeather(11); // "It's fall!"
getWeather(0);  // "Invalid input. Try it again!"
getWeather(13); // "Invalid input. Try it again!"
