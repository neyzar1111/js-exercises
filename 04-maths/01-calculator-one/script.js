/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    // to get the value of an input: document.getElementById("element-id").value
    let inp = document.querySelector("#op-one");
    let inp2 = document.querySelector("#op-two");
    let out = document.querySelector(".out");

    document.getElementById("addition").addEventListener("click", function() {
        let x = +inp.value;
        let y = +inp2.value;
        let a = x + y;
        out.innerHTML = a;
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let x = +inp.value;
        let y = +inp2.value;
        let a = x - y;
        out.innerHTML = a;

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let x = +inp.value;
        let y = +inp2.value;
        let a = x * y;
        out.innerHTML = a;

    });

    document.getElementById("division").addEventListener("click", function() {
        let x = +inp.value;
        let y = +inp2.value;
        let a = x / y;
        out.innerHTML = a;
    });
