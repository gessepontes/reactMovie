import React, { Component } from 'react';

class MovieRow extends Component {

    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    render() {
        return (
            <table key={ this.props.movie.id }>
            <tbody>
                <tr>
                    <td><img alt="poster" width="120" src={ this.props.movie.poster_path } /></td>
                    <td>
                        <h3>{ this.props.movie.title }</h3>
                        <p>{ this.props.movie.overview }</p>
                        <input type="button" onClick={ this.viewMovie.bind(this) } value="Ver" />
                    </td>
                </tr>
            </tbody>
        </table>
        )
    }
}

export default MovieRow;