/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    const run = document.getElementById("run");
    run.addEventListener("click", function () {
        let arr = [];
        keys.forEach((item, index) => {
            arr.push([item, values[index]]);
        });
        console.log(arr)
        const object = Object.fromEntries(arr);
        console.log(object);
    });
})();
