/* eslint-disable react/prop-types */

const ServiceContainer = ({ service }) => {
  const { category, title, price, cover, shortDescription, details } =
    service || {};

  return (
    <div>
      <div className="hero my-20">
        <div className="hero-content gap-10 flex text-left">
          <img src={cover} className="max-w-xl rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-2">{shortDescription}</p>
            <div className="flex gap-2 my-3">
              <div className="badge badge-primary">{category}</div>
              <div className="badge badge-primary badge-outline">
                Price: ${price}
              </div>
            </div>
            <h1 className="text-xl font-medium">{details}</h1>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn my-5 btn-primary">
              Buy Now
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal ">
              <div className="modal-box w-80">
                <h3 className="text-lg text-center font-bold">Congratulations!!!</h3>
                <p className="text-center py-4">You successfully purchased this product!!!</p>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
