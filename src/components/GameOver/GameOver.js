import React from 'react';

import './GameOver.css';




function GameOver(props) {

    const gameOverClassName = (
        `${props.gameStatus ? 'letters-overlay letters-overlay_inactive' : 'letters-overlay'}`
    );


    return ( 
        <div className={gameOverClassName}>
            <p className="letters-overlay__text">{props.gameResult}</p>
            <div className="letters-overlay__btns">
                <button className="letters-overlay__btn" onClick={props.handleClickNewTopic}>Новая
                            тема</button>
                <button className="letters-overlay__btn" onClick={props.handleClickСontinue}>Продолжить</button>
            </div>
        </div>
    );
}

export default GameOver;