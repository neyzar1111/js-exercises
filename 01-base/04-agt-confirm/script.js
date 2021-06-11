/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;
let retriever = "";
let conf = "";

(function() {
    retriever += prompt("How old are you? ", "") + ' ';
    retriever += prompt("What is your gender? ", "")  + ' ';
    retriever += prompt("Where do you live? " , "")  + ' ';
     
    console.log(retriever);
})();

let arr = retriever.split(' ');
let c = confirm(`Your age is: ${arr[0]} years old,  Your gender is: ${arr[1]},  You live in: ${arr[2]}` );

if(c == true){
    document.querySelector('ul').innerHTML = wrapWithTag(`Your age is: ${arr[0]} years old`, `li`) + wrapWithTag(`Your gender is: ${arr[1]}`, `li`) + wrapWithTag(`You live in: ${arr[2]}`, `li`);

} else if (c == false){
    document.querySelector("#dialog-box").innerHTML = wrapWithTag(`You pressed Cancel!`, `p`)
}