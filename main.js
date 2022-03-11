const maleNames = [
  "Kwasi",
  "Kwadwo",
  "Kwabena",
  "Kwaku",
  "Yaw",
  "Kofi",
  "Kwame",
];
const femaleNames = [
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  " Yaa",
  "Afua",
  "Ama",
];
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function generateAkan() {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  var gender = document.getElementById("gender").value;
  console.log("Generate Akan");
  console.log(year, month, day, gender);
  clearName();
  const isValidInput = validateInput(month, day);
  console.log("isValid", isValidInput);
  if (isValidInput) {
    var d = getDayWeek(year, month, day);
    const name = getName(gender, d);
    console.log("name", name);
    displayName(name);
  }
}

// // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

//  where;

//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month

//  mod - is the modulus function ( % )

function getDayWeek(year, month, day) {
  var yearArray = year.split("");
  console.log("yearArray", yearArray);
  var CC = parseInt(`${yearArray[0]}${yearArray[1]}`);
  console.log("CC", CC);
  var YY = parseInt(`${yearArray[2]}${yearArray[3]}`);
  console.log("YY", YY);
  var MM = month;
  var DD = day;
  var d =
    (Math.round(CC / 4) -
      2 * CC -
      1 +
      Math.round((5 * YY) / 4) +
      26 * Math.round((MM + 1) / 10) +
      DD) %
    7;
  console.log("d", d);
  return d;
}

function getName(gender, d) {
  let name = "";
  if (gender === "male") {
    name = maleNames[d];
  } else if (gender === "female") {
    name = femaleNames[d];
  } else {
  }
  return name;
}
function displayName(name) {
  document.getElementById(
    "displayName"
  ).innerHTML = `Your Akan Name is ${name}`;
}
function validateInput(month, day) {
  let isValid = true;
  if (month > 12 || month < 1 || month === "") {
    alert(" Please input a month");
    isValid = false;
  }
  if (day > 31 || day < 1 || day === "") {
    alert("This day input is invalid");
    isValid = false;
  }
  return isValid;
}
function clearName() {
  document.getElementById("displayName").innerHTML = "";
}
