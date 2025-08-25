import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

// מפה של שמות הקבצים שהוזכרו בקוד המקורי לנתיבים המוחלטים שלהם בתיקיית ה-public.
// כדי שהקוד יעבוד כראוי, יש לוודא שכל הקבצים נמצאים בתיקייה 'public/images' בפרויקט שלך.
const imageMap = {
    // קטגוריה: "תהליך הבנייה: לידת הקהילה"
    "hut.png": "/images/hut.png",
    "hut2.png": "/images/hut2.png",
    "hut3.png": "/images/hut3.png",
    "hut4.png": "/images/hut4.png",
    "inMiddleOfBuild.png": "/images/inMiddleOfBuild.png",
    "inMiddleOfBuild2.png": "/images/inMiddleOfBuild2.png",
    "inMiddleOfBuild3.png": "/images/inMiddleOfBuild3.png",
    "inMiddleOfBuild4.png": "/images/inMiddleOfBuild4.png",
    "inMiddleOfBuild5.png": "/images/inMiddleOfBuild5.png",
    "inMiddleOfBuild6.png": "/images/inMiddleOfBuild6.png",
    "entarance_old.png": "/images/entarance_old.png",
    "entarance_old1.png": "/images/entarance_old1.png",
    "startBuild.png": "/images/startBuild.png",
    
    // קטגוריה: "חנוכת הבית"
    "hanucatBait.png": "/images/hanucatBait.png",
    "hanuchatBait.png": "/images/hanuchatBait.png",
    
    // קטגוריה: "זיכרון עבר: איך התחלנו"
    "inside_old1.png": "/images/inside_old1.png",
    "inside_old2.png": "/images/inside_old2.png",
    "inside_old3.png": "/images/inside_old3.png",
    "inside_old4.png": "/images/inside_old4.png",
    "inside_old5.png": "/images/inside_old5.png",
    "inside_old6.png": "/images/inside_old6.png",
    "inside_old7.png": "/images/inside_old7.png",
    "inside_old8.png": "/images/inside_old8.png",
    "inside_old9.png": "/images/inside_old9.png",
    "inside_old10.png": "/images/inside_old10.png",
    "oldWithBooks.png": "/images/oldWithBooks.png",
    
    // קטגוריה: "היום שלנו: קהילה פורחת"
    "ArtOtTheCovenant.png": "/images/ArtOtTheCovenant.png",
    "ArtOtTheCovenant1.jpg": "/images/ArtOtTheCovenant1.jpg",
    "ArtOtTheCovenant2.jpg": "/images/ArtOtTheCovenant2.jpg",
    "background.jpg": "/images/background.jpg",
    "board.png": "/images/board.png",
    "bracha.png": "/images/bracha.png",
    "stage.jpg": "/images/stage.jpg",
    "windows.png": "/images/windows.png",
};

const categories = [
    {
        title: "תהליך הבנייה: לידת הקהילה",
        images: [
            "hut.png", "hut2.png", "hut3.png", "hut4.png", "inMiddleOfBuild.png", "inMiddleOfBuild2.png",
            "inMiddleOfBuild3.png", "inMiddleOfBuild4.png", "inMiddleOfBuild5.png", "inMiddleOfBuild6.png",
            "entarance_old.png", "entarance_old1.png", "startBuild.png",
        ],
    },
    {
        title: "חנוכת הבית",
        images: [
            "hanucatBait.png", "hanuchatBait.png",
        ],
    },
    {
        title: "זיכרון עבר: איך התחלנו",
        images: [
            "inside_old1.png", "inside_old2.png", "inside_old3.png", "inside_old4.png", "inside_old5.png",
            "inside_old6.png", "inside_old7.png", "inside_old8.png", "inside_old9.png", "inside_old10.png",
            "oldWithBooks.png",
        ],
    },
    {
        title: "היום שלנו: קהילה פורחת",
        images: [
            "ArtOtTheCovenant.png", "ArtOtTheCovenant1.jpg", "ArtOtTheCovenant2.jpg", "background.jpg",
            "board.png", "bracha.png", "stage.jpg", "windows.png",
        ],
    },
];

const GalleryPage = () => {
    const [modalImageSrc, setModalImageSrc] = useState(null);

    const openModal = (src) => {
        setModalImageSrc(src);
    };

    const closeModal = () => {
        setModalImageSrc(null);
    };

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center p-8 pt-12 text-center font-['Inter']">
            <motion.h1 
                className="text-5xl font-extrabold text-yellow-700 mb-4 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                גלריית בית הכנסת
            </motion.h1>
            <motion.p 
                className="max-w-3xl mx-auto text-center mb-12 px-4 md:px-0 text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide font-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                ברוכים הבאים לגלריה שלנו! כאן תוכלו למצוא הצצה מרגשת אל מסעו של בית הכנסת, מתהליך הבנייה המרגש ועד למראה הנוכחי שמשמש בית לקהילה חמה ותוססת.
            </motion.p>

            <div className="container mx-auto space-y-24">
                {categories.map((category, index) => {
                    const [ref, inView] = useInView({
                        triggerOnce: true,
                        threshold: 0.1,
                    });

                    const isSpecialCategory = category.title === "חנוכת הבית";
                    const gridLayoutClasses = isSpecialCategory
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
                    const imageSizeClass = isSpecialCategory ? "h-96" : "h-64";
                    const sectionClasses = isSpecialCategory
                        ? "flex flex-col items-center"
                        : "";
                    const cardShadowClasses = isSpecialCategory
                        ? "shadow-2xl hover:shadow-yellow-400"
                        : "shadow-lg hover:shadow-2xl";
                    const cardBackgroundClasses = isSpecialCategory
                        ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-500"
                        : "bg-white border-2 border-gray-200";

                    const specialTitleClasses = isSpecialCategory
                        ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-700 border-b-4 border-yellow-600 pb-3 mb-12 font-extrabold text-4xl tracking-tight"
                        : "text-yellow-700 font-bold text-3xl mb-10 tracking-wide border-b-2 border-yellow-400 pb-2";

                    return (
                        <div key={index} className={`category-section ${sectionClasses}`} ref={ref}>
                            <motion.h2 
                                className={specialTitleClasses}
                                initial={{ opacity: 0, y: -10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5 }}
                            >
                                {category.title}
                            </motion.h2>
                            <motion.div 
                                className={`grid gap-8 ${gridLayoutClasses} w-full`}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.07 } },
                                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                                }}
                            >
                                {category.images.map((imageKey, imgIndex) => (
                                    <motion.div
                                        key={imgIndex}
                                        className={`gallery-card p-2 rounded-2xl transition-all duration-75 ease-in-out transform hover:scale-[1.05] ${cardShadowClasses} ${cardBackgroundClasses}`}
                                        variants={{
                                            visible: { opacity: 1, scale: 1, y: 0 },
                                            hidden: { opacity: 0, scale: 0.8, y: 20 },
                                        }}
                                        style={{ transitionDelay: `${imgIndex * 50}ms` }}
                                    >
                                        <img
                                            src={imageMap[imageKey]}
                                            alt={`${category.title} - תמונה ${imgIndex + 1}`}
                                            className={`gallery-image w-full object-cover rounded-xl cursor-pointer ${imageSizeClass}`}
                                            onClick={() => openModal(imageMap[imageKey])}
                                            // Fallback for images not found
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/808080/FFFFFF?text=תמונה+לא+נמצאה"; }}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* מודאל פשוט להצגת תמונה גדולה */}
            {modalImageSrc && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl max-h-full">
                        <img
                            src={modalImageSrc}
                            alt="Modal View"
                            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white text-4xl leading-none font-extralight opacity-75 hover:opacity-100 transition-opacity"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
            
            {/* כפתור חזרה, ללא פונקציונליות ניווט מכיוון שאין Router */}
            <div className="text-center mt-12">
                 <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center bg-yellow-600 text-white font-sans py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors duration-200 group select-none"
                >
                    חזרה למעלה
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GalleryPage;
