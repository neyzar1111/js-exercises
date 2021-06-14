/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


let btn = document.querySelector('#run');
let y = document.querySelector('#year');
let out = document.querySelector('.out');

let arrMonth = ["January", "February", "March", "April", "May", "June","July", "August","September","October","November", "December"];
let arrDay = "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" ");

btn.addEventListener("click", f1);
function f1(){
    let year = y.value;
    // let d = new Date(year);
    // let setYear =  d.setFullYear(year, 0, 13);
    // console.log(setYear)

    let friday = '';

    for (let i = 1; i <= 12; i++) {
        let d = new Date(i + "/13/" + year);
        if (d.getDay() == 5) {
            friday += d.getMonth() + " ";
        }
    }
    let monthWithFriday = friday.split(' ').map(x=>+x).slice(0, -1);
    console.log(monthWithFriday);

    let m = monthWithFriday.map((el,i)=>{
        el = arrMonth[el];
        return el;
    }). join(", ");
    console.log(m)

    out.innerHTML = m;
}












