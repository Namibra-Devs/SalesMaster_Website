import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useRef } from "react";
import aboutVideo from "../assets/images/about-video.mp4";

const About = () => {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  const handlePlayVideo = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.controls = true;
      if (overlayRef.current) {
        overlayRef.current.style.display = 'none';
      }
    }
  };

  return (
    <ParallaxProvider>
      <section id="about" className="w-full py-12 md:py-20 bg-white overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <h2 className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  About SalesMaster
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Revolutionizing Retail Management
                </h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  SalesMaster is built on the foundation of simplifying complex retail operations. 
                  We understand that running a business requires more than just processing sales—it 
                  demands intelligent tools that grow with you.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Real-time Analytics</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Make data-driven decisions with live sales insights and performance metrics.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Inventory Management</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Track stock levels, set automatic reorder points, and manage suppliers seamlessly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Multi-branch Support</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Scale effortlessly from a single store to multiple locations with centralized control.</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Support</div>
                </div>
              </div>
            </motion.div>
            
            {/* Right Video Section */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              {/* Video Section Title - Mobile optimized */}
              <div className="mb-4 lg:mb-6 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  See SalesMaster in Action
                </h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0">
                  Watch how our platform transforms daily operations in just 5 minutes
                </p>
              </div>

              <Parallax speed={-5}>
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-2xl group">
                  <video
                    ref={videoRef}
                    id="about-video"
                    className="w-full h-full object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                    preload="metadata"
                  >
                    <source src={aboutVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Enhanced Darker Overlay - Mobile optimized */}
                  <div
                    ref={overlayRef}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/70 via-black/50 to-black/70 transition-all duration-500 cursor-pointer group-hover:bg-black/60 p-4"
                    onClick={handlePlayVideo}
                  >
                    {/* Play Button Container */}
                    <div className="text-center text-white transform transition-all duration-500 group-hover:scale-105 ">
                      {/* Responsive Play Button */}
                      <button className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/95 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl lg:shadow-2xl mb-4 sm:mb-6 group/btn mx-auto cursor-pointer">
                        <svg 
                          className="w-8 h-8 sm:w-8 sm:h-8 lg:w-12 lg:h-12 text-blue-600 ml-0.5 sm:ml-1 transition-transform duration-300 group-hover/btn:scale-110" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </button>
                      
                      {/* Responsive Video Info */}
                      <div className="space-y-2 sm:space-y-3">
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide">Product Demo</p>
                        <p className="text-sm sm:text-base lg:text-lg opacity-90 font-medium">Watch Me!!</p>
                        <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-xs sm:text-sm opacity-80 flex-wrap gap-2">
                          <span className="flex items-center bg-black/30 px-2 py-1 rounded-full">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            5 mins
                          </span>
                          <span className="flex items-center bg-black/30 px-2 py-1 rounded-full">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            HD Quality
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Gradient for Text Readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  {/* Video Controls Hint - Mobile optimized */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm bg-black/50 px-3 py-1 rounded-full text-center">
                      Click to play
                    </p>
                  </div>
                </div>
              </Parallax>

              {/* Additional Video Features - Mobile optimized */}
              <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">Easy Setup</div>
                  <div className="text-xs text-gray-600">5 minutes</div>
                </div>
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">Free Trial</div>
                  <div className="text-xs text-gray-600">No card needed</div>
                </div>
                <div className="p-2 sm:p-3 bg-blue-100 rounded-lg">
                  <div className="text-xs sm:text-sm font-semibold text-gray-900">Support</div>
                  <div className="text-xs text-gray-600">24/7 help</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default About;