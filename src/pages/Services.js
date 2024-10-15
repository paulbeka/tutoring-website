import React, { useState } from "react";
import "./css/Services.css";


const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const BASE_URL = "";

  const register = () => {
    // todo: some kind of validation on email
    let url = BASE_URL + email;
    fetch(url, {
      name: name,
      description: description
    })
    .then((res) => {
      if (res.status === 200) {
        // todo: on success make some kind of cool success animation
        setSuccess(true);
      } else {
        setError("There has been an error in the system. Please contact support.");
      }
    })
    .catch((err) => {
      setError(err);
    })
  }

  return (
    <div className="services-container">
      <div className="top-view">
        <div className="text-holder">
          <h1>Register with us!</h1>
          <p>Lorem ipsum dolor si amet</p>
        </div>
        <div className="signup-form-container">
          <div className="form-holder">    
            <div className="form-subdiv">
              <span>Name: </span>
              <input onChange={setName} className="input-form" placeholder="Name..."  label="Name" />
            </div>
            <div className="form-subdiv">
              <span>Email: </span>
              <input onChange={setEmail} className="input-form" placeholder="Email..." />
            </div>
          </div>
          <div className="form-holder">
            <textarea onChange={setDescription} className="textarea-form" placeholder="What do you need..."/>
            <button className="input-button" onClick={register}>Register Now</button>
          </div>
        </div>
        {error ? <div className="error-div">
          <p className="error-text">{error}</p>
        </div> : <></>}
      </div>
      <div className="our-services-list-container">
        <div className="service-offer">
          <h2>Computer Science</h2>
          <p>Test</p>
        </div>
        <div className="service-offer">
          <h2>Finance</h2>
          <p>Test</p>
        </div>
        <div className="service-offer">
          <h2>Career Advice</h2>
          <p>Test</p>
        </div>
      </div>
    </div>
  )
}

export default Services;