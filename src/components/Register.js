import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();


    return <>
       <h2>Register Page</h2>
       <form onSubmit={async (event) => {
                event.preventDefault();

                const response = await fetch(`${REACT_APP_API_URL}/users/register`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password   
                    })
                }).then(response => response.json())
                  .then(result => {
                      if (result) {
                        console.log("REGISTER RESULT", result);
                        //setToken(result.data.token);
                        setUsername('')
                        setPassword('')
                        alert('Thank you for signing up!');
                        //history.push('/login');
                      } else {
                          setUsername('')
                          setPassword('')
                          alert('That username already exists, please try another one.')
                      }

                  })
                  .catch(console.error);
            }}>
                <div>
                    <label>Enter Username: </label>
                    <input type='text' placeholder='username' value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Enter Password: </label>
                    <input type='password' placeholder='password' value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
                <button type='submit'>Register!</button>
            </form>
    </>
}

export default Register;