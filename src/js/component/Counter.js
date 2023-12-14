import React from "react";
import PropTypes from 'prop-types';
//function Counter() {
//return (<div className="reloj">
//<FontAwesomeIcon icon="fa-regular fa-clock" />
//</div>)

//}
function Counter(props) {
    
    return (

        <div className='Reloj'><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="pink" class="bi bi-clock" viewBox="0 0 30 30">
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
      </svg>
            <div className='Second'>
            <div className='Uno'>{props.uno}</div>
            <div className='Dos'>{props.dos}</div>
            <div className='Tres'>{props.tres}</div>
            <div className='Cuatro'>{props.cuatro}</div>
            <div className='Cinco'>{props.cinco}</div>
            <div className='Seis'>{props.seis}</div>
            <div className='Siete'>{props.siete}</div>
            </div>
        </div>
    )
    
};
Counter.propTypes = {
    uno: PropTypes.number,
    dos: PropTypes.number,
    tres: PropTypes.number,
    cuatro: PropTypes.number,
    cinco: PropTypes.number,
    seis: PropTypes.number,
    siete: PropTypes.number
    };


export default Counter;