import React from 'react';
import { Link } from 'react-router-dom';

// ===== Icons =====
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.163 18 2 12.837 2 6V3z" />
    </svg>
);

const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.54 2 2 6.48 2 11.96c0 1.76.46 3.42 1.25 4.86L2.01 22l5.44-1.42c1.4.75 3.01 1.15 4.59 1.15h.01c5.5 0 9.99-4.48 9.99-9.96 0-5.48-4.49-9.96-9.99-9.96zm.01 18.23c-1.52 0-2.97-.4-4.23-1.12l-.3-.18-3.12.81.82-3.04-.2-.32c-.78-1.25-1.2-2.7-1.2-4.21 0-4.4 3.58-7.96 8.01-7.96 2.13 0 4.14.83 5.66 2.32 1.52 1.48 2.34 3.5 2.34 5.64 0 4.39-3.58 7.96-8.01 7.96zM17.49 14.86c-.1-.05-.44-.22-.5-.24-.07-.02-.12-.03-.18.03-.06.06-.23.24-.29.28-.06.05-.12.06-.22.03-.1-.03-.4-.14-.76-.47-.28-.25-.48-.5-.65-.79-.18-.28-.02-.26.04-.32.05-.05.1-.12.15-.22.05-.1.08-.18.06-.31-.02-.12-.08-.3-.12-.42-.04-.12-.39-.94-.54-1.28-.15-.34-.12-.28-.24-.29-.11-.02-.24-.02-.37-.02-.13 0-.34.05-.51.24-.17.18-.65.64-.65 1.58 0 .94.67 1.83.76 1.95.09.12 1.32 2.02 3.2 2.87 1.88.85 1.96.62 2.31.57.34-.05 1.08-.44 1.23-.87.15-.43.15-.8.1-.87-.04-.07-.12-.11-.25-.17z" />
    </svg>
);

const MapMarkerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
);

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

// ===== Component =====
const BottomSection = () => {
    return (
        <section id="contact-section" className="bg-gray-900 text-gray-300 py-8 px-4 sm:py-12 sm:px-6 md:py-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-6 max-w-7xl">

                {/* === עמודה 1: גלריה (שונתה ל-grid-cols-3) === */}
                <div className="flex flex-col items-end text-right">
                    <div className="grid grid-cols-3 gap-2 w-full mb-4">
                        {[
                            '/images/background.webp',
                            '/images/hut.webp',
                            '/images/bracha.webp',
                            '/images/stage.webp',
                            '/images/inside_old3.webp',
                            '/images/old1.webp',
                        ].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`גלריה ${i + 1}`}
                                // התמונות קטנות יותר (grid-cols-3)
                                className="w-full aspect-square object-cover rounded-lg shadow-md border-2 sm:border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-500"
                            />
                        ))}
                    </div>
                    <Link
                        to="/gallery"
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-200 transition-colors duration-200 text-sm sm:text-base font-semibold cursor-pointer"
                    >
                        לגלריה
                        <ArrowLeftIcon />
                    </Link>
                </div>

                {/* === עמודה 2: פרטי קשר === */}
                <div className="flex flex-col items-end text-right">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6">צור קשר</h3>
                    <ul className="space-y-2 sm:space-y-3 w-full">
                        <li className="flex items-center justify-end gap-2 hover:text-yellow-300 transition-colors">
                            <span>058-697-1750</span>
                            <span className="text-yellow-400"><PhoneIcon /></span>
                        </li>
                        <li className="flex items-center justify-end gap-2 hover:text-yellow-300 transition-colors">
                            <span>058-697-1750</span>
                            <span className="text-yellow-400"><WhatsappIcon /></span>
                        </li>
                        <li className="flex items-center justify-end gap-2 hover:text-yellow-300 transition-colors">
                            <span>רחוב השחף 2, חולון</span>
                            <span className="text-yellow-400"><MapMarkerIcon /></span>
                        </li>
                    </ul>
                </div>

                {/* === עמודה 3: ניווט === */}
                <div className="flex flex-col items-end text-right">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6">ניווט</h3>
                    <ul className="space-y-2 sm:space-y-3 w-full">
                        {[
                            { label: 'בית', to: '/#home-section' },
                            { label: 'אודות', to: '/chessed' },
                            // { label: 'אירועים ופעילויות', to: '/#events' },
                            { label: 'גלריה', to: '/gallery' },
                        ].map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={link.to}
                                    className="block w-full text-right py-1 hover:text-yellow-400 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* === Footer === */}
            <div className="text-center text-xs sm:text-sm text-gray-400 mt-8 sm:mt-10 pb-3 border-t border-gray-800 pt-4">
                <p>© {new Date().getFullYear()} shirasportes@gmail.com | כל הזכויות שמורות</p>
            </div>
        </section>
    );
};

export default BottomSection;
