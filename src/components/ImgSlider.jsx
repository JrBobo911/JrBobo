import React from "react";
import Img1 from "/src/assets/images/sl1.png";
import Img2 from "/src/assets/images/sl2.png";
import Img3 from "/src/assets/images/sl3.png";
import Img4 from "/src/assets/images/sl4.png";
import Img5 from "/src/assets/images/sl5.png";
import Img6 from "/src/assets/images/sl6.png";

const ImgSlider = () => {
  return (
    <div>
      <div className="slider">
      <div className='slide-track'>
          <div className="slide">
            <img src={Img1} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img2} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img3} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img4} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img5} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img6} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img1} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img2} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img3} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img4} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img5} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img6} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img1} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img2} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img3} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img4} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img5} alt="slide" />
          </div>
          <div className="slide">
            <img src={Img6} alt="slide" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
