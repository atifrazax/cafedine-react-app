import BannerAll from '../components/BannerAll'
import Loader from '../components/Loader';
function Reservation() {
    const date = new Date().toISOString().split("T")[0];
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Seat Reserved. Testing Only")
    }
  return (
    <>
    <Loader />
    <BannerAll title='Reservation'/>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-[70%_30%] gap-6 py-30'>
        <div className='flex flex-col space-y-6'>
            <span className='text-primary text-4xl font-dancing font-semibold'>Reservation</span>
            <h2 className='my-4 mb-20 leading-12'>Reserve your seat for betterment</h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='flex flex-col gap-4'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name='name' placeholder='Full Name' className='p-4 border border-primary/10' />
                </div>
                
                <div className='flex flex-col gap-4'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name='email' placeholder='Email' className='p-4 border border-primary/10' />
                </div>
                
                <div className='flex flex-col gap-4'>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" name='phone' placeholder='Phone' className='p-4 border border-primary/10' />
                </div>
                
                <div className='flex flex-col gap-4'>
                    <label htmlFor="Person">Person</label>
                    <select name="person" id="person" className='p-4 border border-primary/10'>
                        <option value="1">1 Person</option>
                        <option value="2">2 Person</option>
                        <option value="3">3 Person</option>
                        <option value="4">4 Person</option>
                        <option value="5">5+ Person</option>
                    </select>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <label htmlFor="date">Select Date</label>
                    <input type="date" min={date} name='date' placeholder='Date' className='p-4 border w-full border-primary/10' />
                </div>

                <div className='flex flex-col gap-4'>
                    <label htmlFor="time">Select Time</label>
                    <input type="time" min='09:00' max='23:00' name='time' placeholder='Select time' className='p-4 border w-full border-primary/10' />
                </div>
                
                <button className='py-4 px-2 bg-primary text-white hover:bg-black transition duration-300'>Reserve Now</button>
            </form>
        </div>
        <div className='flex flex-col border-2 border-dashed p-8 text-center bg-amber-50/30 justify-center mt-20'>
            <span className='text-primary text-4xl font-dancing font-semibold'>Check availabilty</span>
            <h4 className='text-4xl my-2'>Opening Times</h4>
            <h5 className='mt-10'>Monday - Thursday</h5>
            <span>9.00-12.00</span>
            <h5 className='mt-10'>Friday - Sunday</h5>
            <span>2.00-8.00</span>
            <span className='text-primary text-4xl font-dancing font-semibold mt-10'>Call us for</span>
            <h4 className='text-4xl my-2'>02 34597879</h4>

        </div>
    </div>
    </>
  )
}

export default Reservation