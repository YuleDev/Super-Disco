var description = document.querySelector("#description");
var timeAllot = document.querySelector("#hour");
var arrBtns = document.querySelectorAll(".saveBtn")
var arrTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

const d = new Date();
var currentTime = d.getHours();

const date = new Date();
document.getElementById("currentDay").textContent = date;

console.log(d.getHours());

for (let i = 0; i < arrTime.length; i++) {
    
    /* turn textarea gray */
    if (currentTime > arrTime[i]) {
        document.getElementById(arrTime[i]).classList.add("past");
        document.getElementById(arrTime[i]).classList.remove("present");
        document.getElementById(arrTime[i]).classList.remove("future");
    }
    /* turn textarea red */
    if (currentTime == arrTime[i]) {
        document.getElementById(arrTime[i]).classList.add("present");
        document.getElementById(arrTime[i]).classList.remove("past");
        document.getElementById(arrTime[i]).classList.remove("future");
    }
    /* turn textarea green */
    if (currentTime < arrTime[i]) {
        document.getElementById(arrTime[i]).classList.add("future");
        document.getElementById(arrTime[i]).classList.remove("past");
        document.getElementById(arrTime[i]).classList.remove("present");
    }
};

function saveToLocal() {
    var valueToAdd = this.previousElementSibling.value;
    var keyOfValue = this.previousElementSibling.previousElementSibling.innerHTML;

    localStorage.setItem(keyOfValue, valueToAdd)
};


/* Retrieving data from localstorage for refresh purposes */
let textareas = document.getElementsByClassName("col-8");

for(let i = 0; i < textareas.length; i++) {
    textareas[i].value = localStorage.getItem(textareas[i].previousElementSibling.innerHTML)
};

//setting up the buttons to perform a save on click
for(i=0; i< arrBtns.length; i++) {
    arrBtns[i].addEventListener("click", saveToLocal)
};