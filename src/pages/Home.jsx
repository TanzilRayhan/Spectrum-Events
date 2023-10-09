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
          <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/z4MSqkf/360-F-141523101-8umyxdkp-KIq-Fg-VIm-Rhc-WNw-H9-Gg5-TBu29.jpg"
                className="max-w-lg rounded-lg shadow-xl lg: ml-20"
              />
              <div className=" mx-auto">
                <h1 className="text-5xl font-bold">Why Choose Us?</h1>
                <p className="py-6 text-lg">
                At Spectrum Events, we stand out for our unwavering commitment to excellence. With a track record of success spanning diverse industries, we offer tech-forward solutions that redefine event experiences. Our creative touch ensures your event is not just managed but transformed into an extraordinary moment. We prioritize your success through a client-centric approach, end-to-end services, and transparent communication. Choose [Your Company Name] for an event management partner that adapts, innovates, and delivers beyond expectations.
                </p>
                <h3 className="font-bold">-Tanzil Rayhan, CEO</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold my-20 text-center">Services</h1>
        </div>
        <div className="grid grid-col-2 mx-5 lg:mx-0 lg:grid-cols-3 gap-5">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} serviceData={service}></ServiceCard>
          ))}
        </div>
        <div>
          <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="https://i.ibb.co/hCNXXjt/about-company.png"
                className="max-w-lg rounded-lg shadow-xl lg: mr-20"
              />
              <div className=" mx-auto">
                <h1 className="text-5xl font-bold">Clients Review!</h1>
                <p className="py-6 text-lg">
                Working with Spectrum Events for our tech event was a game-changer. The teams tech-savvy approach and attention to detail elevated our event to new heights. From cutting-edge innovations to flawless execution, they delivered an unforgettable experience. Clear communication, adaptability, and a passion for tech made them the perfect partner. Highly recommend for any tech-centric event!
                </p>
                <h3 className="font-bold">-Dr. Richard Nádvorník, SEQme s.r.o.</h3>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
