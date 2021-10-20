import React from 'react';
import RenderActivities from './RenderActivities.js';

const RenderSingleRoutine = (props) => {
    const {routine} = props;
    const routineActivities = routine.activities;

    if (routine.isPublic) {
        return <>
            <h3>Name: {routine.name}</h3>
            <p>Created By: {routine.creatorName}</p>
            <p>Goal: {routine.goal}</p>
            <h4>Routine Activities</h4>
            {
                <RenderActivities activities={routineActivities}/>
            }
            <p>--------------------------------------------------------------------</p>
        </>
    } else {
        return <> </>
    }

}

//used in Routines.js to render one routine at a time
export default RenderSingleRoutine