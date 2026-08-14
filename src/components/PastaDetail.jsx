
function PastaDetail({ pasta, onClose }) {
  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Header with close button */}
        <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">{pasta.name}</h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold hover:opacity-80 transition-opacity"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Pasta Image */}
          <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
            <img
              src={pasta.image}
              alt={pasta.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">About This Pasta</h3>
            <p className="text-gray-700 leading-relaxed">{pasta.description}</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 font-semibold">COOKING TIME</p>
              <p className="text-xl font-bold text-orange-600">{pasta.cookTime}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 font-semibold">ORIGIN</p>
              <p className="text-xl font-bold text-orange-600">{pasta.origin}</p>
            </div>
          </div>

          {/* Best Sauce */}
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
            <p className="text-sm text-gray-600 font-semibold mb-2">BEST SAUCE PAIRINGS</p>
            <p className="text-lg font-bold text-red-600">{pasta.bestSauce}</p>
          </div>

          {/* Recipe */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Recipe Tip</h3>
            <p className="text-gray-700 leading-relaxed italic border-l-4 border-orange-500 pl-4">
              {pasta.recipe}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default PastaDetail;