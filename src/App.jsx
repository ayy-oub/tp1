import React, { Component } from 'react';
import Header from "./Header";
import Header1 from "./Header1";
import Register from "./Register";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import Dashboard from './dashboard';
import Show from './Show';
import Find from './Find';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                    <Route exact path="/">
                        <Header />
                        <Home />
                    </Route>
                    <Route path="/signup">
                        <Header />
                        <Register />
                    </Route>
                    <Route path="/signin">
                        <Header />
                        <Signin />
                    </Route>
                    <Route path="/dashboard">
                        <Header1 />
                        <Dashboard />
                    </Route>
                    
                    <Route path="/show">
                        <Header1 />
                        <Show />
                    </Route>
                    
                    <Route path="/find">
                        <Header1 />
                        <Find />
                    </Route>
                    
                    
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;