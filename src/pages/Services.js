import React from "react";
import "./css/Services.css";


const Services = () => {
  return (
    <div className="services-container">
      <div className="signup-form-container">
        <div className="form-holder">
          <div className="form-subdiv">
            <span>Name: </span>
            <input
              className="input-form"
              placeholder="Name..." 
              label="Name"
            />
          </div>
          <div className="form-subdiv">
            <span>Email: </span>
            <input className="input-form" placeholder="Email..." />
          </div>

        </div>
        <div className="form-holder">
          <textarea className="textarea-form" placeholder="What do you need..."/>
          <button>Register Now</button>
        </div>
      </div>
      <div className="our-services-list-container">
        <div className="service-offer">
          <h2>Computer Science</h2>
          <p>Test</p>
        </div>
        <div className="service-offer">
          <h2>Computer Science</h2>
          <p>Test</p>
        </div>
        <div className="service-offer">
          <h2>Computer Science</h2>
          <p>Test</p>
        </div>
      </div>
    </div>
  )
}

export default Services;