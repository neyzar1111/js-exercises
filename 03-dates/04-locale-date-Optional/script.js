/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let target  = document.querySelector("#target");

function getTodayDate(){
    let today = new Date();
    let arrMonth = ["January", "February", "March", "April", "May", "June","July", "August","September","October","November", "December"];
    let arrDay = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ");
    console.log(arrDay)
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay() - 1;
    const  hours = today.getHours();
    const minutes = today.getMinutes();

    // console.log(day);

    let out = `${arrDay[day]} ${date} ${arrMonth[month]} ${year}, ${hours}h${minutes}`;
    target.innerHTML = out;
}
getTodayDate();