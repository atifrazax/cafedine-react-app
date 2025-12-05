
export default function DetailModal({ isOpen, product }) {

    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] sm:w-1/2 relative">
        <button
          onClick={()=>isOpen(false)}
          className="absolute top-2 right-2 text-black hover:text-gray-800"
        >
          ✖
        </button>
        <h4 className="text-center mb-4">Order Detail</h4>
        <div>
          <span>Total Amount - ${product.totalPrice}</span>
          <div className="bg-gray-100">Order Status - <span className="capitalize">{product.orderResult.status}</span></div>
          <div>Payment Status - <span className="capitalize">{product.orderResult.paymentMethod} / {product.orderResult.paymentStatus}</span></div>
          <div className="bg-gray-100">To - <span className="capitalize">{product.shippingAddress.lname} - {product.shippingAddress.zipCode} {product.shippingAddress.address}</span></div>
          {product.lineItems.map((item, index)=>(
              <div key={index} className="flex gap-2 py-2 pt-6 even:bg-gray-100">
              <div><img src={item.image} alt={item.name} className="w-16 h-auto" loading="lazy"/></div>
              <div>{item.name}</div>
              <div><span>x {item.qty}</span></div>
              </div>
          ))}
        </div>

      </div>
    </div>
  );
}
