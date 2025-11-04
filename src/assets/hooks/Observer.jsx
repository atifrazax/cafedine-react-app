import { useEffect } from "react";

export const useObserver = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                     observer.unobserve(entry.target); 
                } 
            });
        },{threshold: 0.4});
    
        const hiddenElements = document.querySelectorAll('.animate');
        hiddenElements.forEach(element => observer.observe(element));
    
        return () => {
            hiddenElements.forEach(element => observer.unobserve(element));
        };
    }, []);
}