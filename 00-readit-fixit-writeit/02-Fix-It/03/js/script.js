const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];
//  method 1

// let c = tvshows.reverse();
// document.write(`<ol>`);
// for (let i = 0; i < c.length; i++) {
//   document.write(`<li>${c[i]}</li>`);
// }
// document.write(`</ol>`);

// method 2
document.write(`<ol>`);
for(let i = tvshows.length - 1; i >= 0; i--){
  document.write(`<li>${tvshows[i]}</li>`)
}
document.write(`<ol>`);