import { useState } from 'react';
import PastaGallery from './components/PastaGallery';
import PastaDetail from './components/PastaDetail';
import { pastas } from './data/pastas';
import './index.css';

function App() {
  // State for search/filter
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for selected pasta (to show modal)
  const [selectedPasta, setSelectedPasta] = useState(null);

  // Filter pastas based on search
  const filteredPastas = pastas.filter(pasta =>
    pasta.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pasta.bestSauce.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">🍝 Pasta Shape Guide</h1>
          <p className="text-lg opacity-90">Learn about different pasta types, their origins, and perfect pairings</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search pasta by name or sauce type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-600 focus:outline-none text-lg shadow-md"
          />
          <p className="text-gray-600 mt-2 text-sm">
            Found {filteredPastas.length} pasta{filteredPastas.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Pasta Gallery */}
        <PastaGallery 
          pastas={filteredPastas} 
          onSelectPasta={setSelectedPasta}
        />

        {/* No results message */}
        {filteredPastas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No pasta found. Try a different search!</p>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedPasta && (
        <PastaDetail 
          pasta={selectedPasta} 
          onClose={() => setSelectedPasta(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-16">
        <p>Built with React | #FrontendChallenge | Learn, Code, Share</p>
      </footer>
    </div>
  );
}

export default App;