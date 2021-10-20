import React from 'react';

const RenderSingleActivity = ({activity}) => {
    return <>
    <h3>Activity Name: {activity.name}</h3>
    <p>Description: {activity.description}</p>
    </>
}

//used in Render activities to render one activity at a time
export default RenderSingleActivity;