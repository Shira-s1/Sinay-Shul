import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// SVG Icon for the Back to Top button
const ArrowUpIcon = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2"
    >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
    </svg>
);

// SVG Icon for the Timeline Dot
const TimelineDot = ({ isLast }) => (
    // העיגול קטן יותר במובייל, גדל בדסקטופ
    <div 
        className={`w-4 h-4 md:w-6 md:h-6 rounded-full bg-yellow-600 border-2 md:border-4 border-white shadow-md z-10 transition-all duration-300 ${isLast ? 'bg-yellow-700' : ''}`}
    >
        {/* תוכן ריק */}
    </div>
);


const HistoryPage = () => {
    const [modalImageSrc, setModalImageSrc] = useState(null);

    const openModal = (src) => {
        // Fallback for image loading errors (not explicitly requested but good practice)
        if (!src) return;
        setModalImageSrc(src);
    };

    const closeModal = () => {
        setModalImageSrc(null);
    };

    // שמות הקבצים המקוריים שוחזרו כאן
    const stories = [
        {
            title: "שורשים עתיקים",
            text: "הכל התחיל בקהילה קטנה בלב חולון, בית הכנסת היה מקום מפגש שהציע מרחב רוחני למשפחות, בית הכנסת שימש מקום לתפילות, ללימוד תורה ואירועים חברתיים שקישרו את כל הקהילה, הוא היה הרבה יותר מבניין, הוא היה לב קהילה שלמה.",
            image: "/images/hut.webp",
            year: "שנות ה-80",
        },
        {
            title: "המעבר לעיר",
            text: "בעקבות נסיבות היסטוריות, הקהילה נאלצה לעבור. האתגר היה גדול - איך מעתיקים לא רק קהילה, אלא גם את לב ליבה, את בית הכנסת עצמו? זה דרש מאמץ אדיר של תכנון, אריזה, שינוע, ובנייה מחדש, הקהילה כולה התגייסה למען הפרויקט המורכב והמרגש.",
            image: "/images/inMiddleOfBuild4.webp",
            year: "2005",
        },
        {
            title: "בניית בית חדש",
            text: "לאחר מסע ארוך ומורכב, נבנה המבנה החדש שקיבל את פניהם של חברי הקהילה. הבניה היתה סמל למסירות, להתמדה ולחוסן של הקהילה. כל לבנה, כל קיר, כל חלון, ייצגו את הערכים שעליהם נבנתה הקהילה: אחדות, אמונה, ועזרה הדדית, היה זה אירוע של התחדשות ושל שמחה גדולה.",
            image: "/images/hanucatBait.webp",
            year: "2010",
        },
        {
            title: "תורת חיים",
            text: "מעבר להיותו מקום תפילה, בית הכנסת הוא גם בית מדרש שוקק חיים, תוכנית הלימודים עשירה ומגוונת, ומציעה שיעורים לכל הגילאים, ממבוגרים ועד ילדים, מטרת הלימוד היא להעמיק את הקשר ליהדות, ללמוד תורה, ולהעצים את הזהות היהודית, בית המדרש מושך תלמידים רבים, ומחזק את החיבור בין אדם לבוראו ובין אדם לחברו.",
            image: "/images/oldWithBooks.webp",
            year: "2015",
        },
        {
            title: "היום",
            text: "כיום, בית הכנסת משמש כבית חם ומרכז תוסס לקהילה, הוא משמש מקום לתפילות, ללימודי תורה, לאירועים חברתיים, לחגיגות משותפות, ולאירועים קהילתיים, בית הכנסת ממשיך להיות מקור של השראה וחיבור. הוא גורם לקהילה להרגיש בית, ולשמר את המסורת היהודית ואת הערכים של הקהילה.",
            image: "/images/artOtTheCovenant.webp",
            year: new Date().getFullYear().toString(),
        },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center p-4 pt-10 md:p-10 font-['Inter']">
            
            {/* כותרת ראשית */}
            <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-700 mb-4 tracking-tight text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                הסיפור שלנו, שלב אחר שלב
            </motion.h1>
            <motion.p
                className="max-w-2xl mx-auto text-center mb-12 px-2 text-lg md:text-xl text-gray-700 leading-relaxed font-light"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                מסעו של בית הכנסת, משורשיו העתיקים ועד הפיכתו לבית חם ומרכז קהילתי תוסס.
            </motion.p>
            
            {/* ציר הזמן - Timeline Container */}
            <div className="container mx-auto relative max-w-4xl lg:max-w-6xl"> 
                
                {/* הקו האנכי: בצד ימין במובייל, במרכז בדסקטופ */}
                {/* right-5: מזיז את הקו קצת שמאלה מהקצה הימני במובייל */}
                <div 
                    className="absolute h-full w-0.5 md:w-1 bg-yellow-400 right-5 md:left-1/2 transform md:-translate-x-1/2 top-0 z-0 opacity-50"
                ></div>
                
                <div className="space-y-12 md:space-y-24">
                    {stories.map((story, index) => {
                        const [ref, inView] = useInView({
                            triggerOnce: true,
                            threshold: 0.2,
                        });

                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                // MD: 5/12 רוחב ומוסט ימינה/שמאלה. מובייל: 95% רוחב, מוסט ימינה (מלמעלה).
                                className={`relative w-full md:w-5/12 p-0 
                                    ${isEven ? 'md:mr-auto' : 'md:ml-auto'} 
                                    ml-auto 
                                    flex flex-col
                                `}
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                {/* העיגול: ממוקם על הקו האנכי. */}
                                <div 
                                    // במובייל: ממוקם קרוב לקו האנכי (right-[-1.5rem] = 24px)
                                    // בדסקטופ: ממוקם בדיוק על הקו המרכזי
                                    className={`absolute top-4 z-10 
                                        right-3.5 
                                        md:right-auto md:left-full md:transform md:-translate-x-1/2 
                                        ${isEven ? 'md:right-auto md:left-full md:-translate-x-1/2' : 'md:left-auto md:right-full md:translate-x-1/2'}
                                    `}
                                >
                                    <TimelineDot isLast={index === stories.length - 1} />
                                </div>
                                
                                {/* בלוק התוכן הראשי */}
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full ml-auto pl-4 md:pl-0">
                                    <img
                                        // *** השינוי המרכזי כאן: הגדרת גובה קבוע (h-60) ושימוש ב-object-cover ***
                                        src={story.image}
                                        alt={story.title}
                                        onError={(e) => {
                                            e.target.onerror = null; 
                                            e.target.src = `https://placehold.co/600x240/fecaca/991b1b?text=${story.title}`; // עדכון גם לגובה אחיד ב-placeholder
                                        }}
                                        className="w-full h-60 object-cover rounded-t-xl md:rounded-xl shadow-inner transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                                        onClick={() => openModal(story.image)}
                                    />
                                    
                                    <div className="p-4 sm:p-6 text-right">
                                        <p className="text-sm font-semibold text-yellow-600 mb-1">{story.year}</p> 

                                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 border-b border-yellow-400 pb-2">
                                            {story.title}
                                        </h2>
                                        <p className="text-base sm:text-lg text-gray-700 leading-normal">
                                            {story.text}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal - חלון קופץ לתמונה */}
            {modalImageSrc && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 transition-opacity"
                    onClick={closeModal}
                    role="dialog" 
                    aria-modal="true"
                    aria-label="תצוגת תמונה מוגדלת"
                >
                    <div className="relative max-w-full max-h-full sm:max-w-5xl sm:max-h-[90vh] transition-transform duration-300" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={modalImageSrc}
                            alt="תצוגה מוגדלת"
                            className="max-h-full max-w-full rounded-xl shadow-2xl"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-white text-3xl md:text-4xl leading-none font-extralight opacity-90 hover:opacity-100 transition-opacity p-2 rounded-full bg-black/50 hover:bg-black/70"
                            aria-label="סגור חלון קופץ"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* כפתור חזרה למעלה */}
            <div className="text-center mt-12 md:mt-20">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center bg-yellow-600 text-white font-sans py-3 px-6 sm:px-8 rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-300 group select-none text-base sm:text-lg transform hover:scale-105"
                    aria-label="חזרה למעלה העמוד"
                >
                    <ArrowUpIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:-translate-y-1" />
                    חזרה למעלה
                </button>
            </div>
        </div>
    );
};

export default HistoryPage;
