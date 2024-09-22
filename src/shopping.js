import { useState } from 'react';

function Shopping() {
  const [list, setList] = useState(["Shirt", "Jeans", "Kurti", "Vegetables"]);
  const [item, setItem] = useState("");
const[task,setTask] = useState("")
  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAdd = () => {
    if (item.trim() !== "") {
      setList([...list, item]);
      setItem("");
    }
    else{
        setTask("Please Add Task")
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="shopping-list">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={handleChange}
          placeholder="Enter Your List"
          className="input-field"
        />
        <button onClick={handleAdd} className="add-btn">Add</button>
        <p value={task}> {setTask}</p>
      </div>
      <ul className="list">
        {list.map((data, index) => (
          <li key={index} className="list-item">
            {data}
            <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shopping;
