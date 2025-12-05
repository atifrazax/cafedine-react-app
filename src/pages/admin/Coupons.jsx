import axios from "axios"
import { useEffect, useState } from 'react';
import AddCouponModal from "../../components/AddCouponModal";
import DelCouponModal from '../../components/DelCouponModal';
import Loader from "../../components/Loader";

export default function Coupons() {
  const [paginate, setPaginate] = useState({page: 1, limit: 6});
  const [coupons, setCoupons] = useState([]);
  const [addCoupon, setAddCoupon] = useState(false);
  const [deleteModal, setDeleteModal] = useState({isOpen: false, url: {}});
  const fetchCoupons = async (page, limit) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/all-coupons`,{
        params: {
          page,
          limit,
        },
        withCredentials: true
      });
      setCoupons(res.data.docs || []);
    //   console.log(res.data)
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
    fetchCoupons(paginate.page, paginate.limit);
  }, [paginate.page, paginate.limit]);
  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    setPaginate(prev => ({...prev, limit: newLimit, page: 1}));
  }
 
  return (
    <section className='bg-black min-h-screen'>
      <Loader />
      <div className='mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-14'>
        <div className='flex flex-wrap items-center justify-between'>
        <h1 className='text-white my-2'>Coupons</h1>
          <div className='flex flex-wrap gap-2 *:hover:bg-primary *:hover:text-white *:transition duration-300'>
            <button onClick={() => setAddCoupon(true)} className='bg-white/95 py-2 px-4'>Add Coupon</button>
          </div>
        </div>
        <div className='w-full overflow-auto shadow shadow-white'>
          <table className='table'>
            <thead>
              <tr>
                <th>Code</th>
                <th>Type</th>
                <th>Value</th>
                <th>Min-Subtotal</th>
                <th>Count</th>
                <th>Expiry</th>
                <th>Status At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-white *:odd:bg-gray-100">
              {coupons.map((coupon) => (
                <tr key={coupon?._id}>
                  <td>{coupon?.code}</td>
                  <td>{coupon?.discountType}</td>
                  <td>{coupon?.discountValue}</td>
                  <td>{coupon?.minSubtotal}</td>
                  <td>{coupon?.usedCount}</td>
                  <td>{new Date(coupon?.expiryDate).toLocaleDateString()}</td>
                  <td>{coupon?.active ? "Active" : "Inactive"}</td>
                  <td className='flex  justify-center items-center text-white *:p-1 gap-1 *:text-xs'>
                    <button onClick={() => setDeleteModal({isOpen: true, url: `/admin/delete-coupon/${coupon?._id}`})} className='bg-primary hover:bg-primary/50'>x</button>
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
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
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
        {/* Add Coupon */}
        {addCoupon && (
            <AddCouponModal setAddCoupon={setAddCoupon}/>
        )}
         {/* Delete Coupon */}
         {deleteModal.isOpen && 
          <DelCouponModal
          data={deleteModal}
          onClose={setDeleteModal}
          />
         }
      </div>
    </section>
  )
}
