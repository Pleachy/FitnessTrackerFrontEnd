import React, {useState, useEffect} from 'react';
const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;

import RenderActivities from './RenderActivities.js';
import AddActivity from './AddActivity.js';

const Activities = (props) => {

    const [activities, setActivities] = useState([]);
    const localToken = localStorage.getItem('Token');

    console.log("Activities in Activities.js", activities)

    const fetchActivitiesFunction = async () => {
        await fetch(`${REACT_APP_API_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
          }).then(response => response.json())
            .then(result => {
                if(result) {
                    setActivities(result);
                }
          })
            .catch(console.error);
    }

    useEffect(() => {
        fetchActivitiesFunction();
    },[])

    return <>
        <h2>Activities List</h2>
        {localToken ? <AddActivity/> : <p>(Resgister and Login to make your own activities!)</p>}
        <RenderActivities activities={activities} />
    </>

}

//used in App.js to display Activity browser page
export default Activities