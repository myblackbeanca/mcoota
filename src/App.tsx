import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import SinglePage from './pages/SinglePage';
import AlbumCountdown from './pages/AlbumCountdown';
import { singles } from './data/singles';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AlbumCountdown />} />
            {singles.map((single) => (
              <Route
                key={single.id}
                path={`/single/${single.slug}`}
                element={<SinglePage single={single} />}
              />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;