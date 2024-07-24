import React, { useRef, useState } from "react";
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_34zfppd",
        "template_br26u9k",
        e.target,
        "dfuT-0kdmn4wYwm2g"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success(
            "Thank you for contacting me! I will get back to you soon."
          );
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Sorry, something went wrong. Please try again.");
        }
      );

    setFormData({
      from_name: "",
      from_email: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center p-8">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
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
      </div>

      {/* <div className="w-full md:w-1/2 p-4 flex justify-center items-center mt-8"> */}
      <ul className="flex flex-wrap justify-center gap-4 mt-4">
        {[
          {
            href: "https://github.com/yuviwolvy",
            text: "Let's build together!",
            icon: Github,
            color:
              "text-[#24292e] hover:text-bgColor hover:drop-shadow-[0_1.2px_1.2px_#24292e]",
          },
          {
            href: "https://leetcode.com/u/yuvrajsinh-d-chauhan/",
            text: "Check my stat!",
            icon: Leetcode,
            color:
              "text-[#f79e1b] hover:text-bgColor hover:drop-shadow-[0_1.2px_1.2px_#f79e1b]",
          },
          {
            href: "https://www.linkedin.com/in/yuviwolvy",
            text: "Let's connect!",
            icon: LinkedinSquare,
            color:
              "text-[#0077b5] hover:text-bgColor hover:drop-shadow-[0_1.2px_1.2px_#0077B5]",
          },
          {
            href: "https://www.instagram.com/yuviwolvy",
            text: "Follow me!",
            icon: Instagram,
            color:
              "text-[#e1306c] hover:text-bgColor hover:drop-shadow-[0_1.2px_1.2px_#e1306c]",
          },
          {
            href: "/Yuvrajsinh D. Chauhan.pdf",
            text: "Download my Resume",
            icon: ArrowDownCircleFill,
            color:
              "text-[#88D66C] hover:text-bgColor hover:drop-shadow-[0_1.2px_1.2px_#88D66C]",
            download: "Yuvrajsinh D. Chauhan.pdf",
          },
        ].map((item, index) => (
          <li
            key={index}
            href={item.href}
            target={item.download ? "_self" : "_blank"}
            rel={item.download ? undefined : "noopener noreferrer"}
            className={`${item.color} group flex items-center gap-2 w-8 h-8`}
            download={item.download}
          >
            <item.icon className="w-8 h-8 group-hover:hidden" />
            <span className="hidden group-hover:block group-hover:font-extrabold group-hover:text-2xl ">
              {item.text}
            </span>
          </li>
        ))}
      </ul>
      {/* </div> */}
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
