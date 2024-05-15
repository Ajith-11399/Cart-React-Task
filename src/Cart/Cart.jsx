import React, { useContext } from "react";
import { mycontext } from "../App";
import "../App.css";

const Cart = () => {
  const [data, setData] = useContext(mycontext);

  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  const handleInc = (id, quantity) => {
    setData((val) => {
      return val.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };

  const handleDec = (id, quantity) => {
    setData((val) => {
      return val.map((element) => {
        if (element.id === id && quantity > 0) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };

  // const totalPrice = data.reduce(
  //   (total, data) => total + data.price * (data.quantity || 1),
  //   0
  // );
  // const totalQuantity = data.reduce(
  //   (total, data) => total + (data.quantity || 1),
  //   0
  // );
  // const handleInc = (id, quantity) => {
  //   setData((curr) => {
  //     return curr.map((element) => {
  //       if (element.id === id) {
  //         return { ...element, quantity: element.quantity + 1 || quantity + 1 };
  //       }
  //       return element;
  //     });
  //   });
  // };
  // const handleDec = (id, quantity) => {
  //   setData((curr) => {
  //     return curr.map((element) => {
  //       if (element.id === id && quantity > 0) {
  //         return { ...element, quantity: element.quantity - 1 || quantity - 1 };
  //       }
  //       return element;
  //     });
  //   });
  // };

  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="text-center">Cart Page Task</h1>
        <div className="col-lg-9 col-md-7 col-sm-12 mt-1 mb-5 align-items-center justify-content-center box">
          {data &&
            data.map((element, index) => (
              <div key={element.id}>
                <div className="card box2 m-2 mt-5 mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-7">
                        <div>
                          <h3 className="m-1 mt-4 mb-4">
                            {element.brand} {element.title}
                          </h3>
                        </div>
                        <div
                          id={`carouselExampleFade${index}`}
                          className="carousel slide carousel-fade m-1"
                        >
                          <div className="carousel-inner">
                            {element.images.map((ele, i) => (
                              <div
                                key={i}
                                className={`carousel-item ${
                                  i === 0 ? "active" : ""
                                }`}
                              >
                                <img
                                  src={ele}
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            ))}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#carouselExampleFade${index}`}
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#carouselExampleFade${index}`}
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                        <div className="m-1 mt-5">
                          <h6 className='text-justify'>{element.description}</h6>
                        </div>
                      </div>
                      <div className="col-lg-5 mt-5">
                        <div className="row mt-3 align-items-center justify-content-center">
                          <div className="col-lg-12 m-2  align-items-center justify-content-center text-center">
                            <div>
                              <h4>₹. {element.price}</h4>
                            </div>
                            <div>
                              <h4>
                                {" "}
                                @ Discount {element.discountPercentage}% Off
                              </h4>
                            </div>
                            <div>
                              <h4>Rating: {element.rating}</h4>
                            </div>
                            <div>Stock Available: {element.stock}</div>
                            <div>Brand: {element.brand}</div>
                            <div>Category: {element.category}</div>
                            <div className="text-center align-items-center justify-content-center mt-5">
                              <h5 className="text-center">Quantity</h5>
                              <div className="">
                                <button
                                  className="btn btn-primary m-1"
                                  onClick={() =>
                                    handleInc(element.id, element.quantity || 1)
                                  }
                                >
                                  Add
                                </button>
                                <button
                                  className="btn btn-danger m-1"
                                  onClick={() =>
                                    handleDec(element.id, element.quantity || 1)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div />
                </div>
              </div>
            ))}
        </div>
        <div className="col-lg-3 col-md-5 col-sm-12 mt-1 mb-1 align-items-center justify-content-center box">
          <div className="card mt-5">
            <div className="card-header">
              <h3>Sub Total </h3>
            </div>
            <div className="card-body">
              <h5>
                Items in your Cart: <b>{totalQuantity}</b>
              </h5>
              <h5>
                Cart Value: <b>{totalPrice}</b>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
