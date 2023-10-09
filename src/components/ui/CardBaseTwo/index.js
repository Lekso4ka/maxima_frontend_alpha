import React from 'react';
import './style.scss';


const CardBaseTwo = ({
                         titleImage,
                         title,
                         text,
                         createdAt

                     }) => {
    return (
        <div className="card">
            <h2>{title}</h2>


            <img src={titleImage} alt={"картинка"}/>
            <p><h4>Дата: ("{createdAt}")</h4></p>
            <p>{text}</p>

            <button href="#" className="read-more">Читать далее</button>

        </div>

    );
};

export default CardBaseTwo;