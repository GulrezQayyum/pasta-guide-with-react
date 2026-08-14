
function PastaGallery({ pastas, onSelectPasta }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {pastas.map((pasta) => (
        <div
          key={pasta.id}
          onClick={() => onSelectPasta(pasta)}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden hover:scale-105 transform transition-transform max-w-sm"
        >
          {/* Image */}
          <div className="overflow-hidden h-32 bg-gray-200">
            <img
              src={pasta.image}
              alt={pasta.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h2 className="text-2xl font-bold text-orange-600 mb-2">{pasta.name}</h2>

            <p className="text-gray-700 text-sm mb-4">{pasta.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <span className="font-semibold text-gray-700 w-24">Cook Time:</span>
                <span className="text-gray-600">{pasta.cookTime}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold text-gray-700 w-24">Best Sauce:</span>
                <span className="text-orange-600 font-medium">{pasta.bestSauce}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-semibold text-gray-700 w-24">Origin:</span>
                <span className="text-gray-600">{pasta.origin}</span>
              </div>
            </div>

            {/* Click to view button */}
            <button
              onClick={() => onSelectPasta(pasta)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              View Recipe & Details →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PastaGallery;