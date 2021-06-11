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

const wrapWithTag = (content, tagname) => {
  return`<${tagname}>${content}</${tagname}>`;
};


const createList = movies =>{
  return ` <ol> 
  ${
    tvshows.map(show => wrapWithTag(show, `li`)).join('')
  }
  </ol> `
}


document.write(createList(tvshows));