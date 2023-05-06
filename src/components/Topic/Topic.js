import React from 'react';

import './Topic.css';





function Topic(props) {


    function chooseTopic() {
        props.newTopic(props.list, props.name);
    }


    return ( 
        <li className="topic__item" onClick={chooseTopic}>{props.name}</li>
    );
}

export default Topic; 