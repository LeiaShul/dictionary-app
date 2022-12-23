import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
    if (props.phonetic) {
        return (
            <div className="phonetic">
                <div className="text-muted fs-3 row">
                    <ReactAudioPlayer src={props.phonetic.audio} controls className="col-8 col-md-5 pb-2" />
                    <span className="col p-0">{props.phonetic.text} </span>
                </div>
                
            </div>           
        )
    }
    
}