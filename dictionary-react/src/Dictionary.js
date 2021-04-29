import React, { useState } from 'react';
import "./Dictionary.css";
import Axios from "axios";
import Results from "./Results.js"

export default function Dictionary(){
    let [keyword, setKeyWord] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        Axios.get(apiUrl).then(handleResponse)
    }

        function handleKeywordChange(event){
            console.log(event.target.value);
            setKeyWord(event.target.value);
        }
    

    return (
        <div className="Dictionary">
             <form onSubmit={search}>
                <label>
                    What are you searching for?
                </label>
                 <input id="search-box"class ="form-control input-lg" type="search" onChange ={handleKeywordChange} autofocus={true} placeholder="Type here..."/>
             </form>
             <Results results={results} />
        </div>
    )
   
}