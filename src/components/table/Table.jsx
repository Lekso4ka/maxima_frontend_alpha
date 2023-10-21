import React, {useState} from 'react';
import './Table.scss';
import {CheckOutlined} from "@ant-design/icons";
import '../../assets/date/news.json'

import {SettingOutlined} from "@ant-design/icons";

const Table = (
    news
) => {

    return (
        <table className="table">
            <tr>
                <th> Название</th>
                <th>Дата</th>
                <th> Текст</th>
                <th> Видимость <br/>преподаватели</th>
                <th> Видимость <br/>студенты</th>
                <th>Управление</th>
            </tr>

            <tr>
                <td>{news.title}</td>
                <td>Дата: ("{news.createdAt}")</td>
                <td>{news.text}</td>
                <td>{news.forTeachers && <CheckOutlined/>}</td>
                <td>{news.forStudents && <CheckOutlined/>}</td>

                <td className="image-button" >
                    <SettingOutlined style={{ width: 100 }}/>
                </td>
            </tr>


        </table>
    );
};

export default Table;