// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// We will create a local scrolling function to replace react-scroll
const localScrollTo = (element, options) => {
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: options.smooth ? 'smooth' : 'auto'
        });
    }
};

// Inline SVG for FaBars (hamburger icon)
const FaBars = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
    </svg>
);

// Inline SVG for FaTimes (close icon)
const FaTimes = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-8 h-8">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // The useEffect hook listens for changes in the location state.
    // If a 'scrollTo' parameter is present, it will execute the scroll logic
    // once the component has rendered. This is crucial for navigating from
    // one page to another and then scrolling to a specific section.
    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionId = location.state.scrollTo;
            const element = document.getElementById(sectionId);
            if (element) {
                // Using a small delay to ensure the DOM has updated
                // and the target element is available for scrolling.
                setTimeout(() => {
                    localScrollTo(element, {
                        smooth: true,
                        duration: 500,
                    });
                }, 100);
            }
        }
    }, [location.state]);

    const closeMenu = () => setIsOpen(false);

    // This function handles both local scrolling and navigation between pages.
    // If the user is on the homepage, it scrolls directly.
    // If on a different page, it navigates to the homepage and passes the
    // section ID in the state, which is then picked up by the useEffect hook.
    const handleScrollToSection = (sectionId) => {
        closeMenu();
        if (window.location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                localScrollTo(element, {
                    smooth: true,
                    duration: 500,
                });
            }
        } else {
            navigate('/', { state: { scrollTo: sectionId } });
        }
    };

    const linkClasses = "block px-5 py-2 text-yellow-200 font-bold rounded-full transition-all duration-300 ease-in-out " +
        "hover:bg-yellow-600 hover:text-white hover:scale-110 hover:shadow-lg " +
        "text-lg md:text-xl md:mr-4 cursor-pointer text-center w-full md:w-auto";

    return (
        <nav className="bg-gray-900 p-4 shadow-xl relative z-50">
            <div className="container mx-auto flex justify-center items-center flex-wrap">
                {/* Mobile menu button (hamburger/close icon) */}
                <div className="md:hidden absolute left-4 top-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Navigation links container */}
                <div className={`
                    ${isOpen ? 'block' : 'hidden'} 
                    w-full md:flex md:w-auto 
                    mt-4 md:mt-0 md:justify-center md:items-center 
                    flex-col md:flex-row 
                    bg-gray-800/90 md:bg-transparent rounded-lg md:rounded-none
                    p-4 md:p-0
                `}>
                    {/* בית */}
                    <button
                        onClick={() => handleScrollToSection('home-section')}
                        className={linkClasses}
                    >
                        בית
                    </button>

                    {/* אודות - מנווט לדף /chessed */}
                    <Link to="/chessed" onClick={closeMenu} className={linkClasses}>
                        אודות
                    </Link>

                    {/* אירועים ופעילויות - גלילה לסקשן "events" בעמוד הבית */}
                    <button
                        onClick={() => handleScrollToSection('events')}
                        className={linkClasses}
                    >
                        אירועים ופעילויות
                    </button>

                    {/* גלריה - מנווט לדף /gallery */}
                    <Link to="/gallery" onClick={closeMenu} className={linkClasses}>
                        גלריה
                    </Link>

                    {/* קישורים רגילים לדפים אחרים */}
                    <Link to="/history" onClick={closeMenu} className={linkClasses}>
                        היסטוריה
                    </Link>

                    {/* קישור חדש לדף 'אנשים' */}
                    <Link to="/people" onClick={closeMenu} className={linkClasses}>
                        הנהגת הקהילה
                    </Link>

                    {/* צור קשר - גלילה לסקשן "contact-section" (נמצא ב-BottomSection) */}
                    <button
                        onClick={() => handleScrollToSection('contact-section')}
                        className={`${linkClasses} md:mr-0`}
                    >
                        צור קשר
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
