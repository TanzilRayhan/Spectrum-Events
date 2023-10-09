import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-5 lg:mx-auto">
      <h1 className="text-5xl py-10 font-bold text-center">Contact Us</h1>
      <div className="mb-20">
      <p className="text-lg lg:text-xl text-center pb-5 font-medium">Have questions, inquiries, or ready to start planning your next event?
        We are here to assist you every step of the way. Contact our team to
        discuss your event management needs, request a quote, or simply learn
        more about the services.
      </p>
      <h1 className="text-3xl py-3 font-bold">How to Reach Us:</h1>
      <p>
        <h3  className="text-lg font-medium py-3">
          <span className="font-bold">Email:</span> info@eventmanagement.com{" "}
          <br />
        </h3>

        <h3  className="text-lg font-medium py-3">
          <span className="font-bold">Phone: </span> 89173487515
          <br />
        </h3>
        <h3  className="text-lg font-medium py-3">
          <span className="font-bold">Office Hours: </span>Monday to Friday:
          9:00 AM - 6:00 PM Saturday: 10:00 AM - 3:00 PM (Closed on Sundays and
          public holidays)
          <br />
        </h3>
        <h6 className="py-2">
          Feel free to drop by our office for a face-to-face discussion or
          schedule a virtual meeting at your convenience.
        </h6>
      </p>
      <div>
        <h1 className="text-3xl py-3 font-bold">Visit Us:</h1>
        <h3 className="text-lg font-medium">Spectrum Events<br /> Dhaka, Bangladesh</h3>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
