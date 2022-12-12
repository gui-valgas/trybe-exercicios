import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'
import StrictAccess from './StrictAcess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">| Home | </Link>
          <Link to="about"> About | </Link>
          <Link to="users"> Users | </Link>
          <Link to="/strict-access">Strict Access | </Link>
        </nav>
        <Switch>
          <Route
            path="/users/:id"
            render={(props) => <Users {...props} greetingMessage="Good Morning" />}
          />
          <Route
            path="/strict-access"
            render={() => (
              <StrictAccess user={{ username: 'joao', password: '1234' }} />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
