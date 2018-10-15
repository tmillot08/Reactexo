import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import CreateComponent from './components/CreateComponent';
import EditComponent from './components/EditComponent';
import IndexComponent from './components/IndexComponent';
import ProjectComponent from './components/ProjectComponent';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Panel Admin</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Gestionnaire</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Liste Utilisateur</Link>
              </li>
              <li className="nav-item">
                <Link to={'/project'} className="nav-link">Liste Projet</Link>
              </li>
              <li className="nav-item">
                <Link to={'/edit/:id'} className="nav-link">Edit</Link>
              </li>
            </ul>
          </div>
        </nav>
          <Switch>
              <Route exact path='/create' component={CreateComponent} />
              <Route path='/edit/:id' component={EditComponent} />
              <Route path='/index' component={IndexComponent} />
              <Route path='/project' component={ProjectComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
