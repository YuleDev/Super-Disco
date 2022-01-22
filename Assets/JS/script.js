var description = document.querySelector("#description");
var timeAllot = document.querySelector("#hour");

var arrBtns = document.querySelectorAll(".saveBtn")

var arrTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

const d = new Date();
var currentTime = d.getHours();

console.log(d.getHours());


for (let i = 0; i < arrTime.length; i++) {
    // const element = array[index];
    
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

/* setAttribute("class", "textarea present"); */
/* setAttribute("class", "textarea future") */

function saveToLocal() {
    console.log("I have been clicked: ", this)
    var valueToAdd = this.previousElementSibling.children[0].value;
    var keyOfValue = this.previousElementSibling.previousElementSibling.children[0].textContent;

    localStorage.setItem(keyOfValue, valueToAdd)
}

/* ${arrTime[0]} */

//setting up the buttons to perform a save on click
for(i=0; i< arrBtns.length; i++) {
    arrBtns[i].addEventListener("click", saveToLocal)
}



/* Create html for each hour of the day and corresponding css 9am-5pm
create function that gets current hour of the day
if html is 1 hour past current time turn it gray
if html is current hour turn it red
if html is 1 hour ahead of current time turn it green

then need to create text boxes for each hours 
then need to create buttons that save the text content of that hour to the localstore
when the page is refreshed the local storage would then remember the changes made to that hour*/