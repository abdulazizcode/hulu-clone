import React, {useState,useEffect} from "react";
import "./Results.css";
import VideoCard from "./VideoCard/VideoCard";
import axios from "../axios";
import requests from "../requests";

const Results = () =>{
    const [movies,setMovies] =useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchDocumentaries);
            console.log(request);
            setMovies(request.data.results);
            return requests;
        }
        fetchData();
    }, [])

    return(
        <div className="results">
           {movies.map((movie)=>(
            <VideoCard movie={movie}/>
           ))}
        </div>
    )
}

export default Results;