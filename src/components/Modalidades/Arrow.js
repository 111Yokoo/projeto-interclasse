import React from 'react';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

export const PrevArrow = ({ onClick }) => (
  <div className="arrow arrow-prev" onClick={onClick}>
    <span><IoIosArrowBack /></span>
  </div>
);

export const NextArrow = ({ onClick }) => (
  <div className="arrow arrow-next" onClick={onClick}>
    <span><IoIosArrowForward /></span>
  </div>
);
