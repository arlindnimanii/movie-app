import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Movies from './pages/Movies';

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
    <footer className="py-5">
      <div className="container">
        <p className="p-0 m-0 text-center">Copyrights &copy; 2022-2023 MovieDB.</p>
      </div>
    </footer>
    </>
  );
}

export default App;
