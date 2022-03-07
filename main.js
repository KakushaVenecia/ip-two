var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];


if (month > 12 || month < 1) {
  alert(" Please input a month")
}
if (day > 31 || month < 1) {
  alert("This month inout is invalid")
}
function generateAkan() {
  var year = document.getElementById("year").value;
  var month = document.getElementById("month").value;
  var day = document.getElementById("day").value;
  var gender = document.getElementById("gender").value;
  
  }