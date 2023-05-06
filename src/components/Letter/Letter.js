import React from 'react';

import './Letter.css';




function Letter(props) {

    const [errorClassName, setErrorClassName] = React.useState('letter__mark letter__mark--type--error');
    const [okClassName, setOkClassName] = React.useState('letter__mark letter__mark--type--ok');

    React.useEffect(() => {
        setErrorClassName('letter__mark letter__mark--type--error');
        setOkClassName('letter__mark letter__mark--type--ok');

    }, [props.resetLetters]);


    function clickLetter () {
        if(props.word.split('').includes(props.text)) {

            setOkClassName('letter__mark letter__mark--active letter__mark--type--ok');
        }
        else {
            setErrorClassName('letter__mark letter__mark--active letter__mark--type--error');
        }
    }




    return ( 
        <li className="letter" onClick={function(){ clickLetter(); props.chooseLetter(props.text)}}>
            <p className="letter__text">{props.text}</p>
            <div className={errorClassName}></div>
            <div className={okClassName}></div>
        </li>
    );
}

export default Letter;