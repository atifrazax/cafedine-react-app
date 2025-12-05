import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UpdateModal from '../../components/UpdateModal';
import DeleteModal from '../../components/DeleteModal';
import Loader from '../../components/Loader';
import formatImage from '../../utils/formatImage';
export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [paginate, setPaginate] = useState({page: 1, limit: 5});
  const [product, setProduct] = useState({});
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const fetchProducts = async (page, limit) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/products`,{
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
      console.log(error.response.data?.message || error.message);
    }
  }
  useEffect(() => {
    fetchProducts(paginate.page, paginate.limit);
  }, [paginate.page, paginate.limit]);

  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    setPaginate(prev => ({...prev, limit: newLimit, page: 1}));
  }
  const handleUpdate = (product) => {
    setProduct(product);
    setUpdateModal(true);
  }
  const handleDelete = (product) => {
    setProduct(product);
    setDeleteModal(true);
  }
  return (
    <section className='bg-black min-h-screen'>
      <Loader />
      <div className='mx-2 p-6'>
        <div className='flex flex-wrap items-center justify-between'>
        <h1 className='text-white my-2'>Products</h1>
          <div className='flex flex-wrap gap-2 *:hover:bg-primary *:hover:text-white *:transition duration-300'>
            <Link to='/admin/add-product' className='bg-white/95 py-2 px-4'>Add Product</Link>
          </div>
        </div>
        <div className='w-full overflow-auto shadow shadow-white'>
          <table className='table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Sale Price</th>
                <th>Description</th>
                <th>Stock</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-white *:odd:bg-gray-100">
              {products.map((product) => (
                <tr key={product._id}>
                  <td><img src={formatImage(product.image)} alt={product.name} className='w-10 h-auto rounded' loading='lazy'/></td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.salePrice}</td>
                  <td className='max-w-[200px] sm:w-full'>
                    <span className="block overflow-x-auto whitespace-nowrap">
                      {product.description}
                    </span>
                  </td>
                  <td>{product.quantity}</td>
                  <td>{new Date(product.createdAt).toLocaleDateString()}</td>
                  <td className='flex  justify-center items-center text-white *:p-1 gap-1 *:text-xs'>
                    <button onClick={() => handleUpdate(product)} className='bg-black hover:bg-secondary'>Update</button>
                    <button onClick={() => handleDelete(product)} className='bg-primary hover:bg-primary/50'>x</button>
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
         {/* Update Modal */}
        {updateModal &&
        <UpdateModal 
        isOpen={updateModal} 
        onClose={() => setUpdateModal(false)}
        product={product}
        />
        }
         {/* Delete Modal */}
         {deleteModal && 
          <DeleteModal 
          isOpen={deleteModal}
          onClose={() => setDeleteModal(false)}
          product={product}
          />
         }
      </div>
    </section>
  )
}
