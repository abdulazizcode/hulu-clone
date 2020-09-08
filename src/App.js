import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Header/Nav/Nav";
import Results from "./components/Header/Results/Results";
import requests from "./components/Header/requests";
const App = () =>{
    const [selectedOption, setSelectedOption] = useState(requests.fetchTranding);

    return(
        <div className="app">
            <Header/>
            <Nav setSelectedOption={setSelectedOption}/>
            <Results selectedOption={selectedOption}/>
        </div>
    )
}

export default App;