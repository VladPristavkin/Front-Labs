import React, { Component } from 'react'
import Movie from './Movie'

export default class MovieList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            {this.props.movies.map((movie, index) => {
              return (
                <Movie
                  key={index}
                  viewMovieInfo={this.props.viewMovieInfo}
                  movieId={movie.id}
                  image={movie.poster_path}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
