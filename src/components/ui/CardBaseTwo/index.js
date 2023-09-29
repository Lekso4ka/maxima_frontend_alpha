import React from 'react';
import '../../../assets/image/02.png';
import './style.scss';

const CardBaseTwo = ({
    img,
    title,
    desc,
    data

                  }) => {
    return (
        <div className="card">
            <h2>{title}</h2>


            <img  alt={"картинка"}  src={img}/>
            <p> <h4>дата: {data}</h4> </p>
            <a href="#" className="read-more">Читать далее</a>

        </div>

    );
};

export default CardBaseTwo;