import React from 'react';
import { 
        BrowserRouter as Router,
        Route,
        Link,
        Redirect,
        Switch } from 'react-router-dom';
import GamesView from './components/gamesview/GamesView.js';
import GameElementView from './components/gamesview/GameElementView.js';
//https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50
const Routes = () => (
    <Router>
        <div>
            <Switch>
                <Redirect from="/" exact to="/games"/>
                <Route path="/games/:id" component={GameElementView}/>
                <Route path="/games" component={GamesView}/>
            </Switch>
        </div>
    </Router>
)

export default Routes;
