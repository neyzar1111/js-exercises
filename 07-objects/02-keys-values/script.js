/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    const btn = document.querySelector("#run");
    btn.addEventListener("click", function(){
        for (let item in person){
            console.log(item);
        }
        for (let item in person){
            console.log(person[item]);
        }
        console.table(person)

    })
})();
