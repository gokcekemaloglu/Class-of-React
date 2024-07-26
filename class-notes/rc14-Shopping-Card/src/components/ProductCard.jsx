import axios from "axios";
import React from "react";

const ProductCard = ({urun,getData}) => {
  const {id, name, image, price, dampingRate, amount} = urun

  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const handleSil = async() =>{
    await axios.delete(`${BASE_URL}/${id}`)
    getData()
  }


  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={"name"}
            title={""}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button"
           
            >
              {name}

            </h5>
            <div className="product-price d-flex flex-wrap align-items-center">
              <span className="damping-price text-warning h2">
                $ {parseFloat(price*dampingRate).toFixed(2)}
              </span>
              <span className="h5 text-dark ms-2 text-decoration-line-through">
                {parseFloat(price).toFixed(2)}
              </span>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleAzalt}
                >
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={handleArttir}
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button
                className="btn btn-danger btn-sm w-100 remove-product"
                onClick={handleSil}
              >
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $
              <span className="product-line-price">
                {(parseFloat(amount*price*dampingRate).toFixed(2))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
