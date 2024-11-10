import React, { useState } from "react";
import './css/HomeCss.css';
import BasicButton from "../components/buttons/BasicButton";
import { IoIosArrowDown } from "react-icons/io"
import { Link } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import { BrowserView, MobileView } from 'react-device-detect';


const HomePage = () => {
  const reviews = [
    {"title": "Test title1", "name": "Test name", "content": "Test content"},
    {"title": "Test title2", "name": "Test name", "content": "Test content"},
    {"title": "Test title3", "name": "Test name", "content": "Test content"},
    {"title": "Test title4", "name": "Test name", "content": "Test content"},
    {"title": "Test title5", "name": "Test name", "content": "Test content"},
    {"title": "Test title6", "name": "Test name", "content": "Test content"},
    {"title": "Test title7", "name": "Test name", "content": "Test content"}
  ];

  return (
    <>
    <BrowserView>
    <div className="home-container">
      <div className="intro-container">
        <div className="middle-intro-container">
          <div>
            <img src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png"/>
          </div>
          <div className="right-container">
            <h2>Expert Career Coaching & Tutoring from Industry Professionals!</h2>
            <h4>Secure your dream internship or graduate job.</h4>
            <Link to={"services"}>
              <BasicButton style={{ marginTop: "20px" }} text={"Register Today"} onClick={() => {}} />
            </Link>
          </div>
        </div>
        <div className="down-arrow">
          <a style={{"color": "inherit"}} className="link-unstyled" href="#otherContent"><IoIosArrowDown style={{"width":"80px", "height": "auto"}} /></a>
        </div>
      </div>

      <div className="rest-of-content" id="otherContent">
        <div className="profiles-container">
          <div className="person-container">
            <center>
              <img className="profile-img" src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" />
              <h3>Paul Bekaert</h3>
            </center>
            <p>Lorem ipsum dolor si amet</p>
          </div>
          <div className="person-container">
            <center>
              <img className="profile-img" src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" />
              <h3>Katarzyna Pastuszka</h3>
            </center>
            <p>Lorem ipsum dolor si amet</p>
          </div>
        </div>

        <div>
          <h1 style={{ "margin": "2em"}}>Why Choose Us</h1>
          <div className="qualities-container">
            <div className="quality">
              <img src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" />
              <h3>Test</h3>
              <p>Lorem ipsum dolor si amet</p>
            </div>
            <div className="quality">
              <img src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" />
              <h3>Test</h3>
              <p>Lorem ipsum dolor si amet</p>
            </div>
            <div className="quality">
              <img src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" />
              <h3>Test</h3>
              <p>Lorem ipsum dolor si amet</p>
            </div>
          </div>
        </div>
      </div>

      <div className="reviews-container">
        <h2 style={{ marginLeft: "1em" }}>Reviews from our Customers</h2>
        <Carousel 
          content={reviews}
        /> 
      </div>
    </div>
    </BrowserView>
    <MobileView>
    <div className="home-container">
      <div className="intro-container">
        <div className="middle-intro-container">
          <img style={{width: "100px"}} src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" alt="Career Coaching" />
          <div className="right-container">
            <h2>Expert Career Coaching & Tutoring from Industry Professionals!</h2>
            <h4>Secure your dream internship or graduate job.</h4>
            <Link to={"services"}>
              <BasicButton style={{ marginTop: "20px" }} text={"Register Today"} onClick={() => {}} />
            </Link>
          </div>
        </div>
        <div className="down-arrow">
          <a className="link-unstyled" href="#otherContent">
            <IoIosArrowDown style={{ width: "40px", height: "auto" }} />
          </a>
        </div>
      </div>

      <div className="rest-of-content" id="otherContent">
        <div className="profiles-container">
          <div className="person-container">
            <center>
              <img className="profile-img" src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" alt="Profile" />
              <h3>Paul Bekaert</h3>
            </center>
            <p>Lorem ipsum dolor si amet</p>
          </div>
        </div>

        <div>
          <h1 style={{ margin: "1em" }}>Why Choose Us</h1>
          <div className="qualities-container">
            <div className="quality">
              <img src="https://acniowa.com/wp-content/uploads/2016/03/test-image.png" alt="Quality Icon" />
              <h3>Test</h3>
              <p>Lorem ipsum dolor si amet</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="reviews-container">
        <h2 style={{ marginLeft: "1em" }}>Reviews from our Customers</h2>
        <Carousel content={reviews} />
      </div> */}
    </div>
    </MobileView>
    </>
  )
}

export default HomePage;