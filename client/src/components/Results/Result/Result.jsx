import React from 'react';

import './Result.css';

export default function Result(props) {
    const title = props.document.original_title || '<NO TITLE>'; 
    
    return(
    <div className="card result">
        <a href={`/details/${props.document.id}`}>
            <img className="card-img-top" src={props.document.image_url} alt={props.document.original_title}></img>
            <div className="card-body">
                <h6 className="title-style">{title}</h6>
            </div>
        </a>
    </div>
    );
}
