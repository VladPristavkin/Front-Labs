import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    return (
      <div className="col s12 m6 l3">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            {this.props.image == null ? (
              <img
                src="https://socialkids.ca/activities/uploads/noimage.png"
                alt="card image"
                style={{ width: "100%", height: 360 }}
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w185${this.props.image}`}
                alt="card image"
                style={{ width: "100%", height: 360 }}
              />
            )}
            <div className="card-overview">
                <p style={{textAlign: 'center'}} ><a href="#" onClick={() => this.props.viewMovieInfo(this.props.movieId)}>View Details</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
