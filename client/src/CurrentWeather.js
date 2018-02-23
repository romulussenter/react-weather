import React from 'react';
import PropTypes from 'prop-types';
import {convertTimestamp} from './utils'

const CurrentWeather = props => {
    return(
      <section>
        <ul>
          <li> Time: {convertTimestamp(props.time)}</li>
          <li> Summary: {props.summary}</li>
          <li> Icon: {props.icon}</li>
          <li> Temperature: {props.temperature}</li>
        </ul>
  
      </section>
    )
  }

  CurrentWeather.propTypes ={
      time:PropTypes.number.isRequired,
      summary:PropTypes.string.isRequired,
      icon:PropTypes.string.isRequired,
      temperature:PropTypes.number.isRequired,
  }

  export default CurrentWeather