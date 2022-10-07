import TopBar from "./component/TopBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieListPage from "./movie/MovieListPage";
import MemeListPage from "./meme/MemeListPage";
import About from "./about/About";
import Home from "./home/Home";
import Error from "./error/Error";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/memes" element={<MemeListPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
