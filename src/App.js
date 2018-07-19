import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieRow from './component/MovieRow';
import $ from 'jquery';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("woman")
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?query=" + searchTerm + "&api_key=93eca8df01f2b75144290cf416468bd0";

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results
        var movieRows = []

        results.forEach((movie) => {
          movie.poster_path = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows })

      },
      error: (xhr, status, err) => {
        console.log("error");
      }
    })
  }

  searchChangeHandler(event) {
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td><img width="50" src={logo} className="App-logo" alt="logo" /></td>
              <td width="8"></td>
              <td><h2>FilmesDB</h2></td>
            </tr>
          </tbody>
        </table>

        <input className="inputSearch" placeholder="Entre com a perquisar..." onChange={this.searchChangeHandler.bind(this)} type="text" />

        {this.state.rows}

      </div>
    );
  }
}

export default App;
