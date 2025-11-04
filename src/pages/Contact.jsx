import Loader from "../components/Loader"
import BannerAll from "../components/BannerAll"


export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form submitted")
    }

    return (
        <>
        <Loader />
        <BannerAll title='Get In Touch'/>
        <section  className="bg-light py-35">

            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-20 sm:gap-y-0 ">
                
                <div className='flex flex-col mb-20 justify-center items-center text-center capitalize'>
                    <span className='text-primary text-4xl font-dancing font-semibold'>Contact us</span>
                    <h2 className='mt-4 sm:w-1/2 leading-12'>Get in touch</h2>
                </div>
                {/* -----Contact Form----- */}
                <div className="grid grid-cols-1 ">
                    
                    <div className="flex flex-col justify-center items-center">
                        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 space-y-6 flex flex-col justify-center items-center mb-20 sm:mb-0">
                                <input type="text" placeholder="Your Name" className="w-full border-0 py-3 px-5  bg-slate-100"/>
                                <input type="email" placeholder="Your Email" className="w-full border-0 py-3 px-5 bg-slate-100 "/>
                                <input type="text" placeholder="Subject" className="w-full border-0 py-3 px-5 bg-slate-100 "/>
                                <textarea rows={5} placeholder="Message" className="w-full border-0 py-3 px-5 bg-slate-100 "/>
                                <button type="submit" className="mx-auto px-6 py-3 bg-primary text-white">Send Message</button>
                        </form>
                    </div>
                    <div className="w-full mt-30">
                        <div className="w-full h-[400px] rounded-xl overflow-hidden sm:pr-6">
                            <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19843.162682978165!2d-0.12574!3d51.50853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3330c3fcb1%3A0x6b4d7a2ecf9dcae!2sLondon!5e0!3m2!1sen!2suk!4v1696840000000!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}