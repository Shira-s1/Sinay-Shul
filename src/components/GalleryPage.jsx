import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

// Map of image file names to their absolute paths in the public folder.
// For the code to work, ensure all files are in the 'public/images' directory of your project.
const imageMap = {
    // Category: "The Construction Process: The Birth of the Community"
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
    "inMiddleOfBuild7.png": "/images/inMiddleOfBuild7.png",
    "inMiddleOfBuild8.png": "/images/inMiddleOfBuild8.png",
    "inMiddleOfBuild9.png": "/images/inMiddleOfBuild9.png",
    "entarance_old.png": "/images/entarance_old.png",
    "entarance_old1.png": "/images/entarance_old1.png",
    "startBuild.png": "/images/startBuild.png",
    "entarance_old2.png": "/images/entarance_old2.png",
    "entarance_old3.png": "/images/entarance_old3.png",
    
    // Category: "Dedication Ceremony"
    "hanucatBait.png": "/images/hanucatBait.png",
    "hanuchatBait.png": "/images/hanuchatBait.png",
    "hanuchatBait1.png": "/images/hanuchatBait1.png",
    "hanuchatBait2.png": "/images/hanuchatBait2.png",
    "hanuchatBait3.png": "/images/hanuchatBait3.png",
    
    // Category: "A Past Memory: How We Started"
    "info.png": "/images/info.png",
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
    "actions1.png": "/images/actions1.png",
    "actions2.png": "/images/actions2.png",
    "actions3.png": "/images/actions3.png",
    "barMitzva1.png": "/images/barMitzva.png",
    "sookot1.png": "/images/sookot1.png",
    "sookot2.png": "/images/sookot2.png",
    
    // Category: "Our Day: A Thriving Community"
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
        title: "הכל",
        images: Object.keys(imageMap),
    },
    {
        title: "תהליך הבנייה",
        images: [
            "hut.png", "hut2.png", "hut3.png", "hut4.png", "inMiddleOfBuild.png", "inMiddleOfBuild2.png",
            "inMiddleOfBuild3.png", "inMiddleOfBuild4.png", "inMiddleOfBuild5.png", "inMiddleOfBuild6.png",
            "inMiddleOfBuild7.png", "inMiddleOfBuild8.png", "inMiddleOfBuild9.png", "entarance_old.png", "entarance_old1.png", "startBuild.png",
            "entarance_old2.png", "entarance_old3.png",
        ],
    },
    {
        title: "חנוכת הבית",
        images: [
            "hanucatBait.png", "hanuchatBait.png", "hanuchatBait1.png", "hanuchatBait2.png", "hanuchatBait3.png",
        ],
    },
    {
        title: "זיכרון עבר",
        images: [
            "info.png", "inside_old1.png", "inside_old2.png", "inside_old3.png", "inside_old4.png", "inside_old5.png",
            "inside_old6.png", "inside_old7.png", "inside_old8.png", "inside_old9.png", "inside_old10.png",
            "oldWithBooks.png", "actions1.png", "actions2.png", "actions3.png", "barMitzva1.png", "sookot1.png", "sookot2.png",
        ],
    },
    {
        title: "היום",
        images: [
            "ArtOtTheCovenant.png", "ArtOtTheCovenant1.jpg", "ArtOtTheCovenant2.jpg", "background.jpg",
            "board.png", "bracha.png", "stage.jpg", "windows.png",
        ],
    },
];

