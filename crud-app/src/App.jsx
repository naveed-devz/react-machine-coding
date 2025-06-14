import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", number: "" });
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit !== null){
      const updatedData = data.map((item,index)=> index === edit ? formData : item);
      setData(updatedData);
      setEdit(null);
    }
    else{
      setData([...data, formData]);
    }
    setFormData({ name: "", email: "", number: "" });
  };

  const handleDelete = (index) =>{
    console.log(index);
    const filteredData = data.filter((_,i)=>i !== index)
    setData(filteredData);
  }

  const handleEdit = (index) =>{
    setEdit(index);
    setFormData(data[index])
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          name="number"
          placeholder="number"
          value={formData.number}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>

      <div>
        {data.map((obj,index) => (
          <div key={index}>
            <h4>{obj.name}</h4>
            <h4>{obj.email}</h4>
            <h4>{obj.number}</h4>
            <button onClick={()=>handleEdit(index)}>Edit</button>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
