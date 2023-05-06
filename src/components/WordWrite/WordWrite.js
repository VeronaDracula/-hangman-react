import React from 'react';

import './WordWrite.css';




function WordWrite(props) {


    const letterClassName = (
        `${!props.letterStatus  ? 'word-write__text' : 'word-write__text word-write__text_active'}`
    );


    return ( 
        <li className="word-write__letter">
            <p className={letterClassName}>{props.letter}</p>
        </li>
    );
}

export default WordWrite; 