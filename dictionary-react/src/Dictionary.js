import React, { useState } from 'react';
import "./Dictionary.css";
import Axios from "axios";

export default function Dictionary(){
    let [keyword, setKeyWord] = useState("");

    function handleResponse(response){
        console.log(response);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);

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
        </div>
    )
   
}