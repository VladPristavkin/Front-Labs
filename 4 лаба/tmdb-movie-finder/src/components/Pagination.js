import React, { Component } from 'react'

export default class Pagination extends Component {
  render() {
    const pageLinks = [];

    for (let i = 1; i <= this.props.pages + 1; i++) {
      let active = this.props.currentPage == i ? "active" : "";
      pageLinks.push(
        <li
          className={`waves-effecr ${active}`}
          key={i}
          onClick={() => this.props.nextPage(i)}
        >
          <a href="#">{i}</a>
        </li>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <ul className="pagination" style={{ textAlign: 'center' }}>
            {this.props.currentPage > 1 ? (
              <li
                className={`waves-effecr`}
                onClick={() => this.props.nextPage(this.props.currentPage - 1)}
              >
                <a href="#">Prev</a>
              </li>
            ) : ("")
            }
            {pageLinks}
            {this.props.currentPage < this.props.pages + 1 ? (
              <li
                className={`waves-effecr`}
                onClick={() => this.props.nextPage(this.props.currentPage + 1)}
              >
                <a href="#">Next</a>
              </li>
            ) : ("")
            }
          </ul>
        </div>
      </div>
    );
  }
}
