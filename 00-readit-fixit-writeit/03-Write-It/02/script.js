let ul = document.querySelector('ul');

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
  ].reverse();
  const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

  const createList = movies => {
    return `
      ${movies
        .map(mn => mn.toLowerCase())
        .map(movie => wrapWithTag(movie, `li`))
        .join(``)}
      `;
  };
  ul.innerHTML = createList(movies);