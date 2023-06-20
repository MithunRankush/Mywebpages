
import './App.css';
import React from 'react';
import LoginForm from './components/Loginform';
import Resetpass from './components/Resentpass';
import Signup from './components/Signup';
import Home from './components/Home';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Signup1 from './components/Signup1';
function App() {
  return (
    // <div>
    //  <Signup1></Signup1>
    // </div>
    <Router>
    <div>
<Switch>
<Route exact path="/signup"><Signup/></Route>
<Route exact path="/"><LoginForm/></Route>
<Route exact path="/forgot"><Resetpass/></Route>
<Route exact path="/home"><Home/></Route>
</Switch>
    </div>
</Router>
  );
}

export default App;
