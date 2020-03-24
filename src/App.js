import React, { Component } from 'react'
import Todos from './Containers/Todos';
import Test from './Containers/Home';
import history from './utils/history';
import HelloWorld from './Containers/HelloWold';
import store from '../ConfigureStore';
import {Route, Switch, BrowserRouter as  Router, Link} from 'react-router-dom';
export default class App extends Component {
    render() {
        return (
            <Router history={history}>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/lazyload">lazyLoad</Link>
                </li>
                <li>
                  <Link to="/redux">redux</Link>
                </li>
              </ul>
              <hr />
              <Switch>
                <Route exact path="/">
                  <Test />
                </Route>
                <Route path="/lazyload">
                  <Todos />
                </Route>
                <Route path="/redux">
                  <HelloWorld tech= {store.getState().tech}/>
                </Route>
              </Switch>
            </div>
          </Router>
        )
    }
}

