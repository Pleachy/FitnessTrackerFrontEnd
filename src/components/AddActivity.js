import React, {useState} from 'react';
const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;


const AddActivity = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const localToken = localStorage.getItem('Token');

    return <>
        <h4>Create a new activity</h4>
        <form onSubmit={async (event) => {
            event.preventDefault();

            await fetch(`${REACT_APP_API_URL}/activities`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localToken}`
                },
                body: JSON.stringify({
                    name,
                    description
                })
            }).then(response => response.json())
              .then(result => {
                  if (result.error) {
                      alert(result.message)
                  }
                  setName('');
                  setDescription('');
              }).catch(console.error);



        }}>
            <fieldset>
                <label>Enter Activity Name </label>
                <input type='text' placeholder='activity name' value={name}
                onChange={(event) => setName(event.target.value)}></input>
            </fieldset>
            <fieldset>
                <label>Enter Activity Description </label>
                <input type='text' placeholder='description' value={description}
                onChange={(event) => setDescription(event.target.value)}></input>
            </fieldset>
            <button type='submit'>Add Activity</button>
        </form>

    </>
}

//used in Activities.js to render the add activity form
export default AddActivity;