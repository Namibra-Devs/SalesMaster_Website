import { motion } from "framer-motion";

// Import local images (place these in /src/assets/images)
import review1 from "../assets/images/pretty.jpg";
import review2 from "../assets/images/female.png";
import review3 from "../assets/images/female2.jpg";
import review4 from "../assets/images/female3.jpg";
import review5 from "../assets/images/male.jpg";

// Review data - updated with 5 reviews
const reviews = [
  {
    name: "Miss rawda",
    role: "CEO Pretty Diva",
    image: review1,
    rating: 5,
    review:
      "SalesMaster completely transformed how we track our sales. The animations and analytics make it a joy to use daily!",
  },
  {
    name: "Hajia Rabi ",
    role: "Britaqua CEO",
    image: review2,
    rating: 4,
    review:
      "The dashboard is sleek and intuitive. Our team adoption rate was instant thanks to the great user experience.",
  },
  {
    name: "Anita Agbesi",
    role: "Performe Plug CEO",
    image: review3,
    rating: 5,
    review:
      "I love how smooth everything feels. The attention to detail in animations makes the app stand out.",
  },
  {
    name: "Rabi Adama ",
    role: "Shakes and Dessert CEO",
    image: review4,
    rating: 4,
    review:
      "Our team productivity has increased by 30% since switching to SalesMaster. Highly recommend it!",
  },
  {
    name: "Mr. Philip Osei",
    role: "CEO evergreen supermarket",
    image: review5,
    rating: 5,
    review:
      "The inventory management features saved us countless hours. SalesMaster pays for itself in time savings alone!",
  },
];

// Duplicate reviews for seamless infinite scroll
const duplicatedReviews = [...reviews, ...reviews, ...reviews];

// Star rating component
const Stars = ({ count }) => (
  <div className="flex justify-center mt-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill={i < count ? "gold" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="gold"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.104 5.102a.563.563 0 00.475.345l5.516.401a.562.562 0 01.318.986l-4.195 3.733a.563.563 0 00-.182.557l1.285 5.33a.562.562 0 01-.84.61l-4.78-2.902a.563.563 0 00-.586 0l-4.78 2.902a.562.562 0 01-.84-.61l1.285-5.33a.563.563 0 00-.182-.557l-4.195-3.733a.562.562 0 01.318-.986l5.516-.401a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why businesses love using SalesMaster to transform their
            retail operations.
          </p>
        </motion.div>

        {/* Infinite Reviews Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />

          {/* Slider Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-10 md:space-x-16"
              animate={{
                x: [0, -2100], // Adjusted for larger reviews with spacing
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 55, // Slightly slower for readability
                  ease: "linear",
                },
              }}
            >
              {duplicatedReviews.map((review, index) => (
                <motion.div
                  key={`${review.name}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="bg-white rounded-3xl shadow-xl p-8 md:p-10 
                              hover:shadow-2xl transition-all duration-300 
                              cursor-pointer border border-transparent 
                              hover:border-blue-500 hover:shadow-[0_0_30px_4px_rgba(59,130,246,0.25)] 
                              w-[320px] md:w-[420px] h-[400px] md:h-[420px] 
                              flex flex-col justify-center"
                  >
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mb-5 border-4 border-blue-500"
                      />
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                        {review.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 mb-2">
                        {review.role}
                      </p>
                      <Stars count={review.rating} />
                      <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed line-clamp-4">
                        {review.review}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2 mt-10"
        >
          {reviews.map((_, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
            />
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mt-20"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              4.9/5
            </div>
            <div className="text-base md:text-lg text-gray-600">
              Average Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              100+
            </div>
            <div className="text-base md:text-lg text-gray-600">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              98%
            </div>
            <div className="text-base md:text-lg text-gray-600">
              Satisfaction
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              24/7
            </div>
            <div className="text-base md:text-lg text-gray-600">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
