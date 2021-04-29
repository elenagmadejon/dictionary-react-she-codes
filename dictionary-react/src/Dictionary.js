import React, { useState } from 'react';
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyWord] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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