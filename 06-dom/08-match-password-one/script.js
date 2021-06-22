/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
            pas1.style.borderColor = "red"
            pas2.style.borderColor = "red"
        }
    }

    document.querySelector('#run').addEventListener('click',checkInputs);
})();
