import { useState } from "react";
export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((item, i) => i !== index));
 };
 return (
    <div id="wd-array-state-variables" className="p-3">
      <h2>Array State Variable</h2>

      <button className="btn btn-success mb-3" onClick={addElement}>
        Add Element
      </button>

      <div className="border rounded p-2">
        <ul className="list-group">
          {array.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item}
              <button
                className="btn btn-danger"
                onClick={() => deleteElement(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr />
    </div>);}