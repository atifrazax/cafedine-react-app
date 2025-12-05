import BannerAll from "../components/BannerAll"
import Aside from "../components/Aside"
import { useParams } from "react-router-dom";
import Socials from "../components/Socials";
import Comments from "../components/Comments";
import LeaveComment from "../components/LeaveComment";
import Loader from "../components/Loader";

function SingleBlog() {

    const blogs = [
        {id: 1, img:"recipe-3.webp", date: "May 25, 2025", category: 'Cooking', comments: 3, title: "The Festive Season is Approaching", desc: "The little rotter spiffing good time lemon squeezy smashing excuse my French old, cheesed off give us a bell happy days brown bread, blow off Harry barney bobby. Cup of char gormless hors.!"},
        {id: 2, img:"recipe-4.webp", date: "May 27, 2021", category: 'Cooking', comments: 2, title: "Far far away, behind the word mountains", desc: "Countries Vokalia and Consonantia, there live the blind texts. Separated they live in"},
        {id: 3, img:"recipe-2.webp", date: "May 27, 2023", category: 'Cooking', comments: 4, title: "Far far away, behind the word mountains", desc: "Vokalia and Consonantia, there live the blind texts. Separated they live in"},
        {id: 4, img:"recipe-1.webp", date: "Jun 27, 2022", category: 'Cooking', comments: 5, title: "Far far away, behind the word mountains", desc: "Away, behind the word mountains, Vokalia and Consonantia, there live the blind texts. Separated they live in"},
        {id: 5, img:"recipe-5.webp", date: "Aug 27, 2025", category: 'Cooking', comments: 1, title: "Far far away, behind the word mountains", desc: "Mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"},
    ];
    const {id} = useParams();
    const blog = blogs.find((blog) => blog.id === Number(id));
  return (
    <>
    <Loader />
    <BannerAll title="Single Blog"/>
    <section className="bg-white py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Outer flex */}
                <div className="flex flex-wrap ">
                    
                    {/* BLOGS SECTION */}
                    <div className="w-full sm:basis-2/3 space-y-5">
                        {blog ? (
                            <div className=" sm:flex-col bg-white p-4 ">
                                <img src={`/${blog.img}`} alt="blog post" loading="lazy" className="md:h-80 w-full rounded-lg object-cover mb-4" />
                                <div className="flex flex-col sm:ml-4 mt-4 sm:mt-0">
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 my-2">
                                        <span>{blog.category}</span>
                                        <span>{blog.date}</span>
                                        <span>{blog.comments} Comment(s)</span>
                                    </div>
                                    <h4 className="text-4xl font-semibold mb-4 hover:text-primary transition duration-300">{blog.title}</h4>
                                    <p className="text-gray-700 mb-4">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis enim dolor illo sunt esse fugit, assumenda optio? Ducimus voluptatibus, quod delectus exercitationem eligendi pariatur eaque nostrum corporis dolores. Fugiat eveniet libero quae aperiam inventore, illum cupiditate nesciunt. Dolore, unde. Numquam, ea! Iste odit beatae, impedit nihil a tempora eius?<br /><br />
                                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eveniet praesentium dolore, minima veritatis dolorem necessitatibus dolor recusandae veniam. Soluta. <br /><br />
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, sunt dolorum odit sint ipsum itaque odio. Expedita quibusdam optio excepturi facere officiis dicta provident, inventore, molestias rerum vero eligendi saepe?
                                    </p>
                                    <div className="flex border-t border-b border-gray-200 py-6">
                                      <span className="me-4">Share Now:</span>
                                      <span><Socials /></span>
                                    </div>
                                    <h3 className="mt-4">{blog.comments} Comments</h3>
                                    <Comments />
                                    <LeaveComment />
                                    
                                </div>
                            </div>
                        ) : (
                            <h1 className='flex justify-center text-black h-screen'>Blog Not Found</h1>
                        )}
                    </div>
                    {/* ASIDE SECTION */}
                    <Aside blogs={blogs}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default SingleBlog