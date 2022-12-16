import React from "react";

export default function Result(props) {
    if (props.definition) {
        return (
            <div className="container search">
                <h2 className="text-capitalize m-3">{props.definition.word}</h2>
            </div>
        )
    }
    else {
        return null;
    }
    
}