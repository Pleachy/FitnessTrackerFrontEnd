import React, {useState, useEffect} from 'react';

const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;

import FetchSingleActivity from './FetchSingleActivity.js';


const fetchActivities = (props) => {

    const {activities} = props;
    console.log("Activities in fetchActivities.js", activities);
    console.log("Activities length", activities.length)

    return <>
        {
            (activities.length > 0) ? activities.map(activity => (<div>foo</div>
            )) : <div>No Activities Yet</div>
        }
    </>

}

//used in Activities.js to get activities from the api
export default fetchActivities