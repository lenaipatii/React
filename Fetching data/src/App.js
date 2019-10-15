import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import axios from 'axios';

export default class App extends Component {
  
  constructor() {
    super();

    this.state = {
      // colection of objects
      gifs: [],
      loading: true
    }
  }

  // componentDidMount() {
  //   // the fetch API usses JS promisses to handle results
  //   fetch( 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC' )
  //     .then( response => response.json() )
  //     .then( responseData => {
  //       this.setState( {
  //         gifs: responseData.data
  //       } );
  //     } )
  //     .catch( error => {
  //       console.log( 'Error fetching and parsing data', error );
  //     } );
  // }

 
  // is called immediatrly after a component is added to the DOM
  // at this point element had a dom representation
  componentDidMount() {
    this.performSearch();
  }

  performSearch= (query = 'cats') => {
    // Axios - a promise-based library that's similar to the Fetch API 
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    .then(response =>  {
      // handle success
      this.setState({
        gifs: response.data.data,
        loading: false
      });
    })
    .catch(error => {
      // handle error
      console.log('Error fetching and parsing data', error);
    });
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={ this.performSearch } />      
          </div>   
        </div>    
        <div className="main-content">
          {
            (this.state.loading)
            ? 'Loading...'
            :  <GifList data={ this.state.gifs } />
          }
        </div>
      </div>
    );
  }
}
