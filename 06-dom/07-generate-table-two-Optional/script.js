/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const target = document.getElementById("target");
    const myTable = document.createElement("table");
    target.appendChild(myTable).setAttribute("class", "table");

    const tableT = document.querySelector(".table");

    for(let i = 1; i <= 10; i++){
        const row = document.createElement("tr");
        let tableRow = tableT.appendChild(row)
        for(let k = 1; k<= 10; k++){
            const td = document.createElement("td");
            tableRow.appendChild(td).innerHTML = `${k} * ${i} = ${k*i}`;
        }
    }

})();
