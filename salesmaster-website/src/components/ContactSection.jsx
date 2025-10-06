import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

import logo from "../assets/images/salesmaster-logo.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  // Quick contact functions
  const handleCall = () => {
    window.open("tel:+223542095569", "_self");
  };

  const handleEmail = () => {
    window.open(
      "mailto:sales@namibra.io?subject=SalesMaster Support&body=Hello, I would like to get more information about SalesMaster.",
      "_self"
    );
  };

  const handleWhatsApp = () => {
    const message = "Hello, I'm interested in learning more about SalesMaster.";
    window.open(
      `https://wa.me/+233257887464 ?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 px-4 bg-white text-gray-800" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Updated with Quick Contacts */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
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

          {/* Quick Contact Options */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Quick Connect
            </h3>

            {/* Phone */}
            <motion.button
              onClick={handleCall}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Call Us
                </p>
                <p className="text-sm text-gray-600">+233542095569</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Phone className="w-5 h-5 text-blue-600" />
              </div>
            </motion.button>

            {/* Email */}
            <motion.button
              onClick={handleEmail}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200 hover:border-green-500 hover:bg-green-100 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  Email Us
                </p>
                <p className="text-sm text-gray-600">sales@namibra.io</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
            </motion.button>

            {/* WhatsApp */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200 hover:border-green-500 hover:bg-green-100 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  WhatsApp
                </p>
                <p className="text-sm text-gray-600">Quick chat support</p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MessageCircle className="w-5 h-5 text-green-600" />
              </div>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">
            Love to hear from you! <br /> Get in touch 👋
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300"
              />
            </div>

            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200 cursor-pointer w-full group font-medium"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-blue-700 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-lg z-0" />
            </motion.button>
          </form>

          {/* Response Time Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Quick Response
                </p>
                <p className="text-xs text-gray-600">
                  We typically reply within 2 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
