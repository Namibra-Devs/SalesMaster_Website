import { motion } from "framer-motion";

// Import local images (place these in /src/assets/images)
import review1 from "../assets/images/review1.jpg";
import review2 from "../assets/images/review2.png";
import review3 from "../assets/images/review3.png";
import review4 from "../assets/images/review4.png";

// Review data
const reviews = [
  {
    name: "Kofi Johnson",
    role: "Marketing Manager",
    image: review1,
    rating: 5,
    review:
      "SalesMaster completely transformed how we track our sales. The animations and analytics make it a joy to use daily!",
  },
  {
    name: "Michael Grace",
    role: "Client",
    image: review2,
    rating: 4,
    review:
      "The dashboard is sleek and intuitive. Our team adoption rate was instant thanks to the great user experience.",
  },
  {
    name: "Edward Kwame",
    role: "Product Designer",
    image: review3,
    rating: 5,
    review:
      "I love how smooth everything feels. The attention to detail in animations makes the app stand out.",
  },
  {
    name: "Daniel Ama",
    role: "Sales Director",
    image: review4,
    rating: 4,
    review:
      "Our team productivity has increased by 30% since switching to SalesMaster. Highly recommend it!",
  },
];

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

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
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        {/* Grid for reviews */}
        <div className="grid gap-8 md:grid-cols-4">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-blue-500 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.3)]"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-blue-500"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {r.name}
                </h3>
                <p className="text-sm text-gray-500">{r.role}</p>
                <Stars count={r.rating} />
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {r.review}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
