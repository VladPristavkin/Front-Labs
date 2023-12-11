import React, { Component } from 'react'

export default class MovieInfo extends Component {
  render() {
    return (
      <div className="container">
        <div
          className="row"
          onClick={this.props.closeMovieInfo}
          style={{ cursor: "pointer", paddingTop: 50 }}
        >
          <i className="fa fa-arrow-left"></i>
          <span style={{ marginLeft: 10 }}>Go back</span>
        </div>
        <div className="row">
          <div className="col s12 m4">
            {this.props.selectedMovie.poster_path == null ? (
              <img
                src={"https://socialkids.ca/activities/uploads/noimage.png"}
                alt="Card image"
                style={{ width: "100%", height: 360 }}
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w185${this.props.selectedMovie.poster_path}`}
                alt="Card image"
                style={{ width: "100%", height: 360 }}
              />
            )}
          </div>
          <div className="col s12 m8">
            <div className="info-container">
              <p>{this.props.selectedMovie.title}</p>
              <p>{this.props.selectedMovie.release_date}</p>
              <p>{this.props.selectedMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
