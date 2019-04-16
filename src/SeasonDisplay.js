import './SeasonDisplay.css';
import React from 'react';

const getSeason = (lat,month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	}else {
		return lat < 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const seasonConfig = {
		summer: {
			text: 'Lets go to the beach!',
			iconName: 'sun'
		},
		winter: {
			text: 'BUURRR It is chilly!',
			iconName: 'snowflake'
		}
	}

	const season = getSeason(props.lat,new Date().getMonth());
	const { text , iconName } = seasonConfig[season];
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
};
 
export default SeasonDisplay;