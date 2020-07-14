import React from 'react'
import PropTypes from 'prop-types';

function Results(props) {
    console.log(props);
    return (
        <div className="results">
            {(!isNaN(props.props.current_km)) ?
                <p>Your current K/M is {props.props.current_km.toPrecision(2)}</p>
                : <span></span>}
            {(props.props.target_kills && props.props.target_matches && props.props.target_km) ?
                <div>
                    <p>You need <strong>{props.props.target_kills}</strong> kills in <strong>{props.props.target_matches}</strong> more match{props.props.target_matches > 1 ? <span>es</span> : <span></span>} to reach {props.props.target_km} K/M.</p>
                    <p>({(props.props.target_kills / props.props.target_matches).toPrecision(2)} kills/match)</p>
                </div>
                : <span></span>}
        </div>
    )
}

// Results.propTypes = {

// }

export default Results

