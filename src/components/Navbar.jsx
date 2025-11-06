import { NavLink } from "react-router"
import logo from '../assets/icons/spoon-fork.svg'

function Navbar() {
  const activeClass = ({ isActive }) => (isActive ? "border-b-4 border-primary" : "")
  return (
    <div className="absolute z-1 inset-0 h-[10vh]">
      <nav className=" contianer mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
      <div className="navbar bg-transparent text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              onClick={(e) => {
              if (e.target.tagName === "A") {
                document.activeElement.blur();
              }
            }}
              tabIndex="-1"
              className="menu menu-lg dropdown-content text-black rounded-box z-1 mt-3 w-52 p-2 shadow gap-y-2 uppercase bg-white/95">
              <li><NavLink to='/' className={activeClass}>Home</NavLink></li>
              <li><NavLink to='/about' className={activeClass}>About</NavLink></li>
              <li><NavLink to='/recipes' className={activeClass}>Recipes</NavLink></li>
              <li><NavLink to='/gallery' className={activeClass}>Gallery</NavLink></li>
              <li>
                <details>
                  <summary>Reservation</summary>
                  <ul className="p-2 bg-white">
                    <li><NavLink to='/reservation' className={activeClass}>Reservation</NavLink></li>
                    <li><NavLink to='/cart' className={activeClass}>Cart</NavLink></li>
                    <li><NavLink to='/shipping' className={activeClass}>Shipping</NavLink></li>
                    <li><NavLink to='/payment' className={activeClass}>Payment</NavLink></li>
                    <li><NavLink to='/confirmation' className={activeClass}>Confirmation</NavLink></li>
                  </ul>
                </details>
              </li>
              <li>
              <details>
                <summary>Blogs</summary>
                <ul className="p-2 bg-white">
                  <li><NavLink to='/blogs' className={activeClass}>Blogs</NavLink></li>
                  <li><NavLink to='/blog/1' className={activeClass}>Blog Single</NavLink></li>
                </ul>
              </details>
            </li>
              <li><NavLink to='/contact' className={activeClass}>Contact</NavLink></li>
            </ul>
          </div>
          <NavLink to='/' className="flex items-center">
          <img src={logo} alt="logo" className="w-14 h-auto invert me-4" />
          <span className="font-dancing text-4xl font-bold">CafeDine</span>
          </NavLink>
        </div>
        <div className="navbar hidden lg:flex uppercase">
          <ul id="menu" className="menu menu-horizontal gap-1 font-semibold text-[1rem]">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about' className={activeClass}>About</NavLink></li>
            <li><NavLink to='/recipes' className={activeClass}>Recipes</NavLink></li>
            <li><NavLink to='/gallery' className={activeClass}>Gallery</NavLink></li>
            <li>
              <details>
                <summary>Reservations</summary>
                <ul className="p-2 bg-white text-black" onClick={(e)=>{ e.target.closest('details').removeAttribute('open')}}>
                  <li><NavLink to='/reservation' className={activeClass}>Reservation</NavLink></li>
                  <li><NavLink to='/cart' className={activeClass}>Cart</NavLink></li>
                  <li><NavLink to='/shipping' className={activeClass}>Shipping</NavLink></li>
                  <li><NavLink to='/payment' className={activeClass}>Payment</NavLink></li>
                  <li><NavLink to='/confirmation' className={activeClass}>Confirmation</NavLink></li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Blogs</summary>
                <ul className="p-2 bg-white text-black" onClick={(e)=>{ e.target.closest('details').removeAttribute('open')}}>
                  <li><NavLink to='/blogs' className={activeClass}>Blogs</NavLink></li>
                  <li><NavLink to='/blog/1' className={activeClass}>Blog Single</NavLink></li>
                </ul>
              </details>
            </li>
            <li><NavLink to='/contact' className={activeClass}>Contact</NavLink></li>
          </ul>
        </div>
        
      </div>
    </nav>
    </div>
  )
}

export default Navbar