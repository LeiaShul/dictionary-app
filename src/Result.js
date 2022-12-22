import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css"

export default function Result(props) {
    if (props.definition) {
        return (
            <div className="result">
                <div className="container search p-4">
                    <h2 className="text-capitalize">{props.definition.word}</h2>
                    {props.definition.phonetics.map(function (phonetic, index1) {
                        return <Phonetic key={index1} phonetic={phonetic} />
                    })}                
                </div>                
                {props.definition.meanings.map(function (meaning, index2) {
                    return <section key={index2}>
                        <div className="container search">
                            <Meaning meaning={meaning} />
                        </div>
                    </section>
                })}
                
                
            </div>
        )
    }
    else {
        return null;
    }
    
}