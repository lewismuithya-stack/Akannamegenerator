function generateAkanName(){
    let day = parseInt(document.getElementById("day").value);
    let month = parseInt(document.getElementById("month").value);
    let year = parseInt(document.getElementById("year").value);
    let gender = document.querySelector('input[name="gender"]:checked');

    
    if(!gender || day < 1 || day > 31 || month < 1 || month > 12){
        alert("Please enter a valid date and select gender.");
        return;
    }

   
    let birthDate = new Date(year, month - 1, day);
    let dayOfWeek = birthDate.getDay();  

    
    let maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    let femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    let akanName = gender.value === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];

    
    document.getElementById("result").innerText = "Your Akan name is: " + akanName;
}
