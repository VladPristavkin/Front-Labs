const API_KEY = 'api_key=f06a1e72268a25e882500768b9455f0c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;

const filmList = document.querySelector('.film-list');
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

getMovies(API_URL);

function getMovies(url) {
    console.log(url);
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
}

function showMovies(data) {
    filmList.innerHTML = '';

    Array.from(data).forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieElement = document.createElement('figure');
        movieElement.classList.add('movie-card');
        movieElement.innerHTML = `
        <figcaption class="movie-info">
        <img class="movie-image" src="${IMG_URL + poster_path}" alt="${title}">
        <div class="movie-main-info">
            <h3 class="movie-title">${title}</h3>
            <span class="rating ${getColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            ${overview}
        </div>
        </figcaption>
        `;

        filmList.append(movieElement);
    });
}

function getColor(vote) {
    if(vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const searchTerm = searchInput.value;

    if(searchTerm) {
        getMovies(SEARCH_URL + '&query=' + searchTerm);
    }
})