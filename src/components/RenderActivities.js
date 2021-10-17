import React from 'react';
import RenderSingleActivity from './RenderSingleActivity.js';


const RenderActivities = (props) => {
    const {activities} = props;

    return <>
        {
            (activities.length > 0) ? activities.map(activity => (<RenderSingleActivity key={activity.id} activity={activity}/>
            )) : <div>No Activities Yet</div>
        }
    </>
}

//used in Activities.js to render all the activities
export default RenderActivities