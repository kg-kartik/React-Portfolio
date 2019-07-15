import React, {Component} from "react"
import Main from './Components/Main'
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import './App.css'

class App extends Component
{
  render(){
    return(
      <div>
      <Navigation />  
      <Main />
      </div>
    )
  }
}
export default App