import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const CardBase = ({
    img,
    title,
    desc,

                  }) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={img} />}
        >
            <Meta title={title}
                  description={desc}

            />
        </Card>
    );
};

export default CardBase;