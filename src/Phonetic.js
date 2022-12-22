import React from "react";

export default function Phonetic(props) {
    if (props.phonetic) {
        return (
            <div className="phonetic text-muted">{props.phonetic.text}</div>
        )
    }
    
}