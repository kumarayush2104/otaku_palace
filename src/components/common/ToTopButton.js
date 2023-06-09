// Libraries
import React, { useEffect, useState } from 'react'

export default function ToTopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Handles Window scroll Section
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Scrolls the window to top
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`back-to-top-btn ${showButton ? "active" : ''}`} onClick={handleScrollToTop}>
            <div className="back-to-top">
                <button className="fas fa-angle-up"></button>
            </div>
        </div>
    )
}
