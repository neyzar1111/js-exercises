/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let out = document.querySelector(".out");
    let num = [];
    for (let i = 1; i <=21; i++){
        num.push(i);
    }


    document.getElementById("run").addEventListener("click", function() {

        let m = num.map((el, i) =>{
            el = el * el;
            return el;
        })
        console.log(m);
        out.innerHTML = m ;
    });

})();
