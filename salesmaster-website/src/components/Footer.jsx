const Footer = () => {
  return (
    <footer className="bg-[#4386F1] text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg">SalesMaster</p>
          <p className="text-white-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-white-400 hover:text-white transition">Privacy Policy</a>
          <a href="#" className="text-white-400 hover:text-white transition">Terms of Service</a>
          <a href="#" className="text-white-400 hover:text-white transition">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
