var description = document.querySelector("#description");
var timeAllot = document.querySelector("#hour");
var arrBtns = document.querySelectorAll(".saveBtn")
var arrTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

const d = new Date();
var currentTime = d.getHours();

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
    console.log("I have been clicked: ", this)
    var valueToAdd = this.previousElementSibling.children[0].value;
    var keyOfValue = this.previousElementSibling.previousElementSibling.children[0].textContent;

    localStorage.setItem(keyOfValue, valueToAdd)
};

//setting up the buttons to perform a save on click
for(i=0; i< arrBtns.length; i++) {
    arrBtns[i].addEventListener("click", saveToLocal)
};

/* then need to create buttons that save the text content of that hour to the localstore
when the page is refreshed the local storage would then remember the changes made to that hour*/