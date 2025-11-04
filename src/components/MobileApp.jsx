
function MobileApp() {
  return (
    <section className='bg-white py-20'>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 '>

            <div className="mx-auto relative w-[300px] h-[600px]">
            {/* Screenshot inside frame */}
            <img
                src="/screenshot.webp"
                alt="screenshot"
                className="absolute top-[3%] left-[7%] w-[86%] h-[96%] object-cover rounded-[20px]"
            />

            {/* Frame on top */}
            <img
                src="/smartphone.webp"
                alt="phone frame"
                className="absolute inset-0 w-full h-full pointer-events-none"
            />
            </div>

            <div className='flex flex-col p-10 mb-20 '>
                <span className='text-primary text-4xl font-dancing font-semibold'>Make it easy</span>
                <h2 className='mt-4  leading-12 capitalize'>Get the CafeDine App</h2>
                <p className='my-10'>Get instant access to recipes from celebrity Cafedia and world-renowed brands right in your pocker.</p>
                <div className='flex flex-col justify-start gap-y-4 sm:flex-row mx-auto'>
                    <button className='bg-black text-white px-6 py-2 sm:me-4 m-auto flex justify-between hover:bg-primary transition duration-300 group'>
                        <div className='flex justify-center items-center me-4'>
                            <svg viewBox="0 0 1024 1024" className='icon group h-10 w-10 fill-white transition duration-300' version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M213.696 348.032c-28.16 0-51.2 23.04-51.2 51.2V604.8c0 28.096 23.04 51.2 51.2 51.2s51.2-23.04 51.2-51.2V399.168c0-28.16-23.04-51.136-51.2-51.136z" fill=""></path><path d="M213.696 633.6a28.8 28.8 0 0 1-28.8-28.8V399.168a28.8 28.8 0 0 1 57.6 0V604.8a28.8 28.8 0 0 1-28.8 28.8z" fill="#ffffff"></path><path d="M831.68 348.032c-28.16 0-51.2 23.04-51.2 51.2V604.8c0 28.096 22.976 51.2 51.2 51.2s51.2-23.04 51.2-51.2V399.168a51.2 51.2 0 0 0-51.2-51.136z" fill=""></path><path d="M831.68 633.6a28.8 28.8 0 0 1-28.8-28.8V399.168a28.8 28.8 0 0 1 57.6 0V604.8a28.8 28.8 0 0 1-28.8 28.8z" fill="#ffffff"></path><path d="M294.656 709.184c0 24.64 20.16 44.8 44.8 44.8h43.008v116.8c0 28.096 23.04 51.2 51.2 51.2s51.2-23.04 51.2-51.2v-116.8h81.6v116.8c0 28.096 22.976 51.2 51.2 51.2s51.2-23.04 51.2-51.2v-116.8h38.976c24.64 0 44.8-20.16 44.8-44.8V348.032H294.656v361.152z" fill=""></path><path d="M617.664 899.648a28.8 28.8 0 0 1-28.8-28.8v-139.2H462.464v139.2a28.8 28.8 0 0 1-57.6 0v-139.2H339.52a22.4 22.4 0 0 1-22.4-22.464V370.432h413.184v338.752a22.4 22.4 0 0 1-22.4 22.464h-61.376v139.2c0 15.808-12.992 28.8-28.864 28.8z" fill="#ffffff"></path><path d="M297.92 320h451.52a225.28 225.28 0 0 0-113.28-163.456l51.712-51.712a11.328 11.328 0 0 0 0-15.808h-0.064a11.2 11.2 0 0 0-15.808 0l-52.032 52.096c-1.728 1.664-2.24 3.968-2.624 6.144A219.456 219.456 0 0 0 528.704 128h-10.048c-27.52 0-53.824 5.184-78.208 14.4-0.256-0.384-0.128-0.96-0.448-1.28l-52.096-52.096a11.2 11.2 0 0 0-15.808 15.808l47.488 47.552A225.088 225.088 0 0 0 297.92 320z m325.376-120.768a25.984 25.984 0 1 1 0 51.904 25.984 25.984 0 0 1 0-51.904z m-197.952 0a25.984 25.984 0 1 1 0 51.904 25.984 25.984 0 0 1 0-51.904z" fill=""></path><path d="M325.568 297.6a202.88 202.88 0 0 1 55.296-91.456 48.448 48.448 0 1 0 38.592-28.928 197.696 197.696 0 0 1 99.2-26.816h9.984c35.648 0 69.568 9.664 98.944 26.624a48.448 48.448 0 1 0 41.024 31.04c24.768 24.256 43.392 54.912 53.184 89.472H325.568z" fill="#ffffff"></path></g></svg>
                        </div>
                        <div className='flex flex-col items-start uppercase'>
                            <span className='font-extralight'>Get it on</span>
                            <span className='font-bold'>Google play</span>
                        </div>
                        
                    </button>
                    <button className='bg-white text-black px-10 py-2 m-auto flex justify-between border-black border hover:bg-primary group hover:text-white transition duration-300'>
                        <div className='flex justify-center items-center me-4'>
                            <svg className='group h-8 w-8 group-hover:fill-white transition duration-300' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1380.664 0 5.547 52.865c13.923 131.766-31.47 278.7-121.238 393.146-1.359 1.585-2.944 2.717-4.189 4.302 14.943-.566 29.885-1.698 45.394-.226 67.694 2.83 245.646 28.64 362.016 202.176l31.583 47.205-47.318 31.47c-40.752 25.81-165.839 118.748-164.141 293.077 1.924 220.742 179.876 301.68 200.14 310.17l48.562 20.377-16.3 50.26c-13.472 43.47-52.3 154.746-128.144 267.947-72.335 107.768-162.217 242.024-314.246 244.854-71.769 1.811-117.615-19.81-159.613-38.262-39.96-17.66-74.26-32.828-131.086-32.828-60.11 0-96.448 15.735-138.558 34.073-39.507 17.207-84.335 36.677-146.482 39.28-2.83.114-5.66.114-8.264.114-147.274 0-249.608-150.897-317.755-251.306l-5.187-7.735c-170.414-256.903-265.7-675.19-108.466-953.793 86.598-153.614 244.174-250.627 411.258-253.117 65.09-.906 124.974 19.47 176.594 39.846 8.83-119.88 65.883-231.722 125.087-303.944C1061.89 84.448 1206.448 7.245 1327.573 2.264L1380.664 0Zm-82.75 562.948c-73.694-7.81-144.331 21.282-207.157 46.639-47.432 19.13-88.297 35.545-126.22 35.545-32.375 0-66.335-10.98-101.654-24.791l-5.433-.453-.227-1.698c-7.471-3.056-14.942-6-22.64-9.056C785 588.984 730.55 562.608 676.102 567.25c-127.125 1.924-247.684 76.863-314.586 195.61-144.897 256.627-23.658 647.057 108.787 842.215 70.41 103.805 145.123 206.365 227.76 201.724 40.978-1.698 69.505-14.15 105.843-29.885 46.865-20.49 100.07-43.582 183.725-43.582 80.712 0 131.765 22.527 176.82 42.45 37.242 16.527 68.146 30.451 111.729 28.64 86.372-1.585 146.708-81.731 222.326-194.706 49.582-73.92 81.278-146.708 99.277-195.271-76.637-45.96-220.628-162.443-222.666-389.411-1.698-180.103 97.24-294.662 165.613-352.168-85.353-92.598-195.385-107.88-242.816-109.918Zm-23.093-438.314c-76.524 20.49-158.707 72.449-211.233 136.86l-.113.113c-46.525 56.827-95.994 150.784-101.088 247.457 84.674-12.678 165.273-71.769 213.61-133.01 58.411-74.374 93.39-164.821 98.824-251.42Z" fillRule="evenodd"></path> </g></svg>
                        </div>
                        <div className='flex flex-col items-start uppercase'>
                            <span className='font-extralight'>Get it on</span>
                            <span className='font-bold'>App Store</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MobileApp