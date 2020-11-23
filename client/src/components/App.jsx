import React from 'react';

import AllFilms from './AllFilms.jsx';
import Search from './Search.jsx';
import NavMain from './NavMain.jsx';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      displayedMovies: [],
      watchedMovies: [],
      unwatchedMovies: [],
      movieInfo: []
    }
    this.searchHandler = this.searchHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.watchHandler = this.watchHandler.bind(this);
    this.displayUnwatched = this.displayUnwatched.bind(this);
    this.displayWatched = this.displayWatched.bind(this);
    this.displayAll = this.displayAll.bind(this);
    this.displayInformation = this.displayInformation.bind(this);
  }

  componentDidMount() {
    this.setState({displayedMovies:this.state.movies});
  }

  searchHandler(string) {
    // i: string
    // action: use input string, filter through movies with input
    // ec: casing
    // var noMovie = [{title: '🙈 Oops! No Results Found.'}];
    var filteredMovies = this.state.movies.filter( (movie) => {
      var inputStr = string.toLowerCase();
      var currentTitle = movie.title.toLowerCase();
      return currentTitle.includes(inputStr);
    });
    if (filteredMovies.length > 0) {
      this.setState({displayedMovies:filteredMovies});
    } else {
    <img src="https://film-favs.s3.us-east-2.amazonaws.com/TryAgain.gif" alt="no results" width="70%"/>
    }
  }

  addHandler(string) {
    // i: string
    // a: use input string to add a movie title to movies
    // hl: set state of movies to include added movie
    var lowerCase = string.toLowerCase();
    var splitString = lowerCase.split(' ');
    var newMovieTitle = '';
    for (var i = 0; i < splitString.length; i++) {
      var currentWord = splitString[i];
      currentWord = currentWord[0].toUpperCase() + currentWord.slice(1);
      newMovieTitle += currentWord + ' ';
    }
    var newMovie = {title: newMovieTitle, watch:false};
    var movieList = [newMovie, ...this.state.displayedMovies];
    this.setState({displayedMovies:movieList, movies:movieList});
  }

  watchHandler(string) {
    // i: string - title of movie clicked
    // a: add watched movie to watched list, or add to unwatched
    // hl: move movie from unwatched list to watched & visa-versa
    var myMovies = this.state.movies.map( (movie) => {
      if (movie.title !== string) {
        return movie;
      } else {
        return {title:movie.title, watch:!movie.watch}
      }
    });
    var watchedMov = myMovies.filter((movie) => {
      return movie.watch;
    })
    var unwatchedMov = myMovies.filter((movie) => {
      return movie.watch === false;
    })
    this.setState({movies:myMovies, watchedMovies:watchedMov, unwatchedMovies:unwatchedMov});
  }

  displayInformation() {
    // displays information of films
    this.setState({movieInfo: 'movie information'});
  }

  displayUnwatched() {
    // displays unwatched movies
    this.setState({displayedMovies:this.state.unwatchedMovies});
  }

  displayWatched() {
    // displays watched movies
    this.setState({displayedMovies:this.state.watchedMovies});
  }

  displayAll() {
    // displays all movies
    this.setState({displayedMovies:this.state.movies});
  }

  render(){
    return(
    <div className="main">
      <NavMain />
        <Col>
        <div>
          <h2>< Search 
            searchHandler={this.searchHandler} 
            addHandler={this.addHandler} 
            /></h2>
        </div>
        <div> 
          <h2><AllFilms 
            movies={this.state.displayedMovies} 
            watchHandler={this.watchHandler}
            displayUnwatched={this.displayUnwatched}
            displayWatched={this.displayWatched}
            displayAll={this.displayAll}
            displayInformation={this.displayInformation}
          /></h2>
        </div>
      </Col>
    </div>
  )}
}

export default App;

