import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import PastaGallery from './components/PastaGallery';
import PastaDetail from './components/PastaDetail';
import { pastas } from './data/pastas';
import './index.css';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredPastas = pastas.filter(pasta =>
    pasta.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pasta.bestSauce.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectPasta = (pasta) => {
    navigate(`/pasta/${pasta.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white py-12 px-4 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-10 text-6xl">🍝</div>
          <div className="absolute bottom-2 right-10 text-5xl">🥘</div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-3">🍝 Pasta Shape Guide</h1>
          <p className="text-lg md:text-xl opacity-95 max-w-2xl">Discover the stories behind your favorite pasta shapes. Learn their origins, ideal cooking times, and the best sauces to pair them with.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Search pasta by name or sauce type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-xl border-2 border-orange-300 focus:border-orange-600 focus:outline-none text-lg shadow-lg hover:shadow-xl transition-shadow placeholder-gray-500"
            />
          </div>
          <p className="text-gray-600 mt-4 text-sm font-semibold">
            ✨ Showing <span className="text-orange-600 font-bold">{filteredPastas.length}</span> pasta{filteredPastas.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Pasta Gallery */}
        {filteredPastas.length > 0 ? (
          <PastaGallery 
            pastas={filteredPastas} 
            onSelectPasta={handleSelectPasta}
          />
        ) : (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">🤔</p>
            <p className="text-gray-500 text-xl mb-4">No pasta found matching your search.</p>
            <p className="text-gray-400">Try searching for a different pasta type or sauce!</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 text-center py-8 mt-20 border-t-4 border-orange-500">
        <p className="mb-2 text-lg">🍝 Built with React & Tailwind CSS | #FrontendChallenge</p>
        <p className="text-sm opacity-75">Learn • Code • Share • Eat Pasta 🍴</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pasta/:id" element={<PastaDetail pastas={pastas} />} />
    </Routes>
  );
}

export default App;