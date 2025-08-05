import { motion } from "framer-motion";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import benefitImage from "../assets/images/benefit-illustration.png";

const Intro = () => {
  return (
    <ParallaxProvider>
      <section
        id="Intro"
        className="w-full py-20 bg-[#F9FAFB] overflow-hidden mt-5"
      >
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The All-in-One POS to Run and Grow Your Business
          </h1>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10">
            Streamline your sales, manage inventory in real-time, and make
            data-driven decisions. From a single shop to a multi-branch
            enterprise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="relative overflow-hidden px-6 py-3 rounded-sm border border-blue-600 hover:text-white text-blue-600 transition duration-200 cursor-pointer group">
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
            </button>
            <button className="relative overflow-hidden px-6 py-3 rounded-sm bg-blue-600 text-white hover:text-[#4386f1] transition duration-200 cursor-pointer group">
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
            </button>
          </div>
        </motion.div>

        {/* Bottom Parallax Image */}
        <div className="mt-16 px-4 md:px-10 max-w-6xl mx-auto">
          <Parallax speed={-10}>
            <motion.img
              src={benefitImage}
              alt="SalesMaster Benefits"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Intro;
