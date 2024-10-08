import React from "react";
import "./css/Newsletter.css";
import BasicButton from "../components/buttons/BasicButton";


const Newsletter = () => {

  const subscribe = () => {
    alert("Sub!")
  }

  return (
    <div className="newsletter-container">
      <div className="central-component">
        <h1 className="title">Internship Insider</h1>
        <h3>The secret to finding an internship in Computer Science, Finance, or Fintech</h3>
        <div className="input-container">
          <input className="input-box" />
          <BasicButton text="Subscribe!" onClick={subscribe}/>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;