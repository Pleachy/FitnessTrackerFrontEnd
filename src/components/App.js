import {React, useState, useEffect} from 'react';
import {Route, Link, UseHistory} from 'react-router-dom';

const {REACT_APP_API_URL = 'https://fitnesstrac-kr.herokuapp.com/api'} = process.env.REACT_APP_API_URL;

import {
    Activities
} from './';



const App = () => {
  
    const [token, setToken] = useState('');
    const [routines, setRoutines] = useState([]);

    const props = {
        REACT_APP_API_URL
    }

    return <>
    <div className="app-chicken">
      <h3>Welcome to fitness tracker!</h3>
      <div id="navbar">
                <Link to='/activities'>Activities</Link>
                
      </div>
      <Route exact path='/activities'>
        <Activities {...props}/>
      </Route>
    </div>
  </>
  }

  export default App;
