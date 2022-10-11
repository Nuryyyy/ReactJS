import TopBar from './component/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MovieListPage from './page/MovieListPage';
import Books from './page/book/Books';
import About from './page/About';
import Home from './page/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/books" element={<Books />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
