document.getElementById("akanForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const dateInput = document.getElementById("date").value;
  const gender = document.getElementById("gender").value;

  if (!dateInput || !gender) {
    alert("Please enter a valid date and select gender.");
    return;
  }

  const birthDate = new Date(dateInput);
  const dayOfWeek = birthDate.getDay();

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let akanName;
  if (gender === "male") {
    akanName = maleNames[dayOfWeek];
  } else {
    akanName = femaleNames[dayOfWeek];
  }

  const dayName = days[dayOfWeek];
  document.getElementById("result").innerText = 
    `You were born on a ${dayName}. Your Akan name is: ${akanName}`;
});
