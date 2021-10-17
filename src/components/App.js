import {React, useState, useEffect} from 'react';
import {Route, Link, useHistory} from 'react-router-dom';

const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;

import {
    Activities,
    Register,
    Login,
    Routines
} from './';

const App = () => {
  
    const [token, setToken] = useState('');
    const [routines, setRoutines] = useState([]);
    const history = useHistory();

    const fetchRoutines = async() => {
      await fetch(`${REACT_APP_API_URL}/routines`, {
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => response.json())
        .then(result => {
          console.log("FETCH ROUTINES RESULT (app.js)", result);
          setRoutines(result);
        }).catch(console.error);
    }

    useEffect(() => {
      fetchRoutines();
    },[token])

    useEffect(() => {
      const localToken = localStorage.getItem('Token');
      if (localToken) {
        setToken(localToken);
      }
    },[])


    return <>
    <div className="app-chicken">
      <h3>Welcome to fitness tracker!</h3>
      <div id="navbar">
                <Link to='/activities'>Activities </Link>
                <Link to='/routines'>Routines</Link>
                {!token ? <Link to='/register'>Register </Link> : null}
                {!token ? <Link to='/login'>Login</Link> : null}
                {token ? <button onClick={() => {
                    alert("You have successfully logged out")
                    setToken('')
                    localStorage.removeItem('Token')
                    history.push('/')
                }}>Logout</button> : null }
      </div>
      <Route exact path='/activities'>
        <Activities/>
      </Route>
      <Route exact path='/register'>
        <Register/>
      </Route>
      <Route exact path='/login'>
        <Login setToken={setToken}/>
      </Route>
      <Route exact path='/routines'>
        <Routines routines={routines}/>
      </Route>
    </div>
  </>
  }

  //used in app to fetch and then render all activities
  export default App;
