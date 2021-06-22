/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    const myTable = document.createElement("table");
    const tableInTarget = target.appendChild(myTable);
    tableInTarget.setAttribute("class", "table");

    const tableT = document.querySelector(".table");

    for(let i = 1; i <= 10; i++){
        const tableR = document.createElement("tr");
        const td = document.createElement("td");
        tableT.appendChild(tableR).appendChild(td).innerHTML = `row ${i}`;
    }
})();
