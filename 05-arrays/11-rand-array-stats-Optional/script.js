/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let domEl  = []

    document.getElementById("run").addEventListener("click", function(){
        for(let i = 1; i <= 10; i++){
            domEl.push(document.querySelector(`#n-${i}`));

        }
        console.log(domEl);
        let arr = [];


        domEl.map((e,i)=>{
            for(let k = 1; k <= 100; k++){
                if(i===0 && k < 11){
                    e.innerHTML += k + " ";
                    arr.push(k);
                } else if (i === 1 && k > 10 && k < 21){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 2 && k > 20 && k < 31){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 3 && k > 30 && k < 41){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 4 && k > 40 && k < 51){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 5 && k > 50 && k < 61){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 6 && k > 60 && k < 71){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 7 && k > 70 && k < 81){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 8 && k > 80 && k < 91){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }else if (i === 9 && k > 90 && k <= 100){
                    e.innerHTML  += k + " ";
                    arr.push(k);
                }
            }
        })
        //part 2 max and min sum and average
         let max = Math.max(...arr);
         let min = Math.min(...arr);
         let sum  = arr.reduce((acc, curr)=>{
             return acc + curr;
         }) ;
         let average = sum / arr.length;
        document.querySelector("#min").innerHTML += min;
        document.querySelector("#max").innerHTML += max;
        document.querySelector("#sum").innerHTML += sum;
        document.querySelector("#average").innerHTML += average;


    })


})();


