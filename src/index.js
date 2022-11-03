import React from "react"
import ReactDOM from "react-dom"
import Search from "./Search"
import "./index.css"

function Hello(){
    return(
        <Search />
    )
}

ReactDOM.render(<Hello />, document.getElementById("root"))