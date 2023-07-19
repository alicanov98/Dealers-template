import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setFormData(initialFormValues);
    }
  };

  return (
    <section className="contact">
      <div className="img"></div>
      <div className="contactTitles">
        <div className="container">
          <Link to="/" className="contactHome title">
            Home
          </Link>
          <span className="line title">/</span>
          <Link to="/contact" className="contactTitle">
            Contact
          </Link>
        </div>
      </div>
      <div className="form_container">
        <h1>Get In Touch</h1>
        <div className="form_contact">
          <form>
            <div className="form_name">
              <div>
                <label htmlFor="name">First name <span>*</span></label>
                <input
                  id="name"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                ></input>
                {errors.firstName && (
                  <p className="error" style={{ color: "red" }}>{errors.firstName}</p>
                )}
              </div>
              <div>
                <label htmlFor="surname">Last name <span>*</span></label>
                <input
                  id="surname"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                ></input>
                {errors.lastName && (
                  <p className="error" style={{ color: "red" }}>{errors.lastName}</p>
                )}
              </div>
            </div>
            <label htmlFor="email">Email <span>*</span></label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            ></input>
            {errors.email && <p className="error" style={{ color: "red" }}>{errors.email}</p>}
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            ></input>
            <label htmlFor="message">Message</label>
            <textarea
              cols="30"
              rows="7"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <input
              type="submit"
              value="SEND MESSAGE"
              onClick={handleSubmit}
            ></input>
          </form>
          <div className="contact_place">
            <div>
              <h2>NEW YORK</h2>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div>
              <h2>LONDON</h2>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div>
              <h2>CANADA</h2>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
