/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (() => {
//     // your code here
// })();
let heroes =
fetch("http://localhost:63342/01.js-exercises/_shared/api.json")
    .then(function (resp) {
        return resp.json()
    })
    .then(function (data) {
        console.log(data)
        heroes = data.heroes;
    })

document.querySelector("#run").addEventListener("click", addingNewHeroes);

function addingNewHeroes (e){
    e.preventDefault()
    const heroName = document.querySelector("#hero-name");
    const alterEgo = document.querySelector("#hero-alter-ego");
    const powers = document.querySelector("#hero-powers");
    if(heroName == "" ||alterEgo == ""|| powers == ""){
        alert("Please fill all 3 inputs");
    }
    if(heroName == heroes[heroes.length-1].name ){
        alert("such hero exist")
    } else{
        const newHero = {};
        newHero["id"] = heroes.length + 1;
        newHero["name"] = heroName.value;
        newHero["alterEgo"] = alterEgo.value;
        newHero["abilities"] = powers.value;
        heroes.push(newHero);
        console.log(heroes);
    }

}
