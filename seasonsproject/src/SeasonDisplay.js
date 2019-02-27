import React from 'react';
// Get access to SeasonDisplay.css
import './SeasonDisplay.css'

const seasonConfig = {
    summer: {
        text: " Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr, It's cold.",
        iconName: "snowflake"
    }
};

const getSeason = (lat, month) =>{
    if (month > 2 && month < 9 ) {
        return lat > 0 ? 'summer' : 'winter';
    } else{
        return lat > 0 ? 'winter' : 'summer';
    }
};


const SeasonDisplay = (props) => {
    //console.log(props.lat);
    const season = getSeason(props.lat, new Date().getMonth());

    // const text = season === 'winter' ? 'Burr, its chilly!' : 'Go to the beach!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    
    //Destucture out attributes
    const {text,iconName} = seasonConfig[season];

    return (
    <div className = {`season-display ${season}`}> 
        <i className = {` icon-left massive ${iconName} icon`}/>
        <h1>{text} </h1>
        <i className = {` icon-right massive ${iconName} icon`}/>
    </div>
    );
};

export default SeasonDisplay;
