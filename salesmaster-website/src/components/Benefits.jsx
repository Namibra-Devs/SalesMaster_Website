import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { CheckCircle } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import reportImg from "../assets/images/report.png";
import inventoryImg from "../assets/images/inventory-panel.png";

const Benefits = () => {
  // State for interactivity
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 999,
      quantity: 1,
      serial: "#SN12934",
    },
  ]);
  const [customerType, setCustomerType] = useState("Select Type");
  const [paymentMethod, setPaymentMethod] = useState("Payment Method");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Handlers
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      toast.success("Searching for products...", { duration: 2000 });
    }
  };

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
    toast.success(`Quantity updated!`, { duration: 1500 });
  };

  const handleDeleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.success("Item removed from cart!", { duration: 1500 });
  };

  const handleClearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared!", { duration: 1500 });
  };

  const handleApplyCoupon = () => {
    toast.success("Coupon applied successfully!", { duration: 2000 });
  };

  const handleAddPayment = () => {
    if (paymentMethod === "Payment Method" || !paymentAmount) {
      toast.error("Please select a payment method and enter an amount.", {
        duration: 2000,
      });
      return;
    }
    toast.success(`Payment of $${paymentAmount} added via ${paymentMethod}!`, {
      duration: 2000,
    });
    setPaymentAmount("");
  };

  const handleCompleteSale = () => {
    setModalContent("Sale completed successfully!");
    setIsModalOpen(true);
    setOrderNotes("");
    setCartItems([]);
    setPaymentAmount("");
    setPaymentMethod("Payment Method");
  };

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Calculate order summary
  const orderDiscount = 20;
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subTotal * 0.08;
  const total = subTotal - orderDiscount + tax;

  return (
    <section id="benefits" className="w-full py-20 bg-gray-50">
      <Toaster position="top-right" />
      <h1 className="text-center text-5xl mb-10 font-bold text-gray-800">
        Why Choose Our Platform
      </h1>
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-20">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10"
        >
          {/* Left - Forms */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <h2 className="text-lg font-semibold text-gray-800">
                    Product Scanner
                  </h2>
                </div>
              </div>
              <input
                type="text"
                placeholder="Search product..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <p className="text-sm text-gray-500 mt-2">
                Scan barcode or type to search
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <h2 className="text-lg font-semibold text-gray-800">
                    Shopping Cart
                  </h2>
                </div>
                <div className="flex gap-4 text-sm text-blue-600 cursor-pointer">
                  <span onClick={handleClearCart} className="hover:underline">
                    Clear
                  </span>
                  {cartItems.length > 0 && (
                    <span
                      onClick={() => handleDeleteItem(cartItems[0].id)}
                      className="hover:underline"
                    >
                      Delete
                    </span>
                  )}
                </div>
              </div>
              {cartItems.map((item) => (
                <div key={item.id} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{item.name}</span>
                    <span className="text-gray-700">${item.price}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">
                    {item.serial}
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-red-500">Discount</span>
                    <span className="text-gray-600">$50</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-2">
                    <span className="text-red-500">Tracked Item</span>
                    <span className="text-gray-600">⚠️</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Cards */}
          <div className="flex flex-col gap-6">
            {/* POS Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-md p-6 rounded-xl border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="text-green-500 w-6 h-6" />
                <h3 className="text-xl font-semibold text-gray-800">
                  POS System
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Our POS system supports smooth transactions, inventory tracking,
                and real-time insights.
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Integrated with scanner, customer cards, and full payment flows.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Designed for retail, wholesale, and mobile experiences.
              </p>
              <button
                onClick={() =>
                  openModal("Explore our POS system features in detail!")
                }
                className="relative overflow-hidden px-4 py-2 rounded-sm border border-blue-600 hover:text-white text-blue-600 transition duration-200 cursor-pointer w-fit group"
              >
                <span className="relative z-10">Explore POS</span>
                <span className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
              </button>
            </motion.div>

            {/* Customer Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-2 mb-4 ">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Customer Card
                </h2>
              </div>
              <Menu as="div" className="relative">
                <Menu.Button className="w-full px-3 py-2 border border-gray-300 rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {customerType}
                </Menu.Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => {
                            setCustomerType("Regular");
                            toast.success("Customer type set to Regular", {
                              duration: 1500,
                            });
                          }}
                          className={`px-4 py-2 text-sm ${active ? "bg-blue-100" : ""}`}
                        >
                          Regular
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => {
                            setCustomerType("VIP");
                            toast.success("Customer type set to VIP", {
                              duration: 1500,
                            });
                          }}
                          className={`px-4 py-2 text-sm ${active ? "bg-blue-100" : ""}`}
                        >
                          VIP
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                onClick={() => openModal("Add a new customer card")}
                className="relative overflow-hidden px-4 py-2 text-sm mt-3 rounded-sm bg-blue-600 text-white hover:text-[#4386f1] transition duration-200 cursor-pointer w-fit group"
              >
                <span className="relative z-10">+ New</span>
                <span className="absolute inset-0 bg-white  scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between text-sm mb-2">
                <span>Coupon Code</span>
                <span
                  onClick={handleApplyCoupon}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Apply
                </span>
              </div>
              <div className="text-sm text-gray-600">
                <div className="flex justify-between mb-1">
                  <span>Order Discount</span>
                  <span>${orderDiscount}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Sub Total</span>
                  <span>${subTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Payment
              </h2>
              <Menu as="div" className="relative mb-2">
                <Menu.Button className="w-full px-3 py-2 border border-gray-300 rounded-md text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                  {paymentMethod}
                </Menu.Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => {
                            setPaymentMethod("Credit Card");
                            toast.success("Payment method set to Credit Card", {
                              duration: 1500,
                            });
                          }}
                          className={`px-4 py-2 text-sm ${active ? "bg-blue-100" : ""}`}
                        >
                          Credit Card
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => {
                            setPaymentMethod("Cash");
                            toast.success("Payment method set to Cash", {
                              duration: 1500,
                            });
                          }}
                          className={`px-4 py-2 text-sm ${active ? "bg-blue-100" : ""}`}
                        >
                          Cash
                        </div>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
              <input
                type="number"
                placeholder="Amount"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleAddPayment}
                className="relative overflow-hidden px-4 py-2 text-sm my-2 rounded-sm bg-blue-600 text-white hover:text-[#4386f1] transition duration-200 cursor-pointer w-fit group"
              >
                <span className="relative z-10">+ Add Payment</span>
                <span className="absolute inset-0 bg-white  scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
              </button>

              <div className="flex justify-between font-semibold">
                <span>Total Paid</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Order Notes */}
            <textarea
              placeholder="Order Notes"
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            ></textarea>
            <button
              onClick={handleCompleteSale}
              className="relative overflow-hidden px-4 py-2 rounded-sm border border-blue-600 hover:text-white text-blue-600 transition duration-200 cursor-pointer w-fit self-end group"
            >
              <span className="relative z-10">Complete Sale</span>
              <span className="absolute inset-0 bg-blue-600 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
            </button>
          </div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left - Info */}
          <div className="flex flex-col gap-8 ">
            <CheckCircle className="text-green-600 w-20 h-20" />

            <div className="p-4 bg-[#E3F0F8] rounded-sm">
              <h3 className="text-2xl font-bold text-gray-800">
                Inventory Management
              </h3>
            </div>
            <p className="text-gray-600">
              Track stock levels, automate reorders, and manage inventory across
              locations.
            </p>
            <p className="text-gray-600">
              Get notified when items are low and avoid stockouts.
            </p>
            <p className="text-gray-600">
              Full support for barcode scanning and SKU management.
            </p>
            <button
              onClick={() =>
                openModal("Explore inventory management features!")
              }
              className="relative overflow-hidden px-4 py-2 text-sm my-2 rounded-sm bg-blue-600 text-white hover:text-[#4386f1] transition duration-200 cursor-pointer w-fit group"
            >
              <span className="relative z-10">Manage Inventory</span>
              <span className="absolute inset-0 bg-white  scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
            </button>
          </div>

          {/* Right - Image */}
          <img
            src={inventoryImg}
            alt="Inventory Admin Panel"
            className="w-full rounded-xl shadow-md"
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          {/* Left - Image */}
          <img
            src={reportImg}
            alt="Reporting Image"
            className="w-full rounded-xl shadow-md"
          />

          {/* Right - Info */}
          <div className="flex flex-col gap-8">
            <CheckCircle className="text-green-600 w-20 h-20" />
            <div className="p-4 bg-[#E3F0F8] rounded-sm">
              <h3 className="text-2xl font-bold text-gray-800">
                Reporting and Insights
              </h3>
            </div>
            <p className="text-gray-600">
              Visualize sales data, track trends, and make informed decisions.
            </p>
            <p className="text-gray-600">
              Export reports, track KPIs, and monitor performance in real-time.
            </p>
            <p className="text-gray-600">
              Set up alerts and automated summaries to stay updated.
            </p>
            <button
              onClick={() => openModal("View detailed reports and insights!")}
              className="relative overflow-hidden px-4 py-2 text-sm my-2 rounded-sm bg-blue-600 text-white hover:text-[#4386f1] transition duration-200 cursor-pointer w-fit group"
            >
              <span className="relative z-10">View Reports</span>
              <span className="absolute inset-0 bg-white  scale-0 group-hover:scale-100 transition-transform duration-500 origin-center rounded-sm z-0" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <Transition appear show={isModalOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsModalOpen(false)}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold text-gray-800"
                  >
                    Action Confirmation
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{modalContent}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Benefits;
