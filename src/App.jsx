import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetails';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;