var description = document.querySelector("#description");
var timeAllot = document.querySelector("#hour");


description.appendChild(tex)

const d = new Date();
d.getHours();

console.log(d.getHours());

for (let i = 0; i < array.length; i++) {
    const element = array[index];
    
    if ((d.getHours) > timeAllot) {
        /* turn textarea green */
    }
    if ((d.getHours) === timeAllot) {
        /* turn textarea red */
    }
    if ((d.getHours) < timeAllot) {
        /* turn textarea gray */
    }
};



/* Create html for each hour of the day and corresponding css 9am-5pm
create function that gets current hour of the day
if html is 1 hour past current time turn it gray
if html is current hour turn it red
if html is 1 hour ahead of current time turn it green

then need to create text boxes for each hours 
then need to create buttons that save the text content of that hour to the localstore
when the page is refreshed the local storage would then remember the changes made to that hour*/