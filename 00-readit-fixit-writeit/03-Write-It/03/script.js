let ol = document.querySelector('ol');

const actors= [
  {
    actor: "Forest Whitaker",
    film: "The Last King of Scotland",
    age: 45
  }, {
    actor: "Daniel Day-Lewis",
    film: "There Will Be Blood",
    age: 50
  }, {
    actor: "Sean Penn",
    film: "Milk",
    age: 48
  }, {
    actor: "Jeff Bridges",
    film: "Crazy Heart",
    age: 60
  }, {
    actor: "Colin Firth",
    film: "The King's Speech",
    age: 50
  }, {
    actor: "Jean Dujardin",
    film: "The Artist",
    age: 39
  }, {
    actor: "Daniel Day-Lewis",
    film: "Lincoln",
    age: 55
  }, {
    actor: "Matthew McConaughey",
    film: "Dallas Buyers Club",
    age: 44
  }, {
    actor: "Eddie Redmayne",
    film: "The Theory of Everything",
    age: 33
  }, {
    actor: "Leonardo DiCaprio",
    film: "The Revenant",
    age: 41
  }
]
  const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;


  const parseMovieData = movie => {
    let result = ``;
    for (const prop in movie) {
      result += wrapWithTag(movie[prop], `p`);
    }
    return result;
  };

  const orderByYear = (a, b) => {
    return b.age - a.age;
  };

  const createList = movies => {
    return `
      ${movies
        .sort(orderByYear)
        .map(movie => wrapWithTag(parseMovieData(movie), `li`))
        .join(``)}
      `;
  };
  ol.innerHTML = createList(actors);
  console.table(actors)