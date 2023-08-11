import React from 'react'
import Home from './pages/Home page/Home'
import Profile from './pages/profile/Profile'
//import Login from './pages/login/Login'
//import Register from './pages/register/Register';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} /> {/* Add the Profile route */}
        {/* Add other routes for different pages */}
      </Switch>
    </Router>
  )
}

export default App;