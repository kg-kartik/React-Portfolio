import React , {Component} from "react"
import About from "./About"
import Projects from "./Projects"
import Home from "./Home"

import {Route,Switch} from "react-router-dom"

class Main extends Component {
    render(){
        return (
            <Switch>
                <Route exact strict path ='/' component ={Home}></Route>
                <Route exact strict path='/about' component={About}></Route>
                <Route exact strict path='/projects' component={Projects}></Route>
            </Switch>
        )
    }
}
export default Main