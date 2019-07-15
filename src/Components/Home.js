import React, {Component} from "react"
import about from './about.jpg'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

class Home extends Component {
    render() {
        return (
            <div>
                <img src={about} alt="logo" />
                <div className="header">
                <h1 className="home"> Kartik Goel</h1>
                <p> WEB DEVELOPER | TECH LOVER | WRITER </p>
                <div className="icons">
                <a href="https://www.instagram.com/_kg_kartik/" target="_blank"><span><i class="fa fa-instagram" ></i></span> </a>
                <a href="https://www.linkedin.com/in/kartik-g-7b5790131/" target="_blank"><span><i class="fa fa-linkedin-square"></i> </span>  </a>
                <a href="https://www.facebook.com/kartik.goel.5811" target="_blank"><span><i class="fa fa-facebook-official"></i></span>  </a>
                <a href="https://github.com/kg-kartik" target="_blank"><span><i class="fa fa-github"></i></span>  </a>
                <a href="https://twitter.com/KartikG28281327" target="_blank"><span><i class="fa fa-twitter-square" ></i> </span> </a>
                </div>
                </div>
            </div>  
        )
    }
}
export default Home 