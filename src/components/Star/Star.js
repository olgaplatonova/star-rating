import React from 'react';
import {FaStar} from 'react-icons/fa';

const Star = ({selected, onclick}) => {
    return (
        <>
            <FaStar color={selected ? '#FFC042' : '#75D1FF'} onClick={onclick} size={35}/>
        </>
    );
}

Star.propTypes = {};

export default Star;