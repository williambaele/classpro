import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Lessons from "./components/Lessons";
import Numbers from "./components/Numbers";
import TabLessons from "./components/TabLessons";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <HowItWorks />
        <Numbers />
        <Lessons />
        <Testimonials />
        <TabLessons />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
