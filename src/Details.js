import React, { useState } from 'react';
import './App.css';
import fire from './fire'; 


const Details = () => {
    const [name, setName] = useState("");
    const [query, setQuery] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fire.collection("details")
        .add({
            name:name,
            query: query,
            address: address,
            phone: phone,
        })
        .then(()=>{
            alert("Registered..will get back to you soon");
        })
        .catch(error => {
            alert(error.message);
        });
        setName("");
        setQuery("");
        setAddress("");
        setPhone("");
    };

    return(
        <div className="details">
        <div className="detailsContainer">
            <from className="myform" onSubmit={handleSubmit}>
            <label>Name</label>
                <input type="text" autoFocus required value={name}
                onChange={(e) => setName(e.target.value)}/><br />
            <label>Query</label>
                <input type="text" autoFocus required
                value={query}
                onChange={(e) => setQuery(e.target.value)}/><br />
            <label>Address</label>
                <input type="text" autoFocus required
                value={address}
                onChange={(e) => setAddress(e.target.value)}/><br/>
            <label>Phone</label>
                <input type="text" autoFocus required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/><br />
            <button className="button1" type="submit">Register</button>
            </from>
        </div>
        </div>
    );
}
export default Details;
