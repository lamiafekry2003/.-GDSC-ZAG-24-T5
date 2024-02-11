import React from "react";
import style from"./Footer.module.css"
export default function Footer() {
  return (
    <div>
      <div className={`${style.card} text-center py-5`}>
        <div className="card-body ">
          <div className="container">
            <div className="row">
                <div className="col-md-4 py-5">
                    <h2>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 py-5">
                    <h2>AROUND THE WEB</h2>
                    <div className={`${style.icon} d-flex justify-content-center mt-4 align-item-center`}>
                    <div><i className="fa-brands fa-facebook"></i></div>
                    <div><i className="fa-brands fa-twitter  "></i></div>
                    <div><i className="fa-brands fa-linkedin "></i></div>
                    <div><i className="fa-solid fa-globe "></i></div>
                    </div>
                </div>
                <div className="col-md-4 py-5">
                    <h2>ABOUT FREELANCER</h2>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
          </div>
        </div>
        {/* <div class="card-footer py-2">Copyright © Your Website 2021</div> */}
      </div>
      <div className=" py-4" style={{backgroundColor:"#1a252f" ,color:"white" ,textAlign:"center"}}>Copyright © Your Website 2021</div> 
    </div>
  );
}