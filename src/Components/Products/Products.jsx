import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import style from './Products.module.css'
export default function Products() {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [showButton,setShow]=useState(true)
  const [categories, setCategories] = useState([]);
  async function getData() {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://fakestoreapi.com/products`);
      setData(data);
      setLoading(false);
    } catch (error) {
      setMsg(error.message);
    }
  }
  // get all categority
  async function getCategority() {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://fakestoreapi.com/products/categories`);
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setMsg(error.message);
    }
  }
  // get specific categority
   async function getSpecificCategority(catName) {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://fakestoreapi.com/products/category/${catName}`);
      setData(data);
      setLoading(false);
    } catch (error) {
      setMsg(error.message);
    }
  }
  useEffect(() => {
    getData();
    getCategority();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Products</h2>

      {categories.map((categ)=><button key={categ} onClick={()=>{getSpecificCategority(categ)}} type="button" class="btn btn-outline-info mx-2 my-2">{categ}</button>)}
      <button  onClick={getData} type="button" class="btn btn-outline-info mx-2 my-2">All Products</button>
      <div className="row">
        {loading ? (
          <Bars
            height="80"
            width="80"
            color="#0dcaf0"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        ) : (
          data.map((product) => (
            <div className="col-md-3 mt-2 mx-auto d-block" key={product.id}>
              <div className="card my-3" style={{ width: " 18rem" }}>
                <img src={product.image} className={`card-img-top p-3 ${style.heig}`} alt="..." />
                <div className="card-body">
                  <h5 className={`card-title  ${style.tit} `}>{product.title}</h5>
                  <p className={`card-text  ${style.des}`}>{product.description}</p>
                 <Link to={`${product.id}`}  className="btn btn-primary">
                    Details
                  </Link>
                  {/* <Link to={`products/:productsId`} className="btn btn-primary">
                    Details
                  </Link> */}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
