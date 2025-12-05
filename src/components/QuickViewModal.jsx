
export default function QuickViewModal({ isOpen, onClose, product, addToCart, isAdded, setIsAdded }) {
  console.log(product);
  return (
    <div refName="main-modal" open={isOpen} as="div" className="relative z-10" onClose={onClose}>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div refName="dialog" className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
          <div className="flex justify-between items-start">
            <title className="text-2xl font-bold">{product?.name}</title>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              ✕
            </button>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-6">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full sm:w-1/2 rounded-xl object-cover"
            />

            <div className="sm:w-1/2 flex flex-col justify-between">
              <p className="text-gray-700 mb-4">{product?.description}</p>
              <div>
                <p className="text-xl font-semibold text-gray-600">${product?.price}</p>
                <button key={product?._id} disabled={isAdded === product?._id}
                onClick={()=>{addToCart({_id:product?._id, name: product?.name, price: product?.salePrice > 0 ? product?.salePrice : product?.price, img: product?.image});
                setIsAdded(product?._id)}}
                className={`mt-4 w-full bg-primary text-white py-2 px-4 hover:bg-red-500 transition duration-300
                ${isAdded === product?._id ? 'scale-100 bg-[#BF124D]! cursor-none' : 'scale-95'}`}>
                    {isAdded === product?._id ? 'Added To Cart' : 'Add To Cart'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
