import React, {useState} from 'react';
import './Table.scss';
import Gear from "../../assets/image/gear.png";

const Table = () => {
    const [checked, setChecked] = useState(true);
    const [checkedA, setCheckedA] = useState(true);
    const [checkedB, setCheckedB] = useState(true);
    const [checkedC, setCheckedC] = useState(true);
    const [checkedD, setCheckedD] = useState(true);
    const [checkedE, setCheckedE] = useState(true);
    const [checkedF, setCheckedF] = useState(true);

    let msgA;
    if (checkedA) {
        msgA = <span>Не видно</span>
    } else {
        msgA = <span>Видно</span>
    }
    let msgB;
    if (checkedB) {
        msgB = <span>Не видно</span>
    } else {
        msgB = <span>Видно</span>
    }
    let msgC;
    if (checkedC) {
        msgC = <span>Не видно</span>
    } else {
        msgC = <span>Видно</span>
    }
    let msgD;
    if (checkedD) {
        msgD = <span>Не видно</span>
    } else {
        msgD = <span>Видно</span>
    }
    let msgE;
    if (checkedE) {
        msgE = <span>Не видно</span>
    } else {
        msgE = <span>Видно</span>
    }
    let msgF;
    if (checkedF) {
        msgF = <span>Не видно</span>
    } else {
        msgF = <span>Видно</span>
    }

    return (
        <table className="table">
            <tr>
                <th> Название</th>
                <th> Дата создания</th>
                <th> Текст</th>
                <th> Видимость для студентов</th>
                <th>Видимость для преподавателей</th>
                <th>Управление</th>
            </tr>

            <tr>
                <td>Ячейка 1</td>
                <td>Ячейка 2</td>
                <td>Ячейка 3</td>
                <td>
                    <div>
                        <input type="checkbox" checkedA={checkedA} onChange={() => setCheckedA(!checkedA)}/>
                        <span>{msgA}</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" checkedB={checkedB} onChange={() => setCheckedB(!checkedB)}/>
                        <span>{msgB}</span>
                    </div>
                </td>
                <td>
                    <button className="image-button"><img src={Gear} alt={"картинка"}/></button>
                </td>
            </tr>
            <tr>
                <td>Ячейка 1</td>
                <td>Ячейка 2</td>
                <td>Ячейка 3</td>
                <td>
                    <div>
                        <input type="checkbox" checkedC={checkedC} onChange={() => setCheckedC(!checkedC)}/>
                        <span>{msgC}</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" checkedD={checkedD} onChange={() => setCheckedD(!checkedD)}/>
                        <span>{msgD}</span>
                    </div>
                </td>
                <td>
                    <button className="image-button"><img src={Gear} alt={"картинка"}/></button>
                </td>
            </tr>
            <tr>
                <td>Ячейка 1</td>
                <td>Ячейка 2</td>
                <td>Ячейка 3</td>
                <td>
                    <div>
                        <input type="checkbox" checkedE={checkedE} onChange={() => setCheckedE(!checkedE)}/>
                        <span>{msgE}</span>
                    </div>
                </td>
                <td>
                    <div>
                        <input type="checkbox" checkedF={checkedF} onChange={() => setCheckedF(!checkedF)}/>
                        <span>{msgF}</span>
                    </div>
                </td>
                <td>
                    <button className="image-button"><img src={Gear} alt={"картинка"}/></button>
                </td>
            </tr>

        </table>
    );
};

export default Table;