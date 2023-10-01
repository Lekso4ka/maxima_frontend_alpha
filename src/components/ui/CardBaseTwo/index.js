import React from 'react';
import './style.scss';


const CardBaseTwo = ({
    img,
    title,
    desc,
    date

                  }) => {
    return (
        <div className="card">
            <h2>{title}</h2>


            <img  alt={"картинка"}  src={img}/>
            <p> <h4>дата: {date}</h4> </p>
            <a href="#" className="read-more">Читать далее</a>

        </div>

    );
};

export default CardBaseTwo;