import React from "react";
import "./jumbo.css"

// jumbotron component with back to top function
const Jumbotron = (props) => {
    return (
        <div className="jumbotron sticky-top bg-dark text-white">
            <h1>Employee Directory</h1>
            <button onClick={() => props.toTop()} type="button" class="btn btn-outline-light">Back to Top</button>
        </div>
    )
}

export default Jumbotron;