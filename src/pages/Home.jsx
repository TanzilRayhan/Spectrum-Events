import ServiceCard from "./ServiceCard";
import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Slider from "./Slider";


const Home = () => {
  const serviceData = useLoaderData();
  console.log(serviceData);

  return (
    <div>
      <div>
        <Slider></Slider>
      </div>

      <div className=" max-w-7xl my-10 mx-auto">
        <div>
          <h1 className="text-4xl font-bold py-10 text-center">Services</h1>
        </div>
        <div className="grid grid-col-2 mx-5 lg:mx-0 lg:grid-cols-3 gap-5">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} serviceData={service}></ServiceCard>
          ))}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
