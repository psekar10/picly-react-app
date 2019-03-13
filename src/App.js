import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
//import logo from './logo.svg';
import Movies from './services/movies';
import Customer from './services/customer';
import Rentals from './services/rentals';
import Notfound from './services/notfound';
import NavBar from './services/navbar';
import './App.css';

class App extends Component {
  render() {


    return (
 	  <React.Fragment>
	      <NavBar />
	      <main className="container">
	      <Switch>
			<Route path="/movies" component={Movies} />
			<Route path="/customer" component={Customer} />
			<Route path="/rentals" component={Rentals} />
			<Route path="/notfound" component={Notfound} />
			<Redirect from="/" exact to="/movies" />
			<Redirect to="/notfound" />
		  </Switch>
	      </main>
 	  </React.Fragment>
  
    );
  }
}

export default App;
