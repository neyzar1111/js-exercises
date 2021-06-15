/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.querySelector("#run").addEventListener("click", function (){
        fruits.pop();  // removes last elem
        fruits.shift();  // removes first elem
        fruits.push("kiwi"); // add to end
        fruits.unshift("banana"); // add to start
        console.log(fruits);
    })

})();
