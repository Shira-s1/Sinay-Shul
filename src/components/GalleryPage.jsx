// Immersive Single-File React Component for a Photo Gallery
// Uses Framer Motion for the engaging "jump" animations and Tailwind CSS for responsive design.

import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, X, MapPin } from 'lucide-react';


const imageMap = {
    "hut.webp": "/images/hut.webp",
    "hut2.webp": "/images/hut2.webp",
    "hut3.webp": "/images/hut3.webp",
    "hut4.webp": "/images/hut4.webp",
    "inMiddleOfBuild.webp": "/images/inMiddleOfBuild.webp",
    "inMiddleOfBuild2.webp": "/images/inMiddleOfBuild2.webp",
    "inMiddleOfBuild3.webp": "/images/inMiddleOfBuild3.webp",
    "inMiddleOfBuild4.webp": "/images/inMiddleOfBuild4.webp",
    "inMiddleOfBuild5.webp": "/images/inMiddleOfBuild5.webp",
    "inMiddleOfBuild6.webp": "/images/inMiddleOfBuild6.webp",
    "inMiddleOfBuild7.webp": "/images/inMiddleOfBuild7.webp",
    "inMiddleOfBuild8.webp": "/images/inMiddleOfBuild8.webp",
    "inMiddleOfBuild9.webp": "/images/inMiddleOfBuild9.webp",
    "entarance_old.webp": "/images/entarance_old.webp",
    "entarance_old1.webp": "/images/entarance_old1.webp",
    "startBuild.webp": "/images/startBuild.webp",
    "entarance_old2.webp": "/images/entarance_old2.webp",
    "entarance_old3.webp": "/images/entarance_old3.webp",
    "hanucatBait.webp": "/images/hanucatBait.webp",
    "hanuchatBait.webp": "/images/hanuchatBait.webp",
    "hanuchatBait1.webp": "/images/hanuchatBait1.webp",
    "hanuchatBait2.webp": "/images/hanuchatBait2.webp",
    "hanuchatBait3.webp": "/images/hanuchatBait3.webp",
    "info.webp": "/images/info.webp",
    "inside_old1.webp": "/images/inside_old1.webp",
    "inside_old2.webp": "/images/inside_old2.webp",
    "inside_old3.webp": "/images/inside_old3.webp",
    "inside_old4.webp": "/images/inside_old4.webp",
    "inside_old5.webp": "/images/inside_old5.webp",
    "inside_old6.webp": "/images/inside_old6.webp",
    "inside_old7.webp": "/images/inside_old7.webp",
    "inside_old8.webp": "/images/inside_old8.webp",
    "inside_old9.webp": "/images/inside_old9.webp",
    "inside_old10.webp": "/images/inside_old10.webp",
    "oldWithBooks.webp": "/images/oldWithBooks.webp",
    "actions1.webp": "/images/actions1.webp",
    "actions2.webp": "/images/actions2.webp",
    "actions3.webp": "/images/actions3.webp",
    "barMitzva1.webp": "/images/barMitzva.webp",
    "sookot1.webp": "/images/sookot1.webp",
    "sookot2.webp": "/images/sookot2.webp",
    "artOtTheCovenant.webp": "/images/artOtTheCovenant.webp",
    "artOtTheCovenant1.webp": "/images/artOtTheCovenant1.webp",
    "artOtTheCovenant2.webp": "/images/artOtTheCovenant2.webp",
    "background.webp": "/images/background.webp",
    "board.webp": "/images/board.webp",
    "bracha.webp": "/images/bracha.webp",
    "stage.webp": "/images/stage.webp",
    "windows.webp": "/images/windows.webp",
    "old1.webp": "/images/old1.webp",
    "old2.webp": "/images/old2.webp",
};

