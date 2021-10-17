import React from 'react';
import RenderSingleRoutine from './RenderSingleRoutine.js';


const Routines = (props) => {
    const {routines} = props;

    return <>
        <h3>Routines</h3>
        {
            routines.map(routine => (<RenderSingleRoutine key={routine.id} routine={routine}/>))
        }
    </>
}

//used in App.js to map through routines and render them
export default Routines;