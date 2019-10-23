import React, { Component } from 'react'
import Header from './layouts/header/header';
import Home from './pages/home/home';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        )
    }
}

export default App;