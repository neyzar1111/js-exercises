/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    fetch('http://localhost:63342/01.js-exercises/_shared/api.json')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            console.log(data);
        })

})();
