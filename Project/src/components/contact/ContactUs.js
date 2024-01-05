// Import React and other necessary modules
import React from "react";
import "./ContactUs.scss";
import image4 from "../../assets/images/ContactUs/1.webp";


function ContactUs() {
  return (
    <div className="contact">
      <div className="contact-banner">
        <img className="contact-banner-img" src={image4} alt="banner" />
        <div className="contact-banner-cover">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-wrapper">
        <br />
        <p>
          For all enquiries, please use the below form to contact your closest store who will get in contact shortly. Your closest store is your service point and can assist you on claims, product information, availability, delivery, prices, and more. If you are enquiring about an order, please choose the store where you made the purchase. If you are unsure which store that is or if that store has closed, then please choose your closest store.
        </p>
        <div className="container-contact">
          <div className="contact-wrapper-info">
            <form action="/" className="contact-wrapper-info">
              <input
                type="text"
                className="text-input"
                required
                placeholder="FIRST NAME:"
              />
              <br />
              <input
                type="text"
                className="text-input"
                required
                placeholder="LAST NAME:"
              />
              <br />
              <input
                type="number"
                className="text-input"
                required
                placeholder="PHONE:"
              />
              <br />
              <input
                type="text"
                className="text-input"
                required
                placeholder="YOUR EMAIL:"
              />
              <br />
              <textarea
                id="contact"
                name="contact"
                rows="2"
                cols="50"
                required
                className="text-area"
                placeholder="Message"
              />

              <input
                type="submit"
                value="Send"
                className="submit-button"
                onClick={(event) =>
                  alert(
                    "Thank you, your request has been received! We will contact you very soon!"
                  )
                }
              />
            </form>
          </div>
          <div className="contact-wrapper-content">
            <div className="contact-wrapper-content-address">
              <h3>Headquarters</h3>
              <p>
                <i className="fa-solid fa-location-dot"></i>
                <strong>&nbsp;Address:&nbsp;&nbsp;&nbsp;</strong>
                20/3c - Lalkhan Street, Chidambaram-608001
              </p>
              <p>
                <i className="fa-solid fa-phone"></i>
                <strong>&nbsp; Phone:&nbsp;&nbsp;&nbsp;</strong>
                8681062029
              </p>
              <p>
                <i className="fa-solid fa-at"></i>
                <strong>&nbsp; Email:&nbsp;&nbsp;&nbsp;</strong>
                mujaali481@email.com.vn
              </p>
            </div>
            <br />
            <div className="contact-wrapper-content-map">
              <iframe
                title="map"
                src="https://www.google.com/maps/place/Ems/@11.3997599,79.6894007,19.17z/data=!4m6!3m5!1s0x3a54c3b8fd8d50b5:0x4f1b44bf9eaad462!8m2!3d11.3999632!4d79.6890927!16s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default ContactUs;
