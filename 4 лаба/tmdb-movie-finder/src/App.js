import React, { Component } from 'react'
import Nav from './components/Nav';
import SearchArea from './components/SearchArea';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieInfo from './components/MovieInfo';

const API_KEY = 'api_key=f06a1e72268a25e882500768b9455f0c';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY + '&page=1&include_adult=false';
const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      selectedMovie: null
    }
  }

  componentDidMount() {
    // Выполняем запрос к API_URL при первоначальной загрузке страницы
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: [...data.results], totalResults: data.results.slice(0, 20)})
      })
      .catch(error => console.error('Error during initial fetch:', error));
  }

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${SEARCH_URL}&query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ movies: [...data.results], totalResults: data.total_results, isSubmitted: true})
    })
    .catch(error => console.error('No results were found:', error));
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value })
  }

  nextPage = (pageNumber) => {
    fetch(`${SEARCH_URL}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(res => res.json())
    .then(data => {
      this.setState({ movies: [...data.results], currentPage: pageNumber })
    })
  }

  viewMovieInfo = (movieID) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id == movieID);
    const newSelectedMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ selectedMovie: newSelectedMovie })
  }

  closeMovieInfo = () => {
    this.setState({ selectedMovie: null })
  }

  render() {
    const numberOfPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className="App">
        <Nav />
        {this.state.selectedMovie == null ? (
          <>
            <SearchArea
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
            {this.state.movies.length > 0 ? (
            <MovieList
              movies={this.state.movies}
              viewMovieInfo={this.viewMovieInfo}
            />
          ) : (
            <p style={{textAlign: 'center'}}>No results found</p>
          )}
          </>
        ) : (
          <MovieInfo
            selectedMovie={this.state.selectedMovie}
            closeMovieInfo={this.closeMovieInfo}
          />
        )}
        {this.state.totalResults > 20 && this.state.selectedMovie == null ? (
          <Pagination
            pages={numberOfPages}
            currentPage={this.state.currentPage}
            nextPage={this.nextPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
