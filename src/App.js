// import './App.scss'
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;
