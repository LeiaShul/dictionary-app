import React from "react";

export default function Photos(props) {
    if (props.photos.length) {
        return (
            <div className="container search shadow p-4">
                <div className="row">
                    {props.photos.map(function (photo, index4) {
                        return (
                            <div key={index4} className="col-4 p-2" >
                                <a href={photo.url} target="_blank" rel="noopener noreferrer">
                                    <img src={photo.src.landscape} alt={photo.photographer} className="img-fluid rounded" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else {
        return null;
    }
    
}