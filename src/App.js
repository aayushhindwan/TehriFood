import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import NavBar from './components/nav'
import Home from './components/home'
import Practice from './components/practice'
import Doubts from './components/doubts'
import Questions from "./components/questions"
import Profile from './components/profile'
import Menu from './components/menu'
import LandingPage from './components/landingPage'
import {useSelector} from 'react-redux'
import Login from './components/login'
import Signup from './components/signup'
import Footer from './components/footer'
function App() {
 const store = useSelector(state => state.story.name)
  console.log(store);

  return (
    <div className="App">
      <NavBar />
      <br/>
      <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path = '/Restaurant/:id' component = {Menu}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
