import React from 'react';
import {
    BrowserRouter as Router, Route,
    Switch
} from 'react-router-dom';
import Navigation from './components/Navigation';
import './Index.css';
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
    return (<>

        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </Router>


        </>);
};

export default App;