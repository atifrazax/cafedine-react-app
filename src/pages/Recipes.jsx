import axios from 'axios';
import BannerAll from '../components/BannerAll'
import MainDishes from '../components/MainDishes'
import { useObserver } from '../assets/hooks/Observer';
import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import ProductFilters from '../components/ProductFilter';
import DishesPlaceholder from '../components/DishesPlaceholder';

function Recipes() {
  const firstDish = useRef(null);
  const [dishes, setDishes] = useState([]);
  const [paginate, setPaginate] = useState({page: 1, limit: 6});
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchDishes = async (page, limit, filters) => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/products`,{
        params: {
          page,
          limit,
          ...filters
        },
      }
    );
  const data = await response.data;
  setDishes(data.docs || []);
  setPaginate(prev => ({
  ...prev,
  page: data.page,
  next: data.hasNextPage,
  prev: data.hasPrevPage,
  totalDocs: data.totalDocs,
  totalPages: data.totalPages,
  pagingCounter: data.pagingCounter
}));
} catch (error) {
  console.error(error);
  return [];
} finally {
  setLoading(false);
}
}

useEffect(() => {
  fetchDishes(paginate.page, paginate.limit, filters);
}, [paginate.page, paginate.limit, filters]);

// Scroll to top after page change
useLayoutEffect(() => {
  if (dishes?.length > 0) {
    firstDish.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }
}, [dishes]);

// Filters
  const handleFilters = useCallback((selectedFilters) => {
    setFilters(selectedFilters);
    setPaginate((prev) => ({ ...prev, page: 1 }));
  }, []);
  
useObserver();
return (
  <>
  <BannerAll title='Food Menu'/>
  <ProductFilters onFilter={handleFilters}/>
  {loading ? (<DishesPlaceholder />) : (
    <MainDishes data={dishes} ref={firstDish}/>
  )}
  {/* PAGINATION */}
  <div className='flex bg-slate-100 pb-20 flex-col sm:flex-row p-4 justify-center gap-2 items-center'>
    <span className='text-gray'>Page {paginate.page} of {paginate.totalPages}</span>

    <div className="flex text-white gap-2 p-4 *:p-1 *:px-3">
      <button className="bg-primary px-2 disabled:bg-primary/50" disabled={!paginate.prev} onClick={()=>setPaginate(prev => ({...prev, page: paginate.page-1}))}>&larr;</button>
      <button className="bg-primary px-2 disabled:bg-primary/50" disabled={paginate.page===1} onClick={()=>setPaginate(prev => ({...prev, page: 1}))}>First</button>
      <button className="text-gray bg-gray/10 disabled:bg-transparent px-2" disabled={paginate.page===1} onClick={()=>setPaginate(prev => ({...prev, page: paginate.page-1}))}>{paginate.page > 1 ? (paginate.page-1) : ('')}</button>
      <button className="text-gray bg-gray/30 px-2">{paginate.page}</button>
      <button className="text-gray bg-gray/10 disabled:bg-transparent px-2" disabled={paginate.page===paginate.totalPages} onClick={()=>setPaginate(prev => ({...prev, page: paginate.page+1}))}>{paginate.page < paginate.totalPages ? paginate.page+1 : ''}</button>
      <button className="bg-primary px-2 disabled:bg-primary/50" disabled={paginate.page===paginate.totalPages} onClick={()=>setPaginate(prev => ({...prev, page: paginate.totalPages}))}>Last</button>
      <button className="bg-primary px-2 disabled:bg-primary/50" disabled={!paginate.next} onClick={()=>setPaginate(prev => ({...prev, page: paginate.page+1}))}>&rarr;</button>
    </div>
  </div>
  {/* /PAGINATION */}
  </>
)
}

export default Recipes