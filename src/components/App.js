import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {

  // getCurrentLocation(){
  //   navigator.geolocation.getCurrentPosition((data) => {
  //      this.props.fetchLocation(data)
  //   }).then((data)=>{
  //      console.log(data)
  //   })
  // }
  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition((data) => {
       this.props.fetchLocation(data);
       setTimeout(this.getWeather(data), 500)
       this.getWeather(data)
    })
  }

  getWeather(data){
    console.log(data)
  }

  componentDidMount(){
    this.getCurrentLocation()
  }
  render(){
    return (
      <div>
      <Header />
      </div>
    )
  }
}
export default App;
