/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    const btn = document.getElementById('run');
    btn.addEventListener("click", function (){
        fetch('http://localhost:63342/01.js-exercises/_shared/api.json')
            .then(function (resp) {
                return resp.json()
            })
            .then(function (data) {
                const heroes = data.heroes;
                showHeroes(heroes)
            })

    })
})();
function showHeroes(heroes){

    heroes.forEach((e,i)=>{
        let temp = document.getElementById("tpl-hero");
        let clone = temp.content.cloneNode(true);
        document.getElementById('target').appendChild(clone);
        document.querySelectorAll('.name')[i].innerHTML = heroes[i].name;
        document.querySelectorAll('.alter-ego')[i].innerHTML = heroes[i].alterEgo;
        document.querySelectorAll('.powers')[i].innerHTML = heroes[i].abilities.join('. ');
    })
}