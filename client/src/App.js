import React, { Component } from 'react';
import './App.css';
import {getWeather} from './Services/Weather';
import { isEmptyObject} from './utils';
import CurrentWeather from './CurrentWeather';
import  {convertTimestamp} from './utils';



class App extends Component {
  constructor(){
    super();
      this.state ={
        lat: 0,
        lon: 0,
        currentWeather: {},
        error: null
      };
      this.handleLatChange =this.handleLatChange.bind(this);
      this.handleLonChange = this.handleLonChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLatChange(e){
    this.setState({
      lat: +e.target.value
    })
  }

  handleLonChange(e){
    this.setState({
      lon: +e.target.value

    })
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('this is the stuff');
    getWeather(this.state.lat, this.state.lon)
    .then(response => {
    const currentWeather = response.data.currently;
    this.setState({
      currentWeather: currentWeather
    
    }); 
  })
  .catch(error=> {
    console.log(error);
    this.setState({
      error: 'Something is broken'
    });
  });
}
  render() {
    if(this.state.error){
      return(
        <h1>{this.state.error}</h1>
      )
    }
    return (
      <div>
       <h1>React Weather</h1>
       <p>Enter your latitude and longitude to get the weather!</p>
       <form onSubmit={(e) => this.handleSubmit(e)}>
         <label>
           Latitude
           <input type="number"
           min='-90'
           max='90'
            onChange={(e) => this.handleLatChange(e)}  value={this.state.lat}
            required></input>

         </label>
         <label>
           Longitude
           <input type="number"
           min='-180'
           max='180'
            onChange={(e) => this.handleLonChange(e)}  value={this.state.lon}
            required></input>
           
         </label>
         <button type='submit'>Get The Weather</button>
       </form>
      {this.state.error ? <h1>{this.state.error}</h1> : ''}
      { isEmptyObject(this.state.currentWeather) ? 
       "" :
       <CurrentWeather {...this.state.currentWeather}/>}

      </div>
    );
  }
}

export default App;
