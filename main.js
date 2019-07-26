document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    document.getElementById("name").innerHTML = "my name is sia";
}

function mySchool() {
    document.getElementById("school").innerHTML = "Im going into the 8th grade at Harmony Endeavor";
}

function myCareer() {
    document.getElementById("career").innerHTML = "im not sure what i want to be when i grow up but i still have a while to think about it";
}

function myHobbies(i) {
    document.getElementById("hobbies").innerHTML = "hobbies:i like to draw and play sports but my favorite sport to play is soccer";
}