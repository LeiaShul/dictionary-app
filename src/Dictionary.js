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
      //  console.log(response.data[0]);
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
                    <h1 className="display-3">Dictionary</h1>
                </header>
                <div className="container search">
                    <form onSubmit={handleSubmit}>
                        <label className="m-3 display-5 fs-2">What word do you want to look up?</label>
                        <div className="row">
                            <div className="col-11">
                                <input onChange={handleKeywordChange} className="form-control mx-2" type="search"></input>
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-outline-light mx-0">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </div>
                        </div>
                        <div className="example ms-3 text-muted">
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