import { Routes, Route } from 'react-router-dom';

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {

  return (
    <Routes>
      <Route path="/" element={ <Index /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/work" element={ <Work /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;
