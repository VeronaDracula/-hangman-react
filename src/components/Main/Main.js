import React from 'react';

import './Main.css';

import ImgBlock from '../ImgBlock/ImgBlock.js';
import WordWriteBox from '../WordWriteBox/WordWriteBox.js';
import LettersField from '../LettersField/LettersField.js';





function Main(props) {

    const [topic, setTopic] = React.useState('');
    const [wordsList, setWordsList] = React.useState([]);
    const [topicStatus, setTopicStatus] = React.useState(false);

    const [word, setWord] = React.useState('');
    const [openLetters, setOpenLetters] = React.useState([]);
    const [resetLetters, setResetLetters] = React.useState(false);

    const [gameStatus, setGameStatus] = React.useState(true);
    const [gameResult, setGameResult] = React.useState('');

    const [stepCount, setStepCount] = React.useState(1);
    const [stepCountRight, setStepCountRight] = React.useState(1);

    

    React.useEffect(() => {

    }, [wordsList]);

    function arrayRandElement(arr) {
        const rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    function newTopic (newList, newTopic) {
        setWordsList(newList);
        setTopicStatus(true);
        setTopic(newTopic);

        setWord(arrayRandElement(newList));
    }


    function chooseLetter(letter) {
        if(word.split('').includes(letter)) {

            setOpenLetters([...openLetters, letter]);
            let count = 0;
            word.split('').forEach(word1 => {
                if(word1 === letter) {
                    count += 1;
                }
            })

            setStepCountRight(stepCountRight + count);

            if (word.length === stepCountRight) {
                setGameStatus(false);
                setGameResult('Вы победили');
            }
        }

        else {

            if (stepCount < 7) {
                setStepCount(stepCount + 1);
            }

            if (stepCount === 7) {
                setStepCount(stepCount + 1);
                setGameStatus(false);
                setGameResult('Вы проиграли');
                setOpenLetters(word.split(''))
            }
        }
    }

    function handleClickNewTopic() {
        setGameStatus(true);
        setTopicStatus(false);
        setOpenLetters([]);
        setStepCountRight(1);
        setStepCount(1);

        if(resetLetters === true) {
            setResetLetters(false);
        } else {
            setResetLetters(true);
        }
    }

    function handleClickСontinue() {
        setWord(arrayRandElement(wordsList));
        setGameStatus(true);
        setOpenLetters([]);
        setStepCountRight(1);
        setStepCount(1);

        if(resetLetters === true) {
            setResetLetters(false);
        } else {
            setResetLetters(true);
        }
    }



    return ( 
        <main className = "content">
            <p className="title-topic">Тема: {topic}</p>

            <ImgBlock stepCount={stepCount}></ImgBlock>

            <WordWriteBox word={word} openLetters={openLetters}></WordWriteBox>

            <LettersField newTopic={newTopic} 
                            topicStatus={topicStatus} 
                            gameStatus={gameStatus} 
                            gameResult={gameResult} 
                            word={word} 
                            chooseLetter={chooseLetter}
                            resetLetters={resetLetters}
                            handleClickNewTopic={handleClickNewTopic}
                            handleClickСontinue={handleClickСontinue}></LettersField>
        </main>
    );
}

export default Main;