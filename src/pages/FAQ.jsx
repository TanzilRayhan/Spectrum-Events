/* eslint-disable react-refresh/only-export-components */
const FAQ = () => {
  return (
    <div>
      <h1 className="text-5xl py-10 text-center font-bold">
        Frequently Asked Question(FAQ)
      </h1>
      <div className="max-w-3xl mx-auto">
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What services does your event management service offer?{" "}
          </div>
          <div className="collapse-content">
            <p>
              We provide comprehensive event management services, covering
              everything from planning and coordination to execution. This
              includes venue selection, logistics, attendee registration,
              promotion, and post-event analysis.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus ">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What types of events do you specialize in managing?{" "}
          </div>
          <div className="collapse-content">
            <p>
              We specialize in managing a diverse range of events, including
              conferences, expos, trade shows, corporate meetings, product
              launches, gaming events, hackathons, and more. Our team has
              experience across various industries.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          Do you offer virtual event management services?          </div>
          <div className="collapse-content">
            <p>
            Yes, we understand the importance of virtual events in today landscape. We offer comprehensive virtual event management services, including platform selection, technical support, attendee engagement strategies, and more.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
          How does the pricing for your services work?          </div>
          <div className="collapse-content">
            <p>
              To request our services, simply contact us through our website or
              email. Provide details about your event, including the type, date,
              expected attendees, and any specific requirements you may have. We
              will get back to you promptly to discuss your needs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I request your event management services?{" "}
          </div>
          <div className="collapse-content">
            <p>
              To request our services, simply contact us through our website or
              email. Provide details about your event, including the type, date,
              expected attendees, and any specific requirements you may have. We
              will get back to you promptly to discuss your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
