/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const img = document.querySelector('img');
    const hoverAttr = img.dataset.hover;
    const srcAttr = img.src;

    img.addEventListener("mouseenter", function(){
        console.log('detected mouseover');
        img.src = hoverAttr;
    })

    img.addEventListener("mouseleave", function(){
        console.log('detected mouseleave');
        img.src = srcAttr;
    })

})();
