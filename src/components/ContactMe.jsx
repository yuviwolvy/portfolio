import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LinkedinSquare } from "@styled-icons/boxicons-logos/LinkedinSquare";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Leetcode } from "styled-icons/simple-icons";
import { ArrowDownCircleFill } from "styled-icons/bootstrap";

const ContactMe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    const isValid =
      formData.from_name.trim() !== "" &&
      emailRegex.test(formData.from_email) &&
      formData.message.trim() !== "";
    setIsFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          toast.success(
            "Thank you for contacting me! I will get back to you soon."
          );
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setIsSubmitting(false);
          toast.error("Sorry, something went wrong. Please try again.");
        }
      );
  };
  return (
    <div
      className="flex flex-col justify-center items-center p-8 min-h-screen"
      id="contact-me"
    >
      <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl md:text-6xl font-bold text-primary text-center mb-8">
          Reach out to me
        </h1>
        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-bgColor border border-secondary rounded-md text-sm shadow-sm placeholder-transparent
                     focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent peer"
              placeholder="Name"
              required
            />
            <label className="absolute text-sm text-secondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-bgColor peer-focus:rounded-xl peer-focus:bg-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-bgColor border border-secondary rounded-md text-sm shadow-sm placeholder-transparent
                     focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent peer"
              placeholder="Email"
              required
            />
            <label className="absolute text-sm text-secondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-bgColor peer-focus:rounded-xl peer-focus:bg-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-3 py-2 bg-bgColor border border-secondary rounded-md text-sm shadow-sm placeholder-transparent resize-none
                     focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent peer custom-scrollbar"
              rows="4"
              placeholder="Message"
              required
            />
            <label className="absolute text-sm text-secondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-bgColor px-2 peer-focus:px-2 peer-focus:text-bgColor peer-focus:rounded-xl peer-focus:bg-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
              Message
            </label>
          </div>
          <button
            type="submit"
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-bgColor bg-primary hover:bg-secondary hover:rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ${
              !isFormValid || isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <ul className="flex flex-wrap justify-center gap-4 mt-14">
        {[
          {
            href: "https://github.com/yuviwolvy",
            text: "GitHub",
            icon: Github,
            color: "text-[#24292e]",
          },
          {
            href: "https://leetcode.com/u/yuvrajsinh-d-chauhan/",
            text: "LeetCode",
            icon: Leetcode,
            color: "text-[#f79e1b]",
          },
          {
            href: "https://www.linkedin.com/in/yuviwolvy",
            text: "LinkedIn",
            icon: LinkedinSquare,
            color: "text-[#0077b5]",
          },
          {
            href: "https://www.instagram.com/yuviwolvy",
            text: "Instagram",
            icon: Instagram,
            color: "text-[#e1306c]",
          },
          {
            href: "/Yuvrajsinh D. Chauhan.pdf",
            text: "Resume",
            icon: ArrowDownCircleFill,
            color: "text-[#88D66C]",
            download: "Yuvrajsinh D. Chauhan.pdf",
          },
        ].map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target={item.download ? "_self" : "_blank"}
              rel={item.download ? undefined : "noopener noreferrer"}
              className={`flex items-center justify-center w-8 h-8 ${item.color}`}
              download={item?.download}
              aria-label={item.text}
            >
              <item.icon className="w-8 h-8" />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-base sm:text-lg md:text-xl text-primary mb-4 mt-10 text-center">
        “If you don’t take risks, you can’t create a future.”
        <span className="font-bold"> —Monkey D. Luffy.</span>
      </p>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
