import React from 'react';
import {
    BrowserRouter as Router, Route,
    Switch
} from 'react-router-dom';
// import About from './pages/About';
import Cart from './Cart';
import Navigation from './components/Navigation';
import './Index.css';
import Home from './pages/Home';
import Products from './pages/Products';

const App = () => {
    return (<>

        <Router>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route path="/about" component={About}/> */}
                <Route path="/products" component={Products}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </Router>


        </>);
};

export default App;