
import { Link } from 'react-router-dom'

function Recent({blogs}) {
  return (
    <>
    {/* RECENT BLOGS SECTION */}
        <div className="basis-3/4 space-y-6">
        <h2 className="font-dancing text-3xl font-extrabold border-b border-gray-200 pb-4">Recents</h2>
            {blogs.filter((_, index) => index < 3).map((blog, index) => (
                <Link to={`/blog/${blog.id}`} key={index} className="flex flex-row bg-white ">
                    <img src={`/${blog.img}`} alt="blog post" loading='lazy' className="w-1/3 h-1/3 rounded-lg me-4" />
                    <div className="flex flex-col">
                        <h5 className="text-md mb-2">{blog.title}</h5>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                            <small>{blog.date}</small>
                            <small>{blog.category}</small>
                            <small>{blog.comments} Comment(s)</small>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    </>
  )
}

export default Recent