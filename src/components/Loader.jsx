import { useState, useEffect } from "react";

function Loader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoading = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
        if(document.readyState === 'complete') {
            handleLoading();
        }
        window.addEventListener('load' , handleLoading)

        return () => {
            window.removeEventListener('load' , handleLoading)
        }
    }, [])
    return loading && (
    <section className='w-full h-screen bg-white/99 overflow-hidden touch-none select-none via-none z-99 flex justify-center items-center fixed'>
        <div className="inset-0">
          <img src="/favicon.ico" alt="loader" aria-hidden="true" className="translate-0 loader" />
        </div>
    </section>
  )
}

export default Loader