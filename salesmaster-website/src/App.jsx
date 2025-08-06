import Benefits from "./components/Benefits";
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
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-slate-100"
      >
        <h1 className="text-4xl font-bold">Contact Us Section</h1>
      </section>
    </div>
  );
}

export default App;
