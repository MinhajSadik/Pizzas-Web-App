import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Index.css';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
    return (<>

        <Router>
            <Switch>
                <Route path="/" component={Home}></Route>
                <Route path="about" component={About}></Route>
            </Switch>
        </Router>


        </>);
};

export default App;