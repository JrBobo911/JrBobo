import "./App.css";
import About from "./sections/About";
import Collections from "./sections/Collections";
import FAQs from "./sections/FAQ";
import Partner from "./sections/Partner";
import Roadmap from "./sections/Roadmap";
import Socials from "./sections/Socials";
import Tokenomics from "./sections/Tokenomics";
import Hero from '/src/sections/Hero';
import Footer from '/src/components/Footer'
import Right from "./sections/Right";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Partner />
      <Tokenomics />
      <Collections />
      <Roadmap />
      <FAQs />
      <Socials />
      <Footer />
      <Right />
    </>
  );
}

export default App;
