import React, { Component } from 'react'
import Header from './layouts/header/header';
import Home from './pages/home/home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Articles from './pages/articles/articles';

class App extends Component {
    render() {
        return (
            <div>


                <Router>
                    <Header />
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/articles" component={Articles} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;