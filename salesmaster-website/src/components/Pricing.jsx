import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";

const pricingPlans = [
  {
    title: "Free",
    price: "0",
    description: "Great for individuals and testing.",
    features: ["Basic POS functions", "Limited inventory", "Community support"],
    buttonLabel: "Get Started",
  },
  {
    title: "Pro",
    price: "59",
    description: "Perfect for growing teams.",
    features: ["All Free features", "Advanced reports", "Multiple outlets"],
    buttonLabel: "Upgrade to Pro",
  },
  {
    title: "Enterprise",
    price: "199",
    description: "Best for large scale operations.",
    features: ["All Pro features", "Custom solutions", "Dedicated support"],
    buttonLabel: "Contact Sales",
  },
];

const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPlan(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Request submitted successfully!");
    closeModal();
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <Toaster position="top-right" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-gray-800"
      >
        Pricing Plans
      </motion.h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="rounded-2xl shadow-md bg-white p-6 flex flex-col justify-between border border-gray-200 hover:scale-95 transition-transform duration-300"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-1">GH₵{plan.price}/mo</p>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
              <div className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="text-blue-700 bg-blue-100 rounded-full" size={20} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
             <button
               onClick={() => openModal(plan.title)}
              className="relative overflow-hidden px-4 py-2 text-sm my-2 rounded-sm bg-blue-600 text-white hover:text-[#4386f1] transition duration-200 cursor-pointer w-fit group"
            >
              <span className="relative z-10"> {plan.buttonLabel}</span>
              <span className="absolute inset-0 bg-white  scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
            </button>
            
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-md rounded-2xl bg-white p-6 shadow-xl relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 shadow-md rounded-full cursor-pointer"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <Dialog.Title className="text-xl font-semibold mb-4">Request {selectedPlan}</Dialog.Title>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows="3"
                placeholder="Message (Optional)"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Pricing;