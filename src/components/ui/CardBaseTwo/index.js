import React from 'react';
import './style.scss';


const CardBaseTwo = ({
    img,
    title,
    text,
    date

                  }) => {
    return (
        <div className="card">
            <h2>{title}</h2>


            <img   src={img} alt={"картинка"} />
            <p> <h4>дата: {date}</h4> </p>
            <p>{text}</p>

            <button href="#" className="read-more">Читать далее</button>

        </div>

    );
};

export default CardBaseTwo;