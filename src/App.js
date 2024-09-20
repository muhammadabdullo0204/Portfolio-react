import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import MainAbout from './Main-About/MainAbout';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';
import Main from './Main/Main';
import NotFound from './NotFound/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
