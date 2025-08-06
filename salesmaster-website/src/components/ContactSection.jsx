import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState } from "react";

import logo from "../assets/images/salesmaster-logo.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-4 bg-white text-gray-800" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <img src={logo} alt="SalesMaster Logo" className="h-13 w-13" />
            <h2 className="text-3xl font-bold">SalesMaster</h2>
          </div>
          <p className="text-gray-500 text-lg">
            Empowering businesses with smart sales tools.
          </p>
          <p className="text-gray-500 text-lg">
            Reach out for product support or inquiries anytime.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
           Love to hear from you! <br /> Get in touch 👋
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
            <button
               type="submit"
              className="relative overflow-hidden px-4 py-2  my-2 rounded-sm bg-blue-600 text-white hover:text-[#4386f1] transition duration-200 cursor-pointer w-full group"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white  scale-0 group-hover:scale-100 transition-transform duration-500 origin-left rounded-sm z-0" />
            </button>
           
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
