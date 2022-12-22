import React from "react";

export default function Meaning(props) {
    if (props.meaning) {
        return (
            <div className="p-4">
                <h3 className="my-3">{props.meaning.partOfSpeech}</h3>
                {props.meaning.definitions.map(function (definition, index3) {
                    return (
                        <div key={index3}>                           
                            <p className="meaning mb-1">{definition.definition}</p>
                            <p className="italic mb-4">{definition.example}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    
}