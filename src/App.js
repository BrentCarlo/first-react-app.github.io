import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Portfolio from "./components/Portfolio/Portfolio";
import Portfolio2 from "./components/Portfolio/portfolio2";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Portfolio />
      <Portfolio2 />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
