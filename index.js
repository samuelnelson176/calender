const date = new Date();

const monthDays = document.querySelector('.days')

const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay();

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
    "Deccember"
];

document.querySelector(".date h1").innerHTML = months[date.getMonth()]; 

document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x--){
    days += `<div class = "prevDate">${prevLastDay - x}</div>`
};

for(let i=1; i<=31; i++){
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
};
