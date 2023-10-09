const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-5xl py-10 font-bold text-center">Contact Us</h1>
      <p className="text-md font-medium">Have questions, inquiries, or ready to start planning your next event?
        We are here to assist you every step of the way. Contact our team to
        discuss your event management needs, request a quote, or simply learn
        more about the services.
      </p>
      <h1 className="text-2xl py-3 ">How to Reach Us:</h1>
      <p>
        <h3>
          <span className="font-bold">Email:</span> info@eventmanagement.com{" "}
          <br />
        </h3>

        <h3>
          <span className="font-bold">Phone: </span> 89173487515
          <br />
        </h3>
        <h3>
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
        <h1 className="text-2xl py-3 ">Visit Us:</h1>
        <h3>[Your Company Name] <br /> [Your Address] <br /> [City, State, ZIP Code]</h3>
      </div>
    </div>
  );
};

export default Contact;
