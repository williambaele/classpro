import { useEffect } from "react";
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
  //WEBHOOK
  const sendWebhookNewClient = () => {
    const webhookUrl =
      "https://discord.com/api/webhooks/1138393285078040657/HUbqq-LHi2084wPYNFVTNtMTb8h7TCj68D09MHWlUQZR9cLyAfQ1bAh6mcnz0va0xw6E";

    const data = {
      content: "Someone checked ClassPro",
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {})
      .catch((error) => {
        console.error("Error sending webhook:", error);
      });
  };

  useEffect(() => {
    sendWebhookNewClient();
  }, []);

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
