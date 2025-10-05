import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="cta" className="w-full py-16 md:py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h2 className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
              Ready to Get Started?
            </h2>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Transform Your Retail Business Today
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-lg">
              Join thousands of successful retailers who use SalesMaster to streamline operations, 
              boost sales, and grow their business effortlessly.
            </p>

            {/* Benefits List */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 font-medium">14-day free trial - No credit card required</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 font-medium">Setup in under 5 minutes</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 font-medium">24/7 expert support included</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-blue-200">Businesses</div>
              </div>
              <div className="h-8 w-px bg-blue-500"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-blue-200">Satisfaction</div>
              </div>
              <div className="h-8 w-px bg-blue-500"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Start Your Free Trial
                </h3>
                <p className="text-gray-600">
                  No credit card required • Full access to all features
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 mb-6">
                <button className="w-full relative overflow-hidden px-6 py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition duration-300 cursor-pointer group font-semibold text-lg">
                  <span className="relative z-10">Start Free Trial - 14 Days</span>
                  <span className="absolute inset-0 bg-blue-700 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-xl z-0" />
                </button>
                
                <button className="w-full relative overflow-hidden px-6 py-4 rounded-xl border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition duration-300 cursor-pointer group font-semibold">
                  <span className="relative z-10">Schedule Live Demo</span>
                  <span className="absolute inset-0 bg-blue-50 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-xl z-0" />
                </button>
              </div>

              {/* Additional Options */}
              <div className="text-center space-y-4">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                  Compare Pricing Plans →
                </button>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-500 text-sm mb-3">Need help deciding?</p>
                  <button className="text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Talk to Sales Expert</span>
                  </button>
                </div>
              </div>

              {/* Security Badges */}
              <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-xs">Secure & Encrypted</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-xs">PCI Compliant</span>
                </div>
              </div>
            </div>

           
          </motion.div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-blue-500"
        >
          <p className="text-blue-200 text-sm mb-4">Trusted by retailers worldwide</p>
          
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;