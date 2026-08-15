function PastaGallery({ pastas, onSelectPasta }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pastas.map((pasta) => (
        <div
          key={pasta.id}
          onClick={() => onSelectPasta(pasta)}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden hover:translate-y-[-8px] border border-gray-100 flex flex-col"
        >
          {/* Header Content (Name First) */}
          <div className="p-6 pb-4">
            <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              {pasta.name}
            </h2>
          </div>

          {/* Image Container */}
          <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={pasta.image}
              alt={pasta.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {pasta.origin}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
            <div>
              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 line-clamp-2">{pasta.description}</p>

              {/* Info Cards */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Cooking Time</p>
                    <p className="text-sm font-semibold text-gray-800">{pasta.cookTime}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-xl">🍴</span>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Best Sauce</p>
                    <p className="text-sm font-semibold text-orange-600">{pasta.bestSauce}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button with Top Margin Space */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectPasta(pasta);
              }}
              className="w-full mt-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg flex items-center justify-center gap-2"
            >
              <span>View Full Recipe</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PastaGallery;