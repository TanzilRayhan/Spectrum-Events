import { Link } from "react-router-dom";

const ServiceCard = ({serviceData}) => {
  const {category,title, cover, price, shortDescription, details, id} = serviceData;
  return (
    <div >
      <div >
        <div className="card card-compact w-full shadow-xl">
          <figure >
            <img className="w-full h-60" src={cover}></img>
          </figure>
          <div className="card-body">
          <div className="badge badge-secondary">{category}</div>
            <h2 className="card-title">{title}</h2>
            <p>{shortDescription}</p>
            <div className="card-actions justify-end">
            <Link to={`/service/${id}`}>
              <button className="btn btn-primary">Show Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
