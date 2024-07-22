import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [acknowledgment, setAcknowledgment] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_34zfppd", "template_br26u9k", form.current, {
        publicKey: "dfuT-0kdmn4wYwm2g",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setAcknowledgment(
            "Thank you for contacting me! I will get back to you soon."
          );
        },
        (error) => {
          console.log("FAILED...", error);
          setAcknowledgment("Sorry, something went wrong. Please try again.");
        }
      );

    // emailjs
    //   .send(
    //     "service_34zfppd",
    //     "template_s2je6rm",
    //     formData,
    //     "yuvrajsinh8418@gmail.com"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //       setAcknowledgment(
    //         "Thank you for contacting me! I will get back to you soon."
    //       );
    //     },
    //     (error) => {
    //       console.log("FAILED...", error);
    //       setAcknowledgment("Sorry, something went wrong. Please try again.");
    //     }
    //   );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-8">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Send
          </button>
        </form>
        {acknowledgment && (
          <p className="mt-4 text-green-500">{acknowledgment}</p>
        )}
      </div>

      {/* Social Media and Vector */}
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
        <img
          src="path/to/your/vector/image.svg"
          alt="Contact"
          className="w-2/3 mb-4"
        />
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://www.twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
