/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    let btn = document.querySelector("#run");

    btn.onclick = function setBirthday(){
        const day = document.querySelector("#dob-day");
        const month = document.querySelector("#dob-month");
        const year0 = document.querySelector("#dob-year");

        let dayV = day.value;
        let monthV = month.value;
        let year1 = year0.value;
        let birthDate = dayV + "/" + monthV + "/" + year1;


        var dob = new Date(birthDate);

        //calculate month difference from current date in time ----вычислить разницу в месяцах с текущей даты во времени
        var month_diff = Date.now() - dob.getTime();

        //convert the calculated difference in date format  ---- преобразовать вычисленную разницу в формат даты
        var age_dt = new Date(month_diff);

        //extract year from date
        var year = age_dt.getUTCFullYear();

        //now calculate the age of the user
        var age = Math.abs(year - 1970);


        console.log(age)

        //display the calculated age
        document.querySelector(".temp").innerHTML = age;
    }



























