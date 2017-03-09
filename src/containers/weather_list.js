import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const pressure = cityData.list.map(weather => weather.main.pressure)

    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart color="red" data={temps} />
        </td>
        <td>
          <Chart color="blue" data={humidity} />
        </td>
        <td>
          <Chart color="green" data={pressure} />
        </td>
      </tr>
    );
  }
  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) { // state.weather == {weather} (es6)
  return { weather }; //{ weather: state.weather } == { weather }
}

// Mappa state breytuna weather inn i weatherlist
export default connect(mapStateToProps)(WeatherList);
