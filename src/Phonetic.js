import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
    if (props.phonetic) {
        return (
            <div className="phonetic">
                <div className="text-muted fs-3 text-center text-sm-start row flex-wrap-reverse">
                    <ReactAudioPlayer src={props.phonetic.audio} controls className="col-sm-8 pb-2" />
                    <span className="col p-0">{props.phonetic.text} </span>
                </div>
                
            </div>           
        )
    }
    
}