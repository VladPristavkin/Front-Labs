import React, { Component } from 'react'

export default class SearchArea extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <section className="col s4 offset-s4">
            <form action="" onSubmit={this.props.onSubmit}>
              <div className="input-field">
                <input
                  placeholder="Search movie"
                  type="text"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
