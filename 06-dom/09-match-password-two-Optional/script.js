/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function checkInputs(){
        const pas1 = document.querySelector("#pass-one");
        const pas2 = document.querySelector("#pass-two");
        if(pas1.value !== pas2.value){
            pas1.classList.add("error");
            pas2.classList.add("error");
        }
    }

    document.querySelector('#run').addEventListener('click',checkInputs);

})();
