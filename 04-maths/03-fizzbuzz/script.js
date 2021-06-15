/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




let num = [];
for(let i = 1; i <= 100; i++){
    num.push(i);
}
console.log(num);

let m  = num.map((el, i) =>{
    if(i % 3 == 0){
        el = "fizz";
        return el;
    } else if(i % 5 == 0){
        el = "buzz";
        return el;
    } else if(i % 3 == 0 && i % 5== 0){
        el = "fizzbuzz";
        return el;
    }else {
        return el;
    }
});
document.querySelector(".i-out").innerHTML = m;
console.log(m);


