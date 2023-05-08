import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}



  







