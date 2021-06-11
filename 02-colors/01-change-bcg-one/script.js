/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  
    let body = document.querySelector("body");

    let redBtn = document.querySelector("#red").onclick = function(){
        body.style.backgroundColor = "red"
    }

    let greenBtn = document.querySelector("#green").onclick = function(){
        body.style.backgroundColor = "green"
    }

    let yellowBtn = document.querySelector("#yellow").onclick = function(){
        body.style.backgroundColor = "yellow"
    }
    
    let blueBtn = document.querySelector("#blue").onclick = function(){
        body.style.backgroundColor = "blue"
    }


})();


