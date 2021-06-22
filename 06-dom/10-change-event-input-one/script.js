/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    function checkInput (){
        const input = document.querySelector('#pass-one');
        const inputLength = input.value.length;
        if(inputLength=== 10){
            input.setAttribute("maxlength","10");
        }
        document.querySelector('#counter').innerHTML = `${inputLength}/10`;

    }
    document.querySelector('#pass-one').oninput = checkInput;



})();
