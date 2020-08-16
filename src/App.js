import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Users from './components/Users/Users';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="users">Users</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="users" component={Users}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
