/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const data = [
        {
            name: "Aichurok",
            lastname: "Enazarova",
            age: "25",
            city:"Ostend",
            country:"Belgium",
            hobby: "coding",
            pets: ['cats', 'dog', 'chikens'],
            quote:"Firs, think. Second,dream. Third, believe. And finally, dare. -Walt Disney"
        }
    ]
    const btn = document.querySelector("#run");
    btn.addEventListener("click", function(){
        for (let item in data[0]){
            console.log(item + ': ' + data[0][item]);
        }
    })

})();
