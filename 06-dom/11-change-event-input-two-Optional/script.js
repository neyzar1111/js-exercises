/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



    function validatePass(){
        const regEx = /(?=.*[\d]){2,}(?=.*[a-zA-Z]).{8,}/g;
        const input = document.getElementById("pass-one").value;
        let res = regEx.test(input);
        if(res){
            document.getElementById("validity").innerHTML = 'ok';
        }
        else{
            document.getElementById("validity").innerHTML = 'Not ok';
        }
    }
    validatePass();
    document.getElementById("pass-one").oninput = validatePass;
})();
