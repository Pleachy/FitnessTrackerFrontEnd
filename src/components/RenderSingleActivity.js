import React from 'react';

const RenderSingleActivity = ({activity}) => {
    return <>
    <h3>{activity.name}</h3>
    <p>{activity.description}</p>
    </>
}

//used in Render activities to render one activity at a time
export default RenderSingleActivity;