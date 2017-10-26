import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Home, Portfolio, Resume } from './pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
require('../styles/main.css')

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
