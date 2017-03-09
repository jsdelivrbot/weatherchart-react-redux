import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term : ''};

    this.onInputChange = this.onInputChange.bind(this);
    // this.props was returning empty due to wrong this, needed to bind it to
    // the searchbar this
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  //In order to prevent the page from refreshing when pressing enter or submit
  onFormSubmit(event) {
    event.preventDefault();

    // Calls our action creator with the search term
    this.props.fetchWeather(this.state.term);
    // Sets the search term to empty string on submit
    this.setState({ term: ''});
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
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="Submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
// gives us access to the function this.props.fetchWeather in the SearchBar
// component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// tells that you need to connect the two but we dont care about the state in
// this container
export default connect(null, mapDispatchToProps)(SearchBar);
