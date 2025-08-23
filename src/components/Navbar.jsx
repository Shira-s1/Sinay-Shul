// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const closeMenu = () => setIsOpen(false);

    const handleScrollToSection = (sectionId) => {
        closeMenu();
        if (window.location.pathname === '/') {
            scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
                smooth: true,
                duration: 500,
            });
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
                <div className="md:hidden absolute left-4 top-4">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
                    </button>
                </div>

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

                    {/* גלריה - גלילה לסקשן "gallery" בעמוד הבית */}
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
