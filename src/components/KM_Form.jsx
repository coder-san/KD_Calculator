//jshint esversion:8
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Results from './Results';

function KM_Form(props) {
    const [current_kills, setCurrentKills] = useState();
    const [current_matches, setCurrentMatches] = useState();
    const [current_km, setCurrentKM] = useState();
    const [target_km, setTargetKM] = useState();
    const [target_matches, setTargetMatches] = useState(1);
    const [target_kills, setTargetKills] = useState();

    const onCurrentKillsChange = (event) => {
        let value = event.target.value;
        console.log("Current kills changed to " + value);
        setCurrentKills(parseInt(value));
    };

    const onCurrentMatchesChange = (event) => {
        let value = event.target.value;
        console.log("Current matches changed to " + value);
        setCurrentMatches(parseInt(value));
    };

    const onTargetKMChange = (event) => {
        let value = event.target.value;
        console.log("TargetKM changed to " + value);
        setTargetKM(parseInt(value));
    };

    const onTargetMatchesChange = (event) => {
        let value = event.target.value;
        console.log("Target matches changed to " + value);
        setTargetMatches(parseInt(value));
    };

    useEffect(() => {
        //calculate kills needed to get to final K/M
        console.log("Calculating kills needed");
        setCurrentKM((current_kills / current_matches).toFixed(2));
        let kills_needed = (target_km * (current_matches + target_matches)) - current_kills;
        setTargetKills(kills_needed);
    }, [current_kills, current_matches, target_km, target_matches]);

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="current_matches">Current matches</label>
                    <input type="number" onChange={onCurrentMatchesChange} value={current_matches} name="current_matches" id="current_matches" className="form-control" placeholder="current_matches" aria-describedby="current_matches_help" />
                    {/* <small id="current_matches_help" className="text-muted">Current matches on which K/M is to be calculated</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="current_kills">Current kills</label>
                    <input type="number" onChange={onCurrentKillsChange} value={current_kills}
                        className="form-control" name="current_kills" id="current_kills" aria-describedby="current_kills_help" placeholder="current kills" />
                    {/* <small id="current_kills_help" className="form-text text-muted">Current number of kills</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="target_km">Target K/M</label>
                    <input type="number" onChange={onTargetKMChange}
                        className="form-control" name="target_km" value={target_km} id="target_km" aria-describedby="target_km_help" placeholder="Your target K/M" />
                    {/* <small id="target_km_help" className="form-text text-muted">Your target K/M</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="target_matches">Target matches</label>
                    <input type="number" onChange={onTargetMatchesChange}
                        className="form-control" name="target_matches" value={target_matches} id="target_matches" aria-describedby="target_matches_help" placeholder="Number of matches to reach target" />
                    {/* <small id="target_matches_help" className="form-text text-muted">Number of matches you wish to reach the target K/M in.</small> */}
                </div>
            </form>
            <Results
                props={{
                    current_matches: current_matches,
                    current_kills: current_kills,
                    current_km: current_km,
                    target_kills: target_kills,
                    target_km: target_km,
                    target_matches: target_matches
                }} />
        </div>
    )
}

// KM_Form.propTypes = {
// }

export default KM_Form

