import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const navigate= useNavigate();

    useEffect(()=>{
      setId(localStorage.getItem("id"));
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));

    },[]);
     const handleupdate=(e)=>{
        e.preventDefault();
        axios.put(`https://69e98e1655d62f34797aaa3c.mockapi.io/crud-youtube/${id}`,{
            name:name,
            email:email,
        }).then(()=>{
            navigate("/read");
        });
      }
  return (
    <div>
      <h1>Update</h1>
      <>
      <form>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" />
  </div>

  
  <button type="submit" className="btn btn-primary"
  onClick={handleupdate}
  >Update</button>
</form>
      </>
    </div>
  )
}

export default Update
