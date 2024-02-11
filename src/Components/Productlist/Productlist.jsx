import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Products from "../Products/Products";
import { Bars } from "react-loader-spinner";

export default function Productlist() {
  const url = `https://fakestoreapi.com/products`;
  const parms = useParams();
  const [product, setProduct] = useState({});
  const [loading,setLoading] = useState(false)
  async function getList() {
    const { data } = await axios.get(`${url}/${parms.productsId}`);
    setProduct(data);
  }
  useEffect(() => {
    getList();
  }, []);
  return (
    // <h1>ProductList-{product.id} {product.title}</h1>
    // <Products product={product}/>
    <div className="container">
      <div className="row">
        <div className="col-md-7">
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
          ):(<div
            class="card mt-5"
            style={{ maxWidth: " 540px" }}
            key={product.id}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={product.image}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.description}</p>
                  <p>Price is : {product.price}$</p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>)}
        </div>
        <div className="col-md-5 my-5">
            <img
                  src={product.image}
                  class="img-fluid rounded-start w-50"
                  alt="..."
                />
            </div>
      </div>
    </div>
  );
}
