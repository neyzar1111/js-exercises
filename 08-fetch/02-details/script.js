/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
const temp = document.querySelector('#tpl-hero');
const target = document.querySelector("#target");
const btn = document.getElementById('run');
const clone = temp.content.cloneNode(true);
target.appendChild(clone);
btn.addEventListener("click", function (){
    fetch('http://localhost:63342/01.js-exercises/_shared/api.json')
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
            superHeroes(data)
        })

    function superHeroes(data){
        const  heroId = +document.getElementById('hero-id').value;
        if(heroId > 0 && heroId < 6 ){
            const heroName = document.querySelector(".name");
            const alterEgo = document.querySelector(".alter-ego");
            const heroPowers = document.querySelector(".powers");

            let heroNum = heroId - 1;
            heroName.innerHTML = data.heroes[`${heroNum}`].name;
            alterEgo.innerHTML = data.heroes[`${heroNum}`].alterEgo;
            heroPowers.innerHTML = data.heroes[`${heroNum}`].abilities.join(". ")
        } else{
            alert('No such Id')
        }

    }
} )























