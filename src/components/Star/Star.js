import React from 'react';
import {FaStar} from 'react-icons/fa';

const Star = ({selected, onclick}) => {
    return (
        <>
            <FaStar color={selected ? 'red' : 'grey'} onClick={onclick} size={40}/>
        </>
    );
}

Star.propTypes = {};

export default Star;