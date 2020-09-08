import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Header/Nav/Nav";
import Results from "./components/Header/Results/Results";

const App = () =>{
    return(
        <div className="app">
            <Header/>
            <Nav/>
            <Results/>
        </div>
    )
}

export default App;