import Benefits from "./components/Benefits";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen font-sans scroll-smooth">
      <Navbar />

      <Intro />

      <Benefits />

      <Pricing />
    
    <ContactSection />

    <Footer />
    
    </div>
  );
}

export default App;
