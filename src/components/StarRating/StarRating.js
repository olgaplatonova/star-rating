import React, {useEffect, useState} from 'react';
import Star from '../Star/Star';
import './StarRating.scss';

//создает массив и заполняет значениями
function initStars(totalStars, rating) {
    const starsData = new Array(totalStars);
    starsData.fill(true, 0, rating);
    starsData.fill(false, rating, totalStars);
    return starsData;
}

//Компонент с двумя аргументами
const StarRating = ({totalStars, rating}) => {
    const [arrStars, setArrStars] = useState(initStars(totalStars, rating));

    useEffect(() => console.log(arrStars), [arrStars]);

    const toggleStar = (index) => {
        setArrStars(initStars(totalStars, index + 1));
    }

    return (
        <>
            <div className={'stars__container'}>
            {arrStars.map((item, index) => (
                <Star key={index} selected={item} onclick={() => toggleStar(index)} />
            ))}
            <p>
                {arrStars.filter(elem => elem === true).length} of {totalStars} stars
            </p>
            </div>
        </>
    );
}

StarRating.propTypes = {};

export default StarRating;