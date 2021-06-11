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
  ];
  const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

  const createList = movies => {
    return `
      <ol>${movies
        .map(movie => wrapWithTag(movie, `li`))
        .join(``)}
      </ol>`;
  };
  ul.innerHTML = createList(movies);