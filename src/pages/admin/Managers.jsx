import axios from 'axios';
import { useEffect, useState } from 'react';
import AddManagerModal from './AddManagerModal';
import DeleteModal from './DeleteModal';
import Loader from '../../components/Loader';

export default function Managers() {
  const [managers, setManagers] = useState([]);
  const [paginate, setPaginate] = useState({page: 1, limit: 5});
  const [isOpen, setIsOpen] = useState(false);
  const [deleteModal, setDeleteModal] = useState({isOpen: false, id: ""});
  const fetchManagers = async (page, limit) => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/admin/get-managers`,{
        params: {
          page,
          limit,
        },
        withCredentials: true
      });
      setManagers(res.data.docs);
      setPaginate(prev => ({
      ...prev,
      page: res.data.page,
      next: res.data.hasNextPage,
      prev: res.data.hasPrevPage,
      totalDocs: res.data.totalDocs,
      totalPages: res.data.totalPages,
      pagingCounter: res.data.pagingCounter
    }));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchManagers(paginate.page, paginate.limit);
  }, [paginate.page, paginate.limit]);

  // Page Limit Change
  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    setPaginate(prev => ({...prev, limit: newLimit, page: 1}));
  }
 
  return (
    <section className='bg-black min-h-screen'>
      <Loader />
      <div className='mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-14'>
        <div className='flex flex-wrap items-center justify-between'>
        <h1 className='text-white my-2'>Managers</h1>
        <div className='flex flex-wrap gap-2 *:hover:bg-primary *:hover:text-white *:transition duration-300'>
            <button onClick={() => setIsOpen(true)} className='bg-white/95 py-2 px-4'>Add Manager</button>
          </div>
        </div>
        <div className='w-full overflow-auto shadow shadow-white'>
          <table className='table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Created At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-white *:odd:bg-gray-100">
              {(managers || []).map((manager) => (
                <tr key={manager?._id}>
                  <td>{manager?.name}</td>
                  <td className='capitalize'>{manager?.role}</td>
                  <td>{new Date(manager.createdAt).toLocaleDateString()}</td>
                  <td className='flex  justify-center items-center text-white *:p-1 gap-1 *:text-xs'>
                    <button onClick={()=>{setDeleteModal({isOpen: true, id: manager._id})}} className='bg-red-600 p-1 rounded'>Delete</button>
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
        {/* Add Manager Modal */}
        {
          isOpen && (
            <AddManagerModal isOpen={isOpen} setIsOpen={setIsOpen} />
          )
        }
        {/* Delete Manager Modal */}
        {
          deleteModal.isOpen && (
            <DeleteModal isOpen={deleteModal.isOpen} onClose={() => setDeleteModal({isOpen: false, id: ""})}  id={deleteModal.id} url={"admin/delete-manager"}/>
          )
        }
      </div>
    </section>
  )
}
