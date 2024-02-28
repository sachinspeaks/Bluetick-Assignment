import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <section>
        <Hero />
        <About />
        <Blogs />
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
