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
  const movieData = await movie.json();
  if (!movieData.Search) {
    moviesContainerEl.style.display = "none";
    defaultContainerEl.style.display = "block";
    goBackEl.style.display = "none";
  } else if (movieData.Search) {
    moviesContainerEl.style.display = "flex";
    defaultContainerEl.style.display = "none";
    goBackEl.style.display = "flex";
  }
  moviesContainerEl.innerHTML = movieData.Search.slice(0, 9)
    .map((movie) => moviesHTML(movie))
    .join("");

  event.preventDefault();
}
function moviesHTML(movie) {
    return `<div class="movie--container">
    <div class="movie__contents">
      <div class="movie__poster">
        <img
          src="${movie.Poster}"
          class="movie__poster--img"
        />
      </div>
      <div class="movie__info--container">
        <div class="movie__title">${movie.Title}</div>
        <div class="movie__year">Year: ${movie.Year}</div>
      </div>
    </div>
  </div>`;
  }
  
  function searchBarActive() {
    document.querySelector(".seach__bar--ref").classList.toggle("sbActive");
  }
  
  function nAlert() {
    alert(
      "Hello, this is just for decoration the function of this site is to search for movies!"
    );
  }
  
  function goBack() {
    moviesContainerEl.style.display = "none";
    defaultContainerEl.style.display = "block";
    goBackEl.style.display = "none";
  }