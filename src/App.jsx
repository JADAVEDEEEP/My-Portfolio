import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainApp from "./MainApp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page (your original content) */}
        <Route path="/" element={<MainApp />} />

        {/* Separate Projects page */}
        <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
