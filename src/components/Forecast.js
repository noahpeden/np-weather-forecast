import React from 'react'
import {Link} from 'react-router'
import HeaderContainer from '../containers/HeaderContainer'

export default class Forecast extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showHourly: false,
    }
  }

  render(){

    const featureCity = this.props.featureCity.city;

    const hourlyForecast = this.props.featureCity.hourly.slice(0,6).map((hour, index)=>{
      return (

        <div className='forecast-card' key={index}>

          <h3>{this.props.featureCity.hourly[index].FCTTIME.weekday_name} {this.props.featureCity.hourly[index].FCTTIME.civil}</h3>
          <img src={this.props.featureCity.hourly[index].icon_url}/>

          <p>{this.props.featureCity.hourly[index].condition} &  {this.props.featureCity.hourly[index].temp.english}F</p>
        </div>
      )
    });

    const extendedForecast = this.props.featureCity.extended.slice(0,7).map((day, index)=>{
      return (

        <div className='forecast-card' key={index}>

          <h3>{this.props.featureCity.extended[index].date.weekday}</h3>
          <img src={this.props.featureCity.extended[index].icon_url}/>
          {this.props.featureCity.extended[index].conditions} with a high of {this.props.featureCity.extended[index].high.fahrenheit} and low of {this.props.featureCity.extended[index].low.fahrenheit}.
        </div>
      )
    });

    return (
      <div className='extended-forecast'>
        <HeaderContainer />
        <section className='forecast-header'>
          <h1 className="your-forecast">
            Your {this.props.featureCity.city} {this.state.showHourly ? "Hourly" : "Extended"} Forecast
          </h1>
          <button
            onClick={()=>{this.setState({showHourly: !this.state.showHourly})}}>{this.state.showHourly ? "Show Extended" : "Show Hourly"}
          </button>


        </section>

        <section className="the-forecast">
          {this.state.showHourly ? hourlyForecast : extendedForecast}
        </section>
        <Link to="/">
          <button>Get Back, Get Back</button>
        </Link>
      </div>
    )
  }
}
