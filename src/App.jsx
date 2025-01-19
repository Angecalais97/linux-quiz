import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import FileManagementQuiz from './components/FileManagementQuiz';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<FileManagementQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
