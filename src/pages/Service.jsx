import { useLoaderData, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ServiceContainer from "./ServiceContainer";

const Service = () => {

  const [service, setService] = useState()

  const {id} = useParams();

  const services = useLoaderData();

  useEffect(() =>{
    const findService = services?.find(service=>service.id == id)
    setService(findService);
    console.log(findService);
  }, [id, services])


  return (
    <div className=" max-w-7xl my-10 mx-auto">
      <ServiceContainer service={service}></ServiceContainer>
      <Footer></Footer>
    </div>
  );
};

export default Service;
