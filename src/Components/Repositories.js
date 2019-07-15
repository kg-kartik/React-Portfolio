import React from "react"

const Repositories = (props) => (

    <div className="repo">
        <h1 className="repo-title"> {props.title} </h1>
        <p className="repo-desc"> {props.description} </p>
        <a href={props.url} target="_blank"><button className="button github"> Github</button> </a>
    </div>
)
export default Repositories