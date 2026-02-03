function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function isValidDate(year, month, day) {
  const daysInMonth = [31, (isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
}

document.getElementById("akanForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  if (!birthdate || !gender) {
    alert("Please enter a valid birthdate and select gender.");
    return;
  }

  const [year, month, day] = birthdate.split("-").map(Number);

  if (!isValidDate(year, month, day)) {
    alert("Invalid date entered. Please check again.");
    return;
  }

  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  const akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

  document.getElementById("result").innerHTML =
    `<h2>Your Akan name is: ${akanName}</h2>`;
});
