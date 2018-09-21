import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import Movie from './components/Movie';

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    const graphQlClient = new ApolloClient({
      uri: 'https://movie-database-graphql-qwqnwstigc.now.sh/graphql'
    });

    graphQlClient.query({
      query: gql`
        {
          movies(query: "id:1") {
            title
            id
            poster_path
          }
        }
      `
    }).then(result => this.setState({ movies: result.data.movies}));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="appContainer">
        {
          movies.map(movie =>
            <Movie
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
            />
          )
        }
      </div>
    );
  }
}

export default App;
