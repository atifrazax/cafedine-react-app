import { Outlet } from "react-router-dom";
import AdminSidebar from "./Aside";
import { useState } from "react";

export default function AdminLayout() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

      <main className="md:ml-64 w-full p-0">
        <Outlet />
      </main>
    </div>
  );
}
