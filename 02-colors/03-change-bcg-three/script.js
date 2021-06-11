/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let bd = document.querySelector("body");
    let btn = document.querySelector("#run");
    btn.addEventListener("click", f1)

    function f1(){
        bd.style.backgroundColor =  randomHsl() ;
    }
    // making color
    function randomHsl() {
        bd.style.backgroundColor =  'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
    }

})();
