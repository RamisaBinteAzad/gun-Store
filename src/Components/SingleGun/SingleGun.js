import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleGun = (props) => {
  const [modalData, setModalData] = useState({});
  const { gun, countIncrease } = props;
  console.log(modalData);
  const { id, name, img, bullet, capacity, action, price, category } = gun;

  return (
    <div>
      <div className="card  w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="w-96 h-44" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="flex justify-between ">
            <h2>
              <span className="text-blue-800 font-bold">Category:</span>
              {category}
            </h2>
            <h2>
              <span className="text-green-700 font-bold">Capacity:</span>
              {capacity}
            </h2>
            <h2>
              <span className="text-red-800 font-bold">Price:</span>${price}
            </h2>
          </div>

          <div className="card-action">
            <div className="badge badge-outline mr-3">{action}</div>
            <div className="badge badge-outline">{bullet}</div>
            <div className="mt-4">
              <button
                onClick={() => countIncrease()}
                //   onClick={countIncrease}
                className="btn btn-sm  btn-accent mr-3"
              >
                Add To Cart
              </button>

              <label
                onClick={() => setModalData(gun)}
                htmlFor="my_modal_6"
                className="btn btn-sm btn-neutral"
              >
                Details
              </label>
              {/* condition apply korchi tai second bracket use korchi */}
              {/* sudhu data dile proti click e change hocche na tai setModalData pass korte hobe  */}
              {modalData && (
                <Modal data={modalData} setModalData={setModalData}></Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGun;