const categories = [
    {
        title: "הכל",
        images: Object.keys(imageMap),
    },
    {
        title: "תהליך הבנייה",
        description: "מבקתה צנועה ועד למבנה מרשים: המסע המרגש של הקמת בית הכנסת, אבן אחר אבן. עבודת כפיים ואמונה חזקה.",
        images: [
            "hut.webp", "hut2.webp", "hut3.webp", "hut4.webp", "inMiddleOfBuild.webp", "inMiddleOfBuild2.webp",
            "inMiddleOfBuild3.webp", "inMiddleOfBuild4.webp", "inMiddleOfBuild5.webp", "inMiddleOfBuild6.webp",
            "inMiddleOfBuild7.webp", "inMiddleOfBuild8.webp", "inMiddleOfBuild9.webp", "entarance_old.webp", "entarance_old1.webp", "startBuild.webp",
            "entarance_old2.webp", "entarance_old3.webp",
        ],
    },
    {
        title: "חנוכת הבית",
        description: "תיעוד חגיגי ומרגש מהטקס המכונן שבו נחנך בית הכנסת והפך באופן רשמי לבית קהילה. רגעים בלתי נשכחים.",
        images: [
            "hanucatBait.webp", "hanuchatBait.webp", "hanuchatBait1.webp", "hanuchatBait2.webp", "hanuchatBait3.webp",
        ],
    },
    {
        title: "זיכרון עבר",
        description: "הצצה נוסטלגית לתמונות היסטוריות: כיצד הכל התחיל והרגעים המכוננים של הקהילה בראשית דרכה, כולל אירועים מיוחדים.",
        images: [
             "inside_old1.webp", "inside_old2.webp", "inside_old3.webp", "inside_old4.webp", "inside_old5.webp",
            "inside_old6.webp", "inside_old7.webp", "inside_old8.webp", "inside_old9.webp", "inside_old10.webp",
             "old1.webp",    "old2.webp",
            "oldWithBooks.webp", "actions1.webp", "actions2.webp", "actions3.webp", "barMitzva1.webp", "sookot1.webp", "sookot2.webp",
           
        ],
    },
    {
        title: "היום",
        description: "חיי הקהילה התוססים כיום: תפילות, שיעורים, אירועים ויופיו של בית הכנסת במלוא הדרו העכשווי.",
        images: [
            "artOtTheCovenant.webp", "artOtTheCovenant1.webp", "artOtTheCovenant2.webp", "background.webp",
            "board.webp", "bracha.webp", "stage.webp", "windows.webp",
        ],
    },
];

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 150, damping: 14 }
    },
};

const GalleryPage = () => {
    const [modalImageSrc, setModalImageSrc] = useState(null);
    const [activeCategory, setActiveCategory] = useState("הכל");
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    const useActiveCategory = (categoryTitle) => {
        const { ref, inView } = useInView({ threshold: 0.2, rootMargin: '-10% 0px -70% 0px' });
        useEffect(() => { if (inView) setActiveCategory(categoryTitle); }, [inView, categoryTitle]);
        return ref;
    };

    const topRef = useActiveCategory("הכל");
    const constructionRef = useActiveCategory("תהליך הבנייה");
    const dedicationRef = useActiveCategory("חנוכת הבית");
    const memoryRef = useActiveCategory("זיכרון עבר");
    const todayRef = useActiveCategory("היום");

    const getCategoryRef = (title) => {
        switch (title) {
            case 'תהליך הבנייה': return constructionRef;
            case 'חנוכת הבית': return dedicationRef;
            case 'זיכרון עבר': return memoryRef;
            case 'היום': return todayRef;
            default: return topRef;
        }
    };

    const openModal = (src) => setModalImageSrc(src);
    const closeModal = () => setModalImageSrc(null);

    const scrollToCategory = (title) => {
        const categoryId = title === "הכל" ? "gallery-top" : title;
        const element = document.getElementById(categoryId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveCategory(title);
        }
    };

    const handleScroll = () => setShowScrollToTop(window.scrollY > 400);
    useEffect(() => { window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);

    const handleError = (e) => { e.target.onerror = null; e.target.src = "https://placehold.co/300x300/fef3c7/b45309?text=תמונה+חסרה"; e.target.style.objectFit = 'cover'; };

    return (
        <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center pb-20 font-['Inter']" dir="rtl">
            <motion.div className="w-full text-center p-8 pt-16 bg-white mb-12" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} id="gallery-top" ref={topRef}>
                <h1 className="text-5xl sm:text-6xl font-extrabold text-yellow-800 tracking-tight mb-4 border-b-4 border-amber-500 inline-block pb-3">
                    גלריית בית הכנסת סיני
                </h1>
                <p className="max-w-4xl mx-auto text-xl text-gray-700 leading-relaxed font-light mt-4 px-4">
                    ברוכים הבאים למסע ויזואלי מרגש: אנו מזמינים אתכם לצפות בתמונות המתעדות את סיפורו של בית הכנסת שלנו, מתהליך הבנייה ועד לחיי הקהילה התוססים כיום.
                </p>
            </motion.div>

            <div className="flex flex-wrap justify-center mb-12 sticky top-0 bg-white z-20 py-4 w-full">
                <div className="flex flex-wrap justify-center max-w-6xl mx-auto px-2 overflow-x-hidden">
                    {categories.map((category, index) => (
                        <motion.button key={index} onClick={() => scrollToCategory(category.title)} className={`px-4 py-2 mx-1 my-1 rounded-full text-base sm:text-lg font-medium transition-all duration-200 transform ${activeCategory === category.title ? 'bg-yellow-700 text-white shadow-xl scale-105 border-2 border-yellow-800' : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-800 border border-gray-200 hover:shadow-md'}`} whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(180, 83, 9, 0.4)" }} whileTap={{ scale: 0.95 }}>{category.title}</motion.button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto max-w-7xl space-y-28 px-4 md:px-8">
                {categories.slice(1).map((category, index) => {
                    const isDedication = category.title === "חנוכת הבית";
                    const isMemory = category.title === "זיכרון עבר";
                    const categoryRef = getCategoryRef(category.title);

                    const titleClasses = isDedication ? "bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-yellow-600 border-b-4 border-amber-500" : "text-yellow-700 border-b-2 border-amber-400";
                    const dedicationCardClasses = "gallery-card p-2 rounded-xl transition-all duration-150 ease-out transform shadow-xl hover:shadow-2xl cursor-pointer bg-white border-2 border-amber-400 shadow-amber-300/60";
                    const defaultCardClasses = "gallery-card p-2 rounded-xl transition-all duration-150 ease-out transform shadow-md hover:shadow-lg cursor-pointer bg-white border border-gray-200 shadow-gray-200/50";
                    const currentCardClasses = isDedication ? dedicationCardClasses : defaultCardClasses;
                    const currentRingClasses = isDedication ? "ring-2 ring-amber-200" : "ring-1 ring-gray-100";

                    return (
                        <motion.div key={index} className="category-section pt-12 -mt-12" id={category.title} ref={categoryRef} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }}>
                            <h2 className={`text-3xl md:text-4xl font-extrabold pb-3 mb-4 tracking-wide inline-block ${titleClasses} text-center w-full`}>{category.title}</h2>
                            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto font-normal text-center">{category.description}</p>

                            {isMemory && (
                                <motion.div className="flex flex-col md:flex-row items-center p-6 sm:p-8 mb-16 bg-white rounded-3xl shadow-xl border-4 border-yellow-300 max-w-5xl mx-auto" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }}>
                                    <div className="w-full md:w-1/2 flex justify-center p-4 order-2 md:order-1">
                                        <motion.img src={imageMap["info.webp"]} alt="תמונה המסמלת את ראשית הקהילה" className="w-full h-auto max-h-80 object-cover rounded-xl cursor-pointer shadow-lg ring-4 ring-yellow-300 ring-opacity-70" onClick={() => openModal(imageMap["info.webp"])} onError={handleError} loading="eager" width="600" height="400" whileHover={{ scale: 1.02 }} />
                                    </div>
                                    <div className="w-full md:w-1/2 md:pr-8 text-center md:text-right mt-4 md:mt-0 order-1 md:order-2">
                                        <h3 className="text-2xl font-bold text-yellow-800 mb-3 flex items-center justify-center md:justify-end">
                                            <MapPin className="ml-2 text-amber-500 w-5 h-5" />כך התחלנו: אמונה וקהילה
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed font-normal">
                                            כאן תמצאו את התמונה ההיסטורית המסמלת את הצעד הראשון. זו תזכורת צנועה לכוחה של האמונה ולמסירותם של חברי הקהילה הראשונים, שחלמו ובנו את המקום הקדוש הזה.
                                        </p>
                                    </div>
                                </motion.div>
                            )}

                            <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full" variants={{ visible: { transition: { staggerChildren: 0.03 } }, hidden: { transition: { staggerChildren: 0.03, staggerDirection: -1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                                {category.images.filter(imageKey => isMemory ? imageKey !== "info.webp" : true).map((imageKey, imgIndex) => {
                                    const imagePath = imageMap[imageKey];
                                    const totalImages = category.images.filter(k => isMemory ? k !== "info.webp" : true).length;
                                    const isLastImage = imgIndex === totalImages - 1;
                                    const isOddNumberOfImages = totalImages % 2 !== 0;

                                    const centeringClasses = (isOddNumberOfImages && isLastImage && totalImages > 1)
                                        ? "flex justify-center col-span-2 sm:col-span-1 md:col-auto max-w-xs sm:max-w-sm md:max-w-[250px] mx-auto"
                                        : "";

                                    return (
                                        <motion.div key={imageKey} className={`${currentCardClasses} ${centeringClasses}`} variants={itemVariants} whileHover={isDedication ? { scale: 1.07, rotate: 0.5, boxShadow: "0 10px 30px rgba(180, 83, 9, 0.4)", transition: { duration: 0.2 } } : { scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.1)", transition: { duration: 0.2 } }} whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}>
                                            <img src={imagePath} alt={`${category.title} - תמונה ${imgIndex + 1}`} className={`gallery-image w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover rounded-lg cursor-pointer ${currentRingClasses} ${centeringClasses ? "" : ""}`} onClick={() => openModal(imagePath)} onError={handleError} loading="lazy" width="300" height="300" />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            <AnimatePresence>
                {showScrollToTop && (
                    <motion.button className="fixed bottom-6 left-6 p-4 bg-yellow-700 text-white rounded-full shadow-2xl z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }}>
                        <ChevronUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {modalImageSrc && (
                    <motion.div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center" onClick={closeModal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.img src={modalImageSrc} alt="תמונה מוגדלת" className="max-w-full max-h-full rounded-lg shadow-2xl" initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()} />
                        <X className="absolute top-6 right-6 text-white w-8 h-8 cursor-pointer" onClick={closeModal} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default GalleryPage;
