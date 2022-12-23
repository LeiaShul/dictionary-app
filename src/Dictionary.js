import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Result from "./Result";

export default function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [definition, setDefinition] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);        
    }
    function load() {
        setLoaded(true);
        search();
    }
    
    function handleResponse(response) {
        setDefinition(response.data[0]);      
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function handleKeywordChange(event) {
        event.preventDefault();
        setKeyword(event.target.value);
    }

    if (loaded) {
        return (
            <div className="dictionary">
                <header className="text-center">
                    <h1 className="header">Dictionary</h1>
                </header>
                <div className="container search p-4">
                    <form onSubmit={handleSubmit}>
                        <label className="question">What word do you want to look up?</label>
                        <div className="row p-2">
                            <div className="col-md-11 col-10 p-0">
                                <input onChange={handleKeywordChange} defaultValue={props.defaultKeyword} className="form-control form-control-lg" type="search"></input>
                            </div>
                            <div className="col-1 px-1">
                                <button type="submit" className="search-button">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                        <div className="example text-muted">
                            i.e. paris, wine, yoga, coding
                        </div>                        
                    </form>
                </div> 
                <Result definition={definition} />
            </div>
        )
    }
    else {
        load();
        return "loading";
    }
}