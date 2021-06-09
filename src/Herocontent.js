import React, {useState} from 'react';
import eleimage from './electrician.png';
import plumberimage from './plumber.png';
import Details from './Details';
import './App.css';

const Herocontent = () => {

   
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)



    return(
        <section className="content">
            <section className="electrician">
                <img src={eleimage} alt="Electrician"/>
                <h2>Do you need an Electrician </h2>
                {
                    show?<Details />
                    /*<div className="details">
                        <div className="detailsContainer">
                    <label>Name</label>
                    <input type="text" autoFocus required/><br />
                    <label>Query</label>
                    <input type="text" autoFocus required/><br />
                    <label>Address</label>
                    <input type="text" autoFocus required/><br/>
                    <label>Phone</label>
                    <input type="text" autoFocus required/><br />
                    </div>
                    </div>*/:null
                }
                <button onClick={()=>setShow(!show)} className="btn1"> Hire</button>
            </section>
            <section className="plumber">
                <img src={plumberimage} alt="Plumber"/>
                <h2>Do you need an Plumber </h2>
                {
                    show1?<Details />:null
                }
                <button onClick={()=>setShow1(!show1)}  className="btn1"> Hire</button>
            </section>
        </section>
    );
};

export default Herocontent;