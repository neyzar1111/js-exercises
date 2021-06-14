/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();

    const curTime = h + ':'+ m;
    console.log(curTime);

    function sayHello (curTime){
        if(curTime === '17:30'){
            document.querySelector("#target").innerHTML = "<i>Good evening</i>";
        }  else {
            document.querySelector("#target").innerHTML = "<i>Hello</i>";
        }
    }

    sayHello(curTime);

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

})();
