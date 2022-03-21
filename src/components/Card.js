import React from 'react'
import '../css/Card.css'
const kelvinToCelsius = require('kelvin-to-celsius');
 

export default function Card(props) {
    let datetime = (new Date(props.data.dt * 1000)).toString();
    var res = datetime.slice(0, 10);
    return (
        <div className='Card'>
            <h4>{res}</h4>
            <img  alt="img" src={`http://openweathermap.org/img/wn/${props.data ? props.data.weather[0].icon : ""}@2x.png`} />
            <h1>{props.data.name}</h1>

            <p> <strong>Max:</strong> {props.data.temp ?  Math.round(kelvinToCelsius(props.data.temp.max))+'ºC' : Math.round(kelvinToCelsius(props.data.main.temp_max))+'ºC' }</p>
            <p> <strong>Min:</strong> {props.data.temp ?  Math.round(kelvinToCelsius(props.data.temp.min))+'ºC' : Math.round(kelvinToCelsius(props.data.main.temp_min))+'ºC'}</p>
            <p>{props.data ? props.data.weather[0].main : ""}</p>
        </div>
    )
}
