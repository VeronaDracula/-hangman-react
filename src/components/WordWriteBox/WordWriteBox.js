import React from 'react';

import './WordWriteBox.css';


import WordWrite from '../WordWrite/WordWrite.js';



function WordWriteBox(props) {



    return ( 
        <ul className="word-write">
            
            {props.word.split('').map((letter, index) => {
                let status = false;
                if(props.openLetters.includes(letter)) {
                    status = true;
                }

                return (<WordWrite letter={letter} 
                                    key={index} 
                                    clickLetter={props.clickLetter} 
                                    letterStatus={status}></WordWrite>)

            })}
        </ul>
    );
}

export default WordWriteBox; 