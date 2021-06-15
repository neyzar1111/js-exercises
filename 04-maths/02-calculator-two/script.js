/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let inp = document.querySelector("#op-one");
    let inp2 = document.querySelector("#op-two");
    let out = document.querySelector(".out");

    var performOperation = function(operation) {
        let x = +inp.value;
        let y = +inp2.value;
        switch (operation) {
            case "addition":
                out.innerHTML = x + y;
                break;
            case "substraction":
                out.innerHTML = x - y;
                break;
            case "multiplication":
                out.innerHTML = x * y;
                break;
            case "division":
                out.innerHTML = x / y;
                break;

        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function(btn) {
        btn.addEventListener("click", function() {
           return  performOperation(btn.id);
        });
    });


})();
