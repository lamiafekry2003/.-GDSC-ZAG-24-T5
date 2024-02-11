import React from "react";
import style from "./About.module.css";
export default function About() {
  return (
    <div className={` ${style.about}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>ABOUT COMPONENT</h2>
            <div className={style.hrlin}>
              <i className="fa-solid fa-star mx-5 "></i>
            </div>
            </div>
              <div className="col-md-6">
                <p className="">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className="col-md-6">
                <p className="">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
  );
}
