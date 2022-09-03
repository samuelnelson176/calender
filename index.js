//creating the date object
const date = new Date();

date.setDate(1);

console.log(date.getDay());

//declearing the first day variable
const firstDayIndex = date.getDay();

//creating the month object
const month = date.getMonth();

//updates the displayed days using the loop created
const monthDays = document.querySelector(".days");

//dynamically updating the last day for each month
const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

//
const prevlastDay =  new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const lastDayIndex =  new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

const nextDays = 7-lastDayIndex-1;

console.log(nextDays)

//Creating the months array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//updating the displayed month to present month
document.querySelector(".date h1").innerHTML = months[date.getMonth()];

//updating the displayed date to current date
document.querySelector(".date p").innerHTML = date.toDateString();

//days varaible
let days = "";

//loop for the last days of previous month index
for(let x = firstDayIndex; x>0; x--){
   days += `<div class = "prevDate">${prevlastDay-x+1}</div>`;
};

//loop for the first days of next month index
for(let j = 1; j <= nextDays; j++){
    days += `<div class = "nextDate">${j}</div>`;
 };
 

//loop for the days
for (let index = 1; index <= lastDay; index++) {
    days += `<div>${index}</div>`;
    monthDays.innerHTML = days;
};
