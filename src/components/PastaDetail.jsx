import { useParams, useNavigate } from 'react-router-dom';

function PastaDetail({ pastas }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const pasta = pastas.find(p => p.id === parseInt(id));

  if (!pasta) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-orange-50 to-white">
        <div className="text-center">
          <p className="text-6xl mb-4">🤔</p>
          <p className="text-gray-500 text-xl mb-6">Pasta not found</p>
          <button
            onClick={() => navigate('/')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg"
          >
            ← Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={pasta.image}
          alt={pasta.name}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Title on image */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-2">{pasta.name}</h1>
          <p className="text-2xl opacity-90">🌍 {pasta.origin}</p>
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-6 left-6 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 w-14 h-14 flex items-center justify-center font-bold text-2xl transition-all shadow-lg hover:shadow-xl"
        >
          ←
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-2 border-orange-200 hover:shadow-lg transition-shadow">
            <p className="text-sm font-bold text-orange-700 mb-3 uppercase tracking-wider">⏱️ Cooking Time</p>
            <p className="text-3xl md:text-4xl font-bold text-orange-600">{pasta.cookTime}</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-2 border-red-200 hover:shadow-lg transition-shadow">
            <p className="text-sm font-bold text-red-700 mb-3 uppercase tracking-wider">🍝 Shape</p>
            <p className="text-lg font-bold text-red-600 leading-relaxed">{pasta.description}</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl border-2 border-amber-200 hover:shadow-lg transition-shadow">
            <p className="text-sm font-bold text-amber-700 mb-3 uppercase tracking-wider">🎯 Best Sauce</p>
            <p className="text-lg font-bold text-amber-600">{pasta.bestSauce}</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About This Pasta</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">{pasta.description}</p>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
        </div>

        {/* Recipe Section */}
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-12 rounded-3xl border-2 border-orange-200 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">🍴 Recipe & Preparation</h2>
          <p className="text-xl text-gray-800 leading-relaxed mb-8">{pasta.recipe}</p>
          
          {pasta.tips && (
            <div className="bg-white p-8 rounded-xl border-l-4 border-orange-500 shadow-md">
              <p className="text-sm font-bold text-orange-700 mb-3 uppercase tracking-wider">💡 Chef's Professional Tip</p>
              <p className="text-lg text-gray-800 leading-relaxed">{pasta.tips}</p>
            </div>
          )}
        </div>

        {/* Sauce Pairing Guide */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Perfect Sauce Pairings</h2>
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-10 rounded-2xl text-white shadow-xl">
            <p className="text-3xl font-bold mb-3">{pasta.bestSauce}</p>
            <p className="text-lg opacity-95">These sauces complement <strong>{pasta.name}</strong> perfectly due to its shape and texture. The key is letting the sauce coat and cling to every strand or curve of the pasta.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex gap-4 mb-16">
          <button
            onClick={() => navigate('/')}
            className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
          >
            ← Back to Gallery
          </button>
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 text-center py-8 border-t-4 border-orange-500">
        <p className="mb-2 text-lg">🍝 Built with React & Tailwind CSS | #FrontendChallenge</p>
        <p className="text-sm opacity-75">Learn • Code • Share • Eat Pasta 🍴</p>
      </footer>
    </div>
  );
}

export default PastaDetail;