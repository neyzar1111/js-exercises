/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // let b  = document.getElementById("source").dataset.image; // version 2

    const attributeSource  = document.getElementById("source");
    const target  = document.getElementById("target");
    const newElement = document.createElement('img');

    newElement.setAttribute("src", attributeSource.attributes[1].value);
    target.appendChild(newElement);

    attributeSource.remove();

})();