const GalleryPage = () => {
    const [modalImageSrc, setModalImageSrc] = useState(null);
    const [activeCategory, setActiveCategory] = useState("הכל");
    
    // Create a ref for each category to enable scrolling and visibility tracking
    const refs = useRef({});

    const openModal = (src) => {
        setModalImageSrc(src);
    };

    const closeModal = () => {
        setModalImageSrc(null);
    };

    const scrollToCategory = (title) => {
        const categoryTitle = title === "הכל" ? "top" : title;
        if (refs.current[categoryTitle]) {
            refs.current[categoryTitle].scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            // Update the active category state when a button is clicked
            setActiveCategory(title);
        }
    };

    // Use a custom hook to track which category is in view
    const useActiveCategory = (categoryTitle) => {
        const { ref, inView } = useInView({
            threshold: 0.5, // Trigger when 50% of the element is in view
            rootMargin: '-50% 0px -50% 0px', // Adjusts the viewport for intersection detection
        });

        useEffect(() => {
            if (inView) {
                setActiveCategory(categoryTitle);
            }
        }, [inView, categoryTitle]);

        return ref;
    };

    const topRef = useActiveCategory("הכל");
    const constructionRef = useActiveCategory("תהליך הבנייה");
    const dedicationRef = useActiveCategory("חנוכת הבית");
    const memoryRef = useActiveCategory("זיכרון עבר");
    const todayRef = useActiveCategory("היום");

    // Assign refs to the refs.current object for the scroll function
    useEffect(() => {
        refs.current['top'] = document.getElementById('top-section');
        refs.current['תהליך הבנייה'] = document.getElementById('תהליך הבנייה');
        refs.current['חנוכת הבית'] = document.getElementById('חנוכת הבית');
        refs.current['זיכרון עבר'] = document.getElementById('זיכרון עבר');
        refs.current['היום'] = document.getElementById('היום');
    }, []);

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center p-4 md:p-8 pt-12 text-center font-['Inter']" dir="rtl">
            <motion.h1 
                className="text-4xl sm:text-5xl font-extrabold text-yellow-700 mb-4 tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                id="top-section" // Add an ID for easy scrolling
                ref={topRef}
            >
                גלריית בית הכנסת
            </motion.h1>
            <motion.p 
                className="max-w-3xl mx-auto text-center mb-8 px-4 md:px-0 text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide font-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                ברוכים הבאים לגלריה שלנו! כאן תוכלו למצוא הצצה מרגשת אל מסעו של בית הכנסת, מתהליך הבנייה המרגש ועד למראה הנוכחי שמשמש בית לקהילה חמה ותוססת.
            </motion.p>
            
            {/* Sticky navigation that scrolls to the relevant section */}
            <div className="flex flex-wrap justify-center mb-8 md:mb-12 sticky top-0 bg-gray-100 z-10 py-4 w-full border-b-2 border-gray-200">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToCategory(category.title)}
                        className={`
                            px-4 py-2 mx-1 my-1 rounded-full text-sm font-semibold transition-all duration-300
                            ${activeCategory === category.title
                                ? 'bg-yellow-600 text-white shadow-lg'
                                : 'bg-gray-200 text-gray-700 hover:bg-yellow-600 hover:text-white hover:shadow-lg'
                            }
                        `}
                    >
                        {category.title}
                    </button>
                ))}
            </div>

            {/* Gallery sections */}
            <div className="container mx-auto space-y-24">
                {categories.slice(1).map((category, index) => { // Skip the "All" category for display
                    const isSpecialCategory = category.title === "חנוכת הבית";
                    const cardShadowClasses = isSpecialCategory ? "shadow-2xl hover:shadow-yellow-400" : "shadow-lg hover:shadow-2xl";
                    const cardBackgroundClasses = isSpecialCategory ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-500" : "bg-white border-2 border-gray-200";
                    const specialTitleClasses = isSpecialCategory ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-700 border-b-4 border-yellow-600 pb-3 mb-12 font-extrabold text-4xl tracking-tight" : "text-yellow-700 font-bold text-3xl mb-10 tracking-wide border-b-2 border-yellow-400 pb-2";

                    let categoryRef;
                    switch (category.title) {
                        case 'תהליך הבנייה':
                            categoryRef = constructionRef;
                            break;
                        case 'חנוכת הבית':
                            categoryRef = dedicationRef;
                            break;
                        case 'זיכרון עבר':
                            categoryRef = memoryRef;
                            break;
                        case 'היום':
                            categoryRef = todayRef;
                            break;
                        default:
                            categoryRef = null;
                    }

                    // Check if this is the 'זיכרון עבר' category to render the special image block
                    if (category.title === "זיכרון עבר") {
                         // We will render the special `info.png` image first, and then the rest of the images.
                        const specialImage = "info.png";
                        const filteredImages = category.images.filter(img => img !== specialImage);

                        return (
                            <div key={index} className="category-section" id={category.title} ref={categoryRef}>
                                <motion.h2 
                                    className={specialTitleClasses}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {category.title}
                                </motion.h2>

                                {/* Special centered block for the "info.png" image */}
                                <motion.div
                                    className="flex justify-center items-center flex-col md:flex-row p-6 md:p-8 mb-12 bg-white rounded-3xl shadow-xl border-2 border-yellow-500 max-w-4xl mx-auto"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                >
                                    <div className="w-full md:w-1/2 flex justify-center p-4">
                                        <img
                                            src={imageMap[specialImage]}
                                            alt="A Past Memory"
                                            className="w-full h-auto object-contain rounded-2xl cursor-pointer shadow-lg"
                                            onClick={() => openModal(imageMap[specialImage])}
                                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/808080/FFFFFF?text=תמונה+לא+נמצאה"; }}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right mt-4 md:mt-0">
                                        <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-2">זיכרון עבר: כך התחלנו</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                                            תמונה זו מסמלת את הרגעים הראשונים והצנועים שלנו, את הצעד הראשון במסע הארוך. היא מזכירה לנו את העבר ממנו צמחנו ועד כמה התקדמנו.
                                        </p>
                                    </div>
                                </motion.div>
                               
                                {/* The rest of the images in the category will be displayed in a centered flexbox grid */}
                                <motion.div 
                                    className="flex flex-wrap justify-center gap-4 md:gap-6 w-full"
                                    initial="hidden"
                                    animate="visible"
                                    variants={{
                                        visible: { transition: { staggerChildren: 0.07 } },
                                        hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                                    }}
                                >
                                    {filteredImages.map((imageKey, imgIndex) => {
                                        const imagePath = imageMap[imageKey];
                                        return (
                                            <motion.div
                                                key={imageKey}
                                                // Added flex-item classes for responsive sizing
                                                className={`gallery-card p-2 rounded-2xl transition-all duration-75 ease-in-out transform hover:scale-[1.05] shadow-lg hover:shadow-2xl bg-white border-2 border-gray-200 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5`}
                                                variants={{
                                                    visible: { opacity: 1, scale: 1, y: 0 },
                                                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                                                }}
                                                style={{ transitionDelay: `${imgIndex * 0.05}s` }}
                                            >
                                                <img
                                                    src={imagePath}
                                                    alt={`${category.title} - תמונה ${imgIndex + 1}`}
                                                    className="gallery-image w-full h-48 object-cover rounded-xl cursor-pointer"
                                                    onClick={() => openModal(imagePath)}
                                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/808080/FFFFFF?text=תמונה+לא+נמצאה"; }}
                                                />
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>
                        );
                    }

                    // For all other categories, keep the original rendering logic
                    return (
                        <div key={index} className="category-section" id={category.title} ref={categoryRef}>
                            <motion.h2 
                                className={specialTitleClasses}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {category.title}
                            </motion.h2>
                            {/* Changed to flexbox for centering images in the last row */}
                            <motion.div 
                                className="flex flex-wrap justify-center gap-4 md:gap-6 w-full"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.07 } },
                                    hidden: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                                }}
                            >
                                {category.images.map((imageKey, imgIndex) => {
                                    const imagePath = imageMap[imageKey];
                                    const cardClasses = isSpecialCategory ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-500" : "bg-white border-2 border-gray-200";
                                    const shadowClasses = isSpecialCategory ? "shadow-2xl hover:shadow-yellow-400" : "shadow-lg hover:shadow-2xl";
                                    return (
                                        <motion.div
                                            key={imageKey}
                                            // Added flex-item classes for responsive sizing
                                            className={`gallery-card p-2 rounded-2xl transition-all duration-75 ease-in-out transform hover:scale-[1.05] ${shadowClasses} ${cardClasses} w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5`}
                                            variants={{
                                                visible: { opacity: 1, scale: 1, y: 0 },
                                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                            }}
                                            style={{ transitionDelay: `${imgIndex * 0.05}s` }}
                                        >
                                            <img
                                                src={imagePath}
                                                alt={`${category.title} - תמונה ${imgIndex + 1}`}
                                                className="gallery-image w-full h-48 object-cover rounded-xl cursor-pointer"
                                                onClick={() => openModal(imagePath)}
                                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/808080/FFFFFF?text=תמונה+לא+נמצאה"; }}
                                            />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    );
                })}
            </div>

            {/* Modal for large image view */}
            {modalImageSrc && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                    onClick={closeModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
                </motion.div>
            )}
        </div>
    );
};

export default GalleryPage;
