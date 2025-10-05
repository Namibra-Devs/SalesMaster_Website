import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import faqImage from "../assets/images/image-faq.jpg"; // Import your FAQ image

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly can I set up SalesMaster for my business?",
      answer: "Most businesses can get SalesMaster up and running in under 30 minutes. Our intuitive setup wizard guides you through the process step by step, and you can start processing sales immediately after installation."
    },
    {
      question: "Does SalesMaster work offline?",
      answer: "Yes! SalesMaster includes offline mode functionality. You can continue processing sales, managing inventory, and generating reports even without an internet connection. All data syncs automatically when connectivity is restored."
    },
    {
      question: "Can I manage multiple store locations with one account?",
      answer: "Absolutely. SalesMaster's multi-branch support allows you to manage inventory, employees, and sales across all your locations from a single dashboard. Each location maintains its own data while contributing to centralized reporting."
    },
    {
      question: "What kind of customer support do you offer?",
      answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone. All plans include access to our comprehensive knowledge base, video tutorials, and dedicated account managers for enterprise clients."
    },
    {
      question: "Is my sales and customer data secure?",
      answer: "Security is our top priority. SalesMaster uses bank-level encryption, regular security audits, and complies with PCI DSS standards. Your data is backed up in multiple secure locations and we never share your information with third parties."
    },
    {
      question: "Can I integrate with other tools I'm already using?",
      answer: "Yes, SalesMaster offers extensive integration capabilities. Connect with popular accounting software like QuickBooks and Xero, e-commerce platforms like Shopify, payment processors, and marketing tools through our REST API."
    },
    {
      question: "What's included in the free trial?",
      answer: "Our 14-day free trial gives you full access to all SalesMaster features. You can process unlimited sales, manage inventory, generate reports, and test all integrations. No credit card required to get started."
    },
    {
      question: "How does the pricing work for growing businesses?",
      answer: "We offer scalable pricing plans that grow with your business. Start with our Basic plan for single stores, upgrade to Professional for multiple locations, or choose Enterprise for advanced features and custom solutions. Volume discounts available."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 md:mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            FAQs
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Get answers to common questions about SalesMaster setup, features and pricing.
          </p>
        </motion.div>

        {/* Main Content - All FAQs on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* All FAQ Items - Left Side (2/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 rounded-xl"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 bg-blue-50 rounded-full flex items-center justify-center"
                  >
                    <svg 
                      className="w-3 h-3 md:w-4 md:h-4 text-blue-600 transition-colors duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                        <div className="w-12 h-0.5 bg-blue-100 rounded-full mb-4"></div>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Section - Right Side (1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative lg:sticky lg:top-8"
          >
            <div className="bg-blue-100 rounded-2xl p-6 md:p-8 h-full flex flex-col items-center justify-center text-center">
              <motion.img
                src={faqImage}
                alt="SalesMaster FAQ Illustration"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="w-full max-w-xs mx-auto mb-6 rounded-lg"
              />
              
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Our support team is here to help you get the most out of SalesMaster.
                </p>
                
               {/* Quick Support Options */}
<div className="space-y-3">
  {/* Phone Support - Click to Call */}
  <a 
    href="tel:+2232440982313" 
    className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
  >
    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-200">
      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
    </div>
    <div className="text-left flex-1">
      <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">Call Support</p>
      <p className="text-gray-600 text-xs">+223 244 098 2313</p>
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    </div>
  </a>
  
  {/* Email Support - Click to Email */}
  <a 
    href="mailto:support@salesmaster.com?subject=SalesMaster Support&body=Hello, I need help with..." 
    className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
  >
    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
      </svg>
    </div>
    <div className="text-left flex-1">
      <p className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors duration-200">Email Support</p>
      <p className="text-gray-600 text-xs">support@salesmaster.com</p>
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
  </a>
  
 

  {/* WhatsApp Support - Additional Option */}
  <a 
    href="https://wa.me/2232440982313?text=Hello%20SalesMaster%20Support,%20I%20need%20help%20with..." 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-md transition-all duration-200 cursor-pointer group"
  >
    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-200">
      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
      </svg>
    </div>
    <div className="text-left flex-1">
      <p className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors duration-200">WhatsApp</p>
      <p className="text-gray-600 text-xs">Quick messaging</p>
    </div>
    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </div>
  </a>
</div>

                {/* Support CTA Buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <button className="relative overflow-hidden px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition duration-200 cursor-pointer group font-medium text-sm">
                    <span className="relative z-10">Contact Support Now</span>
                    <span className="absolute inset-0 bg-blue-700 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center rounded-lg z-0" />
                  </button>
                
                </div>
              </div>
            </div>

          
          </motion.div>
        </div>

    
      </div>
    </section>
  );
};

export default FAQ;