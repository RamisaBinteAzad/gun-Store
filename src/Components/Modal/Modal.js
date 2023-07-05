import React from "react";

const Modal = ({ data, setModalData }) => {
  const { id, name, img, bullet, capacity, action, price, category } = data;
  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}

      {/* You can open the modal using ID.showModal() method */}
      {/* You can open the modal using ID.showModal() method */}
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <label
              onClick={() => setModalData(null)}
              htmlFor="my_modal_6"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
          <div>
            <h3 className="font-bold text-4xl text-blue-700 text-center my-2">
              {name}
            </h3>

            <p className="py-4">
              The {name} is a {action} {category} known for its reliability and
              versatility. It belongs to the category of {category}s and has a
              capacity of {capacity} rounds. The {category} uses {bullet}{" "}
              bullets and features a sleek design. Its action mechanism ensures
              efficient and precise firing. With a price tag of ${price},{name}{" "}
              offers excellent value for its performance and quality.
            </p>
            <p className="my-2">
              {" "}
              To get a visual representation of the pistol, you can check out
              the provided image:
            </p>
            <figure>
              <img src={img} alt="firearms" className="w-full h-44 my-2" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
