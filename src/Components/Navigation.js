import React,{Component} from "react";
import { NavLink} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav>
            <ul>
                <li><NavLink exact strict activeClassName="current" to='/'>Home</NavLink></li>
                <li><NavLink exact strict activeClassName="current" to='/about'>About</NavLink></li>
                <li><NavLink exact strict activeClassName="current" to='/projects'>Projects</NavLink></li>
            </ul>
            </nav>
        )
    }
}

export default Navigation