import { Link, useLocation, NavLink } from "react-router-dom";
import logo from '../../assets/icons/spoon-fork.svg'
import { logout } from "../../utils/logout.js"
import { useAuth } from "../../contexts/useAuth.js";
import { useNavigate } from "react-router-dom";

export default function AdminSidebar({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();
  const {setUser} = useAuth();
  const navigate = useNavigate();

  const menu = [
    { title: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { title: "Products", path: "/admin/products", icon: "🍔" },
    { title: "Orders", path: "/admin/orders", icon: "🧾" },
    { title: "Users", path: "/admin/users", icon: "👤" },
    { title: "Managers", path: "/admin/managers", icon: "👩‍💼" },
    { title: "Coupons", path: "/admin/coupons", icon: "🏷️" },
    { title: "Settings", path: "/admin/profile", icon: "⚙️" },
    { title: "Logout", path: "logout", icon: "✂️" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 
          flex flex-col transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0  /* always visible on desktop */
        `}
      >
        {/* Logo */}
        <NavLink to='/admin/dashboard' className="flex items-center">
          <img src={logo} alt="logo" loading="lazy" className="w-14 h-auto m-4" />
          <span className="font-dancing text-4xl font-bold text-black">CafeDine</span>
          </NavLink>

        {/* Menu */}
        <nav className="flex-1 p-3 space-y-1">
          {menu.map((item) => (
            item.title === "Logout" ? (
              <>
              <Link
                key={item.path}
                to="#"
                onClick={() => {
                  logout(setUser, navigate); 
                  setIsOpen(false);
                }} // auto close in mobile
                className={`flex items-center gap-3 p-3 rounded-lg text-gray-700
                  hover:bg-gray-100 transition
                  ${pathname === item.path ? "bg-primary/10 text-primary" : ""}
              `}
              >
                <>
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
                </>
              </Link>
              </>
            ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)} // auto close in mobile
              className={`flex items-center gap-3 p-3 rounded-lg text-gray-700
                hover:bg-gray-100 transition
                ${pathname === item.path ? "bg-primary/10 text-primary" : ""}
            `}
            >
              <>
              <span className="text-xl">{item.icon}</span>
              <span>{item.title}</span>
              </>
            </Link>
            )
          ))}
        </nav>
      </aside>
    </>
  );
}
