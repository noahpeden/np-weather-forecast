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
      message = "Sunrise";
      break;
    case (midMorning < now && now < lateAfternoon):
      message = "Morning";
      break;
    case (lateAfternoon < now && now < sunset):
      message = "Afternoon";
      break;
    default:
      message = "Evening"
  }


  return(
    <div className='header'>
      <h1>Redux Weather<br />Forecast</h1>
      <ul className='sundial'>
        <li>sunrise: {sunrise}</li>
        <li>sunset: {sunset}</li>
        <li>currently: {now}</li>
        <li>{message}</li>
      </ul>
      <section className='currently'>
        {props.weather ? <div className="current-weather"><strong>{props.weather.city}</strong>
        <br/> currently {props.weather.temp}&#176;F & {props.weather.currently} <br/><img src={props.weather.icon}/></div> : <div>LOADING</div>}
        <Link to="/forecast">
          <button onClick={()=>props.changeFeatureCity(props.weather)} className="header-btn">
            Current Extended Forecast
          </button>
        </Link>
      </section>

    </div>
  )
}

export default Header;
