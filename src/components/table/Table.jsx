import React, {useState} from 'react';
import './Table.scss';


import {SettingOutlined} from "@ant-design/icons";

const Table = (
    {
        title,
        createdAt,
        text

    }
) => {

    return (
        <table className="table">
            <tr>
                <th> Название</th>
                <th>Дата</th>
                <th> Текст</th>
                <th>Управление</th>
            </tr>
            <tr>
                <td>{title}</td>
                <td>Дата: ("{createdAt}")</td>
                <td>{text}</td>

                <td className="image-button" >
                    <SettingOutlined style={{ width: 100 }}/>
                </td>
            </tr>
        </table>
    );
};

export default Table;