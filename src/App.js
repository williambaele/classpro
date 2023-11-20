import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Lessons from "./components/Lessons";
import Numbers from "./components/Numbers";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Lessons />
      <Numbers />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
