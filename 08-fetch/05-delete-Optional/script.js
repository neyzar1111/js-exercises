/* becode/javascript
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let heroes ;
    fetch("http://localhost:63342/01.js-exercises/_shared/api.json")
        .then(function (resp) {
            return resp.json()
        })
        .then(function (data) {
          heroes = data.heroes;
          console.log(heroes)
        })
    const btn = document.getElementById('run');
    btn.addEventListener("click", function(){
        let inputValue = +document.getElementById('hero-id').value;
        console.log(inputValue)
       let restHeroes =  heroes.filter((hero ,indx)=>{
           return (hero.id !== inputValue)

       });
        console.log(restHeroes)
    })
