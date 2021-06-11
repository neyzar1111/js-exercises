const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,  //those are the titles
];

const wrapWithTag = (content, tagname) => {  // first we wrap the title(cotent) with a carcas version
  return `<${tagname}>${content}</${tagname}>`;
};

const parseTitle = title => {  // we have a var that has function that gives to var title || it is a carcas version for future use
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};

document.write(`<ol>`);   // we use last function for each our title
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
