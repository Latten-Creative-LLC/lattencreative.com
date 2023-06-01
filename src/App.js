import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import Index from "./pages/Index";
import Packages from "./pages/Packages";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {

  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={ <Index /> } />
      <Route path="/packages" element={ <Packages /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/work" element={ <Work /> } />
      <Route path="/contact" element={ <Contact /> } />
    </Routes>
  );
}

export default App;
