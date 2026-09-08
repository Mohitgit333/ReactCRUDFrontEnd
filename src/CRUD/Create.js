import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create=()=>{

    const[name,SetName]= useState("");
    const[email,SetEmail]=useState("");

    const history= useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://69e98e1655d62f34797aaa3c.mockapi.io/crud-youtube",{
            name:name,
            email:email,
        });
        history("/read");
    }
    return <>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" onChange={(e)=>SetName(e.target.value)} className="form-control" />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Email</label>
    <input type="email" className="form-control" onChange={(e)=>SetEmail(e.target.value)} />
  </div>

  
  <button type="submit" className="btn btn-primary mx-2">Submit</button>
  <Link to="/read">
      <button className="btn btn-secondary">
        Back
      </button>
      </Link>
</form>
    </>
    
}

export default Create