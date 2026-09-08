import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://localhost:7282/api/Product")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id){
    axios.delete(`https://localhost:7282/api/Product/${id}`

    ).then(()=>{
      getData();
    });
  }

  const setToLocalStorage=(id,name,price)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("price",price);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={()=>{
            if(tabledark==="table-dark") 
                setTableDark("");
            else setTableDark("table-dark");
        }}>
        </input>
    </div>
      <h1>Read Operation</h1>
      <Link to="/">
      <button className="btn btn-success">
        Create
      </button>
      </Link>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((eachdata, index) => {
            return (
              <tr key={eachdata.id}>
                <th scope="row">{index + 1}</th>
                <td>{eachdata.name}</td>
                <td>{eachdata.price}</td>
                <td>
                    <Link to="/update">
                  <button className="btn btn-success" onClick={()=> setToLocalStorage(eachdata.id,eachdata.name,eachdata.email)
                 } >Edit</button>
                  </Link>
                </td>
                <td>
                  <button className="btn btn-danger"
                  onClick={()=>handleDelete(eachdata.id)}
                  >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;