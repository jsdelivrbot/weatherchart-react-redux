import React, { Component } from 'react';

import config from '../../config.json'

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term : ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    console.log(config.API_KEY)
    this.setState({ term: event.target.value });
  }

  //In order to prevent the page from refreshing when pressing enter or submit
  onFormSubmit(event) {
    event.preventDefault();
  }


  render() {
    return(
      <form
        className="input-group"
        onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="Submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }


}
