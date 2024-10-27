import React, { useState } from "react";
import "./Carousel.css";
import { 
  IoMdArrowDropleft,
  IoMdArrowDropright
 } from "react-icons/io";


const Carousel = ({ content }) => {
  const [index, setIndex] = useState(0);
  const numberShown = 3

  const incIndex = () => {
    if (index + 1 >= content.length - 2) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }
  
  const decIndex = () => { 
    if (index - 1 < 0) {
      setIndex(content.length - 3);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="carousel-container">
      <div className="carousel-arrow">
        <IoMdArrowDropleft size={50} className="carousel-arrow" onClick={decIndex} /> 
      </div>
      <div className="carousel-content">
        {content.map((item) => {
          return (
          <div className="carousel-item"
            style={{
              transform: `translateX(-${index * 110}%)`, // Slide based on index
            }}
          >
            <h3 className="carousel-title">{item.title}</h3>
            <h4 className="carousel-name">{item.name}</h4>
            <p className="carousel-text">{item.content}</p>
          </div>)
        })}
      </div>
      <div>
        <IoMdArrowDropright size={50} className="carousel-arrow" onClick={incIndex} />
      </div>
    </div>
  )
}

export default Carousel;