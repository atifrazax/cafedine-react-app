import { useState, useEffect } from "react";

export default function ProductFilters({ onFilter }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
 
  useEffect(() => {
    const timer = setTimeout(() => {
        onFilter({ search, category, sort });
    },1000)
    return () => clearTimeout(timer);
  }, [search, category, sort, onFilter]);

  return (
      <div
        className="flex gap-4 overflow-x-auto whitespace-nowrap py-3 px-4 sm:px-6 lg:px-28 
                   bg-slate-100 shadow border border-gray-200
                   items-center no-scrollbar"
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-full bg-white border border-gray-200 
                     outline-none text-sm min-w-[140px]"
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-200 outline-none 
                     bg-white text-sm min-w-[150px]"
        >
            <option value="">All Categories</option>
            <option value="beverages">Beverages</option>
            <option value="food">Food</option>
            <option value="snacks">Snacks & Sides</option>
            <option value="desserts">Desserts</option>
            <option value="specials">Specials / Combos</option>
            <option value="add-ons">Add-ons / Extras</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="px-4 py-2 rounded-full border border-gray-300 outline-none 
                     bg-white text-sm min-w-[150px]"
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>
  );
}
