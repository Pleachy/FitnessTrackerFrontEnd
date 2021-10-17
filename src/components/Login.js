import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;


const Login = (props) => {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const {setToken} = props
        const history = useHistory();
        //let localToken = '';

        return <div>
            <h2>Login</h2>
            <form onSubmit={async (event) => {
                event.preventDefault();
                await fetch(`${REACT_APP_API_URL}/users/login`, {
                    method: "POST",
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        password
                    })
                }).then(response => response.json())
                    .then(result => {
                    if (!result.error) {
                        console.log("RESULT OF LOGGING IN", result)
                        setToken(result.token);
                        localStorage.setItem('Token', result.token);
                        setUsername('')
                        setPassword('')
                        alert(result.message);
                        history.push('/');
                    }else {
                        alert('Invalid username or password, If you don\'t have an account, use the register link to make one');
                        setUsername('');
                        setPassword('');
                    }
                    })
                    .catch(console.error);

                // await fetch(`${REACT_APP_API_URL}/users/me`, {
                //   headers: {
                //     'Content-Type': 'application/json',
                //     'Authorization': `Bearer ${localToken}`
                //   },
                // }).then(response => response.json())
                //   .then(result => {
                //     setUser(result.data);
                //   })
                //   .catch(console.error);


            }}>
                <div>
                    <label>Enter Username:</label>
                    <input type='text' name='password' value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>
                <div>
                    <label>Enter Password:</label>
                    <input type='password' name='password' value={password}
                    onChange={(event) => setPassword(event.target.value) }></input>
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>
}


export default Login