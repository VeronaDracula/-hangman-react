import React from 'react';

import './LettersField.css';


import {alphabet} from '../../utils/data.js';

import Letter from '../Letter/Letter.js';
import TopicOverlay from '../TopicOverlay/TopicOverlay.js';
import GameOver from '../GameOver/GameOver.js';



function LettersField(props) {



    return ( 
        <div className="letters-fields">

                <GameOver gameStatus={props.gameStatus} gameResult={props.gameResult} 
                                                        handleClickNewTopic={props.handleClickNewTopic} 
                                                        handleClickСontinue={props.handleClickСontinue}></GameOver>

                <TopicOverlay newTopic={props.newTopic} topicStatus={props.topicStatus}></TopicOverlay>

                <ul className="letters">
                {alphabet.map((letter, index) => (<Letter letter={letter}
                                                    text={letter}
                                                    key={index}
                                                    word={props.word}
                                                    resetLetters={props.resetLetters}
                                                    chooseLetter={props.chooseLetter}
                                            />)
                                            )}
                </ul>
            </div>
    );
}

export default LettersField; 