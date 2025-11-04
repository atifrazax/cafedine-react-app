import { Link } from "react-router-dom"
import Socials from "./Socials"
import search from '../assets/icons/search.svg'
import Recent from "./Recent"

function Aside({blogs}) {
  return (
    <aside className="w-full sm:basis-1/3 bg-white md:p-8 pt-16">
            <div className="relative w-full flex flex-col mb-16">
                <input type="search" placeholder="Search..." className="border border-gray-200 py-3 px-4"/>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <img src={search} alt="" aria-hidden="true" className="h-6 w-6"/>
                </span>
            </div>
            <div className="relative w-full flex flex-col mb-16">
                <h2 className="font-dancing text-3xl font-extrabold border-b border-gray-200 pb-4">Follow Us</h2>
                <Socials className='mt-4'/>
            </div>
            <div className="flex flex-col space-y-6 mb-26">
                <h2 className="font-dancing text-3xl font-extrabold border-b border-gray-200 pb-4">Categories</h2>
                <ul className="flex flex-col">
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Vegetables</Link><span className="text-gray-400">(15)</span>
                    </li>
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Fruits</Link><span className="text-gray-400">(09)</span>
                    </li>
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Meat</Link><span className="text-gray-400">(17)</span>
                    </li>
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Dairy</Link><span className="text-gray-400">(05)</span>
                    </li>
                </ul>
            </div>
            <Recent blogs={blogs}/>
            {/* ----Tags Cloud----- */}
            <div className="flex flex-col space-y-8 my-26">
                <h4 className="font-dancing text-3xl font-extrabold border-b border-gray-200 pb-4">Popular Tags</h4>
                <div className="flex flex-wrap space-y-2">
                    <Link to="/blogs" ><button className="bg-gray/30 px-2 py-1 me-2 text-black/60">Fruits</button></Link>
                    <Link to="/blogs" ><button className="bg-gray/30 px-2 py-1 me-2 text-black/60">Vegetables</button></Link>
                    <Link to="/blogs" ><button className="bg-gray/30 px-2 py-1 me-2 text-black/60">Meat</button></Link>
                    <Link to="/blogs" ><button className="bg-gray/30 px-2 py-1 me-2 text-black/60">Dairy</button></Link>
                    <Link to="/blogs" ><button className="bg-gray/30 px-2 py-1 me-2 text-black/60">Beverages</button></Link>
                    <Link to="/blogs" ><button className="bg-gray/30 px-2 py-1 me-2 text-black/60">Breads</button></Link>
                </div>
                
            </div>
            {/* -----Paragrap------ */}
            <div className="flex flex-col space-y-6 my-26">
                <h4 className="font-dancing text-3xl font-extrabold border-b border-gray-200 pb-4">Paragraph</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui est cum quos veniam rem iure exercitationem, vel distinctio iusto illo.</p>
                
            </div>
        </aside>
  )
}

export default Aside