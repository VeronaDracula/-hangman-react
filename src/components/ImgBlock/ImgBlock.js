import React from 'react';

import './ImgBlock.css';



function ImgBlock(props) {

    const imgClassName = (
        `hangman-img image${props.stepCount - 1}`
    );


    return ( 
        <div className="top-block">
            <div className={imgClassName}>
            </div>
        </div>
    );
}

export default ImgBlock; 