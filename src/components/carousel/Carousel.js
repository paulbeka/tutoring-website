import React, { useState } from "react";
import "./Carousel.css";
import { 
  IoIosArrowDropleft,
  IoIosArrowDropright
 } from "react-icons/io";


const Carousel = ({ content }) => {
  const [index, setIndex] = useState(0);
  const numberShown = 3

  const incIndex = () => {
    if (index + 1 >= content.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }
  
  const decIndex = () => { 
    if (index - 1 < 0) {
      setIndex(content.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  const getDisplayedCarouselData = () => {
    if (index + numberShown >= content.length) {
      const startArray = content.slice(index, content.length);
      const endArray = content.slice(0, (index + numberShown) % content.length);
      return [...startArray, ...endArray];
    }
    return content.slice(index, index + numberShown);
  }

  return (
    <div className="carousel-container">
      <div className="carousel-arrow">
        <IoIosArrowDropleft size={50} className="carousel-arrow" onClick={decIndex} /> 
      </div>
      {getDisplayedCarouselData().map((item) => {
        return (
        <div className="carousel-item">
          <h3 className="carousel-title">{item.title}</h3>
          <h4 className="carousel-name">{item.name}</h4>
          <p className="carousel-text">{item.content}</p>
        </div>)
      })}
      <div>
        <IoIosArrowDropright size={50} className="carousel-arrow" onClick={incIndex} />
      </div>
    </div>
  )
}

export default Carousel;