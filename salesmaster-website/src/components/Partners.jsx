import { motion } from "framer-motion";

const Partners = () => {
  // Partner logos from public/images/ directory
  const partners = [
    {
      id: 1,
      name: "RetailPro",
      logo: "/images/logo1.PNG"
    },
    {
      id: 2,
      name: "ShopEasy",
      logo: "/images/logo2.PNG"
    },
    {
      id: 3,
      name: "MarketPlus",
      logo: "/images/logo3.webp"
    },
    {
      id: 4,
      name: "StoreHub",
      logo: "/images/logo4.jpg"
    },
    {
      id: 5,
      name: "BizGrow",
      logo: "/images/logo5.PNG"
    }
  ];

  // Duplicate the partners array to create seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section id="partners" className="w-full py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Trusted By
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Valued Partners
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join successful businesses that trust SalesMaster to power their retail operations
          </p>
        </motion.div>

        {/* Infinite Logo Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
{/* Slider Container */}
<div className="overflow-hidden">
  <motion.div
    className="flex space-x-8 md:space-x-16 lg:space-x-24"
    animate={{
      x: [0, -1440], // Adjusted for 5 logos with spacing
    }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40, // Smooth, continuous scroll
        ease: "linear",
      },
    }}
  >
    {duplicatedPartners.map((partner, index) => (
      <div
        key={`${partner.id}-${index}`}
        className="flex-shrink-0 flex items-center justify-center"
      >
        <div
          className="bg-white rounded-full overflow-hidden shadow-md 
                     hover:shadow-lg hover:shadow-blue-200 
                     transition-all duration-300 group cursor-pointer 
                     w-[150px] h-[150px] md:w-[200px] md:h-[200px] 
                     flex items-center justify-center border border-gray-100 hover:border-blue-400"
        >
          {/* Full-size circular image */}
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-cover rounded-full 
                       opacity-85 group-hover:opacity-100 group-hover:scale-105 
                       transition-all duration-300"
          />
        </div>
      </div>
    ))}
  </motion.div>
</div>


        </motion.div>

        
      </div>
    </section>
  );
};

export default Partners;