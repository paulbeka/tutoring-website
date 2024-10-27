import React from "react";
import "./css/Newsletter.css";
import BasicButton from "../components/buttons/BasicButton";


const Newsletter = () => {

  const subscribe = () => {
    alert("Sub!")
  }

  return (
    <div style={{ height: "100%" }}>
     <div className="newsletter-container">
        <div className="central-component">
          <div>
            <img className="newsletter-img-container" src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png"/>
          </div>
          <h1 className="title">Internship Insider</h1>
          <h3>The secret to finding an internship in Computer Science, Finance, or Fintech</h3>
          <div className="input-container">
            <input className="input-box" />
            <BasicButton text="Subscribe!" onClick={subscribe}/>
          </div>
        </div>
      </div>
      <div className="newsletter-info-container">
          <h2>What does the newsletter contain?</h2>
          <p>Lorem ipsum dolor si amet</p>
        </div>
    </div>
    
  )
}

export default Newsletter;