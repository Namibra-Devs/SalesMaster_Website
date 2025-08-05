import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen font-sans scroll-smooth">
      <Navbar />

      <section id="benefits" className="h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-4xl font-bold">Benefits Section</h1>
      </section>

      <section id="pricing" className="h-screen flex items-center justify-center bg-white">
        <h1 className="text-4xl font-bold">Pricing Section</h1>
      </section>

      <section id="contact" className="h-screen flex items-center justify-center bg-slate-100">
        <h1 className="text-4xl font-bold">Contact Us Section</h1>
      </section>
    </div>
  );
}

export default App;
