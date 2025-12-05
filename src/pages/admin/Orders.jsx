import axios from 'axios';
import { useEffect, useState } from 'react';
import DetailModal from '../../components/DetailModal';
import Loader from '../../components/Loader';

export default function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [paginate, setPaginate] = useState({page: 1, limit: 10});
  const [product, setProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const fetchProducts = async (page, limit) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/order/all`,{
        params: {
          page,
          limit,
        },
        withCredentials: true
      });
      setProducts(res.data.docs);
      setPaginate(prev => ({
      ...prev,
      page: res.data.page,
      next: res.data.hasNextPage,
      prev: res.data.hasPrevPage,
      totalDocs: res.data.totalDocs,
      totalPages: res.data.totalPages,
      pagingCounter: res.data.pagingCounter
    }));
    // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts(paginate.page, paginate.limit);
  }, [paginate.page, paginate.limit]);

  // Page Limit Change
  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    setPaginate(prev => ({...prev, limit: newLimit, page: 1}));
  }
  // Status Change
  const handleStatusChange = async (id, status) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/order/update/status/${id}`, 
        {status}, 
        {withCredentials: true});
    } catch (error) {
      console.log(error);
    } finally {
      fetchProducts(paginate.page, paginate.limit);
    }
  }
  return (
    <section className='bg-black min-h-screen'>
      <Loader />
      <div className='mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-14'>
        <div className='flex flex-wrap items-center justify-between'>
        <h1 className='text-white my-2'>Orders</h1>
        </div>
        <div className='w-full overflow-auto shadow shadow-white'>
          <table className='table'>
            <thead>
              <tr>
                <th>Products</th>
                <th>Order Status</th>
                <th>Payment Status</th>
                <th>Payment Method</th>
                <th>Total Cost</th>
                <th>Discount</th>
                <th>Created At</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody className="bg-white *:odd:bg-gray-100">
              {(products || []).map((product) => (
                <tr key={product?._id}>
                  <td>x {product?.lineItems.length}</td>
                  <td>
                    <select
                      value={product?.orderResult.status}
                      onChange={(e) => handleStatusChange(product._id, {orderStatus: e.target.value})}
                      disabled={product?.orderResult.status === 'refunded'}
                      className="border p-1 rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="refunded">Refunded</option>
                    </select>
                  </td>
                  <td>
                    <select
                      value={product?.orderResult.paymentStatus}
                      onChange={(e) => handleStatusChange(product._id, {paymentStatus: e.target.value})}
                      disabled={product?.orderResult.paymentStatus === 'paid'}
                      className="border p-1 rounded"
                    >
                      <option value="pending">Pending</option>
                      <option value="paid">Paid</option>
                      <option value="failed">Failed</option>
                    </select>
                  </td>
                  <td>{product?.orderResult?.paymentMethod === 'cod' ? 'Cash On Delivery' : 'Stripe'}</td>
                  <td>${product?.totalPrice}</td>
                  <td>${product.couponDiscount}</td>
                  <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                  <td className='flex  justify-center items-center text-white *:p-1 gap-1 *:text-xs'>
                    <button onClick={()=>{setProduct(product); setIsOpen(true)}} className='bg-green-600 p-1 rounded'>Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
                  <tr className=''>
                    <td>Page {paginate.page} of {paginate.totalPages}</td>
                    <td>Total Records: {paginate.pagingCounter} of {paginate.totalDocs}</td>
                    <td>Limit: 
                      <select name="limit" value={paginate.limit} onChange={handleLimitChange}>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </select>
                    </td>
                    <td className='flex gap-2'>
                      {paginate.prev && <button onClick={() => setPaginate(prev=>({...prev, page: Math.max(1,prev.page -1)}))}>Prev</button>}
                      {paginate.next && <button onClick={() => setPaginate(prev=>({...prev, page: prev.page +1}))}>Next</button>}
                    </td>
                  </tr>
            </tfoot>
          </table>
        </div>
        {
          isOpen && 
          <DetailModal isOpen={setIsOpen} product={product} />
        }
      </div>
    </section>
  )
}
