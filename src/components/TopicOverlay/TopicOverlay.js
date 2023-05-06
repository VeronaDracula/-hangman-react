import React from 'react';

import {wordsTopic} from '../../utils/data.js';

import './TopicOverlay.css';



import Topic from '../Topic/Topic.js';


function TopicOverlay(props) {

    const lettersOverlaClassName = (
        `${props.topicStatus ? 'letters-overlay letters-overlay_inactive' : 'letters-overlay'}`
    );


    return ( 
        <div className={lettersOverlaClassName}>
            <div className="topic">
                <h2 className="topic__title">Выберите тему</h2>

                <ul className="topic__list">
                {wordsTopic.map((topic) => (<Topic topic={topic}
                                                    name={topic.name}
                                                    key={topic.id}
                                                    list={topic.list}
                                                    newTopic={props.newTopic}
                                            />)
                                            )}
                </ul>
            </div>
        </div>
    );
}

export default TopicOverlay; 