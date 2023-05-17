import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
// import Work from './components/Work';


export default function App() {
  return (
    <div>
      
      <Router >
        <Header />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/work" element={<Work />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}



  







