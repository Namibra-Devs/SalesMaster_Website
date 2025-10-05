import Benefits from "./components/Benefits";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import About from "./components/About";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Features from "./components/Features";

function App() {
  return (
    <div className="min-h-screen font-sans scroll-smooth">
      <Navbar />

      <Intro />

      <About />

      <Benefits />

      <Pricing />

      <FAQ />
      <Features />
      <CTA />
      <Reviews />

      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;
