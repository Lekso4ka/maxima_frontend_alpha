import DisciplinesSlice, {addDisciplines} from '../../core/store/features/subjects/DisciplinesSlice'
import {useDispatch} from "react-redux";
import disciplinesSlice from "../../core/store/features/subjects/DisciplinesSlice";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from '../item/Item'
import './Disciplines.css'

const arr = () => {
    let data = localStorage.getItem("data");
    if (data) return JSON.parse(localStorage.getItem("data"));
    else return [];
};
function Disciplines() {

    const [item, setItem] = useState("");
    const [edit, setEdit] = useState(false);
    const [editId, setEditId] = useState();
    const [list, setList] = useState(arr);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        const newItem = {
            id: uuidv4(),
            item: item,
            complete: false,
        };
        e.preventDefault();
        if (item && item.length <= 25 && !edit) {
            setList([...list, newItem]);
            setItem("");
            setError("");
        } else if (item && item.length <= 25 && edit && editId) {
            setList(
                list.map((el) => {
                    if (el.id === editId) {
                        return { ...el, item: item };
                    }
                    return el;
                })
            );
            setItem("");
            setEditId(null);
            setEdit(false);
            setError("");
        } else if (!item) setError("Item cannot be blank.");
        else if (item.length > 25) setError("Character limit is 25.");
    };

    React.useEffect(() => {
        localStorage.setItem("data", JSON.stringify(list));
    }, [list]);

    const handleChange = (e) => {
        setItem(e.target.value);
    };

    return (
        <>
            <div className="Disciplines">
            <h1>Дисциплины</h1>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    value={item}
                    placeholder="Enter the items"
                    onChange={handleChange}
                />
                {edit ? (
                    <button className="btn" type="submit">
                        Изменить
                    </button>
                ) : (
                    <button className="btn" type="submit">
                        Добавить дисциплину
                    </button>
                )}
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
            <div>
                {list.map((c, id) => (
                    <Item
                        key={id}
                        id={c.id}
                        item={c.item}
                        list={list}
                        setList={setList}
                        complete={c.complete}
                        setItem={setItem}
                        setEdit={setEdit}
                        setEditId={setEditId}
                    />
                ))}
            </div>
        </div>
        </>
    )
}
export default Disciplines;