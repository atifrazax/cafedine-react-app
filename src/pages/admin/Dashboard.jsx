import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalUsers: 0,
    topProduct: null,
    topFiveProducts: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/admin/dashboard`, {
          withCredentials: true,
        })
      setStats(data);
      } catch (error) {
        console.log(error?.message);
      }
    };
    fetchStats();
  }, []);
  return (
    <>
    <Loader />
    <section className="bg-black min-h-screen p-6 space-y-6">
      <h1 className="mx-auto px-4 md:px-6 lg:px-8 max-w-7xl text-white">Admin Dashboard</h1>

      {/* GRID CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Total Sales */}
        <div className="p-5 rounded-2xl border border-gray-200 shadow-md bg-white hover:bg-red-100 hover:scale-105 transition duration-300">
          <p className="text-gray-500">Total Sales</p>
          <h2 className="text-3xl font-bold mt-2">${stats.totalSales.toFixed(2)}</h2>
        </div>

        {/* User Activity */}
        <div className="p-5 rounded-2xl border border-gray-200 shadow-md bg-white hover:bg-red-100 hover:scale-105 transition duration-300">
          <p className="text-gray-500">Active Users</p>
          <h2 className="text-3xl font-bold mt-2">{stats.totalUsers}</h2>
        </div>

        {/* Top Product */}
        <div className="flex justify-between p-5 rounded-2xl border border-gray-200 shadow-md bg-white hover:bg-red-100 hover:scale-105 transition duration-300">
          <div className="">
            <p className="text-gray-500">Top Product</p>
            <h2 className="text-xl font-semibold">
              {stats.topProduct?.name || "No data"}
            </h2>
            {stats.topProduct && (
              <p className="text-sm text-gray-600">
                Sold: {stats.topProduct.unitsSold}
              </p>
            )}
          </div>
          <img src={stats.topProduct?.image} alt="Product" className="w-16 h-16 ms-4 rounded" />
        </div>

      </div>

      {/* PRODUCT PERFORMANCE */}
      <div className="p-6 rounded-2xl border border-gray-200 shadow-md bg-white">
        <h2 className="text-xl font-bold mb-4">📈 Product Performance</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-3">Product</th>
              <th className="py-3">Units Sold</th>
              <th className="py-3">Revenue</th>
            </tr>
          </thead>

          <tbody>
            {stats.topFiveProducts?.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50">
                <td className="py-3">{p.name}</td>
                <td className="py-3">{p.unitsSold}</td>
                <td className="py-3">${p.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
  );
}
