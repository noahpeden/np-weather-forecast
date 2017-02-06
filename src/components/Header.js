import React from 'react'
import {Link} from 'react-router'
import moment from 'moment'

const Header = (props) => {
  let message = ""
  let now = moment().format('HH:mm')
  let sunrise = props.sunrise ? moment.parseZone(`${props.sunrise.sunrise}`).local().format('HH:mm') || moment().format('HH:mm'): moment().format('HH:mm')
  let midMorning = moment(sunrise, 'HH:mm:ss').add(2,'h').format('HH:mm')
  let sunset = props.sunrise ? moment.parseZone(`${props.sunrise.sunset}`).local().format('HH:mm') || moment().format('HH:mm') : moment().format('HH:mm')
  let lateAfternoon = moment(sunset, 'HH:mm:ss').subtract(2,'h').format('HH:mm')
  switch(true){
    case (sunrise < now && now < midMorning):
      message = "rise and shine";
      break;
    case (midMorning < now && now < lateAfternoon):
      message = "be productive rn";
      break;
    case (lateAfternoon < now && now < sunset):
      message = "probably should eat dinner";
      break;
    default:
      message = " night is the time to shine"
  }


  return(
    <div className='header'>
      <h1>Weather App</h1>
      <section className='sundial'>
        <li>sunrise: {sunrise}</li>
        <li>sunset: {sunset}</li>
        <li>currently: {now}</li>
        <li>{message}</li>
      </section>
      <section className='currently'>
        {props.weather ? <div><strong>{props.weather.city}</strong>
        <br/> currently {props.weather.temp}&#176;F & {props.weather.currently} <br/><img src={props.weather.icon}/></div> : <div>LOADING</div>}
        <Link to="/forecast">
          <button onClick={()=>props.changeFeatureCity(props.weather)}>
            Extended Forecast
          </button>
        </Link>
      </section>

    </div>
  )
}

export default Header;
