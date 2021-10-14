import React, {useState, useEffect} from 'react';
const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;


import FetchActivities from './FetchActivities.js';

const Activities = (props) => {

    const [activities, setActivities] = useState([]);

    console.log("Activities in Activities.js", activities)

    const fetchActivitiesFunction = async () => {
        await fetch(`${REACT_APP_API_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
          }).then(response => response.json())
            .then(result => {
                if(result) {
                    console.log("This is the result", result);
                    setActivities(result);
                }
          })
            .catch(console.error);
    }

    useEffect(() => {
        fetchActivitiesFunction();
    },[])

    return <>
        <h3>Activities</h3>
        <FetchActivities activities={activities} />
    </>

}

//used in App.js to display Activity browser page
export default Activities