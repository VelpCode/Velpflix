// 50f9e55e

//https://api.themoviedb.org/3/movie/550?api_key=10e5b26f65216e0d907d2c1c45c6ea2c

const moviesContainerEl = document.querySelector(".movies__container");
const defaultContainerEl = document.querySelector(".default__container");
const goBackEl = document.querySelector(".goBack");

async function searchBarInput(event) {
  const inputValue = event.target.value;
  const movie = await fetch(
    `https://www.omdbapi.com/?apikey=50f9e55e&s=${inputValue}`
  );