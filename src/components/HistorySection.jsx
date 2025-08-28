// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import { Link } from 'react-router-dom';
// import { motion } from "framer-motion";

// // נתיבים לתמונות ישירות מתיקיית ה-public
// const imageUrls = {
//     stage: "/images/stage.jpg",
//     ark: "/images/ArtOtTheCovenant.png",
// };

// const HistorySection = () => {
//     const { ref, inView } = useInView({
//         triggerOnce: true,
//         threshold: 0.2,
//     });

//     // אנימציות עם framer-motion
//     const imageVariants = {
//         hidden: { opacity: 0, x: -50 },
//         visible: { 
//             opacity: 1, 
//             x: 0, 
//             transition: { 
//                 duration: 0.8, 
//                 ease: "easeOut" 
//             } 
//         },
//     };

//     const textVariants = {
//         hidden: { opacity: 0, x: 50 },
//         visible: { 
//             opacity: 1, 
//             x: 0, 
//             transition: { 
//                 duration: 0.8, 
//                 ease: "easeOut" 
//             } 
//         },
//     };

//     return (
//         <section id="history-section" className="bg-gray-100 py-20 px-4 text-gray-800" dir="rtl">
//             <div className="container mx-auto max-w-6xl">
//                 <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-12">קצת מההיסטוריה שלנו</h2>
//                 <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                     {/* בלוק הטקסט, כעת מוצג ראשון במסכים גדולים */}
//                     <motion.div 
//                         className="w-full md:w-full text-center md:text-right px-4 md:px-0 order-2 md:order-1"
//                         variants={textVariants}
//                         initial="hidden"
//                         animate={inView ? "visible" : "hidden"}
//                     >
//                         <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
//                             מחברים היסטוריה מפוארת עם עתיד גדול
//                         </h2>
//                         <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
//                             כאן עולמות נפגשים, מחברים יחד היסטוריה מפוארת, תקוה חדשה ו<span className="font-semibold text-blue-700">מסורת חזקה.</span>
//                             מוזמנים בחום לבוא לבקר, לטעום קצת היסטוריה, להתחבר אל העבר ולהמשיך איתנו יחד את סיפור העמים והמורשת של בית הכנסת הקדוש הזה.
//                         </p>
//                         <Link to="/history" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold text-lg transition-colors duration-200">
//                             עוד על ההיסטוריה
//                             <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
//                             </svg>
//                         </Link>
//                     </motion.div>
                    
//                     {/* בלוק התמונות, כעת מוצג שני במסכים גדולים */}
//                     <motion.div 
//                         className="relative w-full md:w-full flex justify-center md:justify-start order-1 md:order-2"
//                         variants={imageVariants}
//                         initial="hidden"
//                         animate={inView ? "visible" : "hidden"}
//                     >
//                         <img
//                             src={imageUrls.stage}
//                             alt="כניסה לבית הכנסת הישן"
//                             className="w-11/12 md:w-[450px] h-[280px] md:h-[320px] object-cover rounded-lg shadow-xl 
//                                        border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer 
//                                        hover:scale-105 hover:border-yellow-600 hover:rotate-3"
//                             onError={(e) => { 
//                                 e.target.onerror = null; 
//                                 e.target.src = "https://placehold.co/450x320/808080/FFFFFF?text=שלב"; 
//                             }}
//                         />
//                         <img
//                             src={imageUrls.ark}
//                             alt="פנים בית הכנסת ההיסטורי"
//                             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//                                        md:top-auto md:bottom-[-20px] md:left-auto md:right-[-20px] md:translate-x-0 md:translate-y-0
//                                        w-4/5 md:w-[320px] h-[220px] md:h-[280px] object-cover rounded-lg shadow-2xl border-4 border-white
//                                        transition-all duration-300 ease-in-out cursor-pointer 
//                                        hover:scale-105 hover:border-yellow-600 hover:-rotate-3"
//                             onError={(e) => { 
//                                 e.target.onerror = null; 
//                                 e.target.src = "https://placehold.co/320x280/808080/FFFFFF?text=ארון"; 
//                             }}
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HistorySection;

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// נתיבים לתמונות ישירות מתיקיית ה-public
const imageUrls = {
    stage: "/images/stage.jpg",
    ark: "/images/ArtOtTheCovenant.png",
};

const HistorySection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // אנימציות עם framer-motion
    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            } 
        },
    };

    const textVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
                duration: 0.8, 
                ease: "easeOut" 
            } 
        },
    };

    return (
        <section id="history-section" className="bg-gray-100 py-20 px-4 text-gray-800" dir="rtl">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-700 mb-12">קצת מההיסטוריה שלנו</h2>
                
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* בלוק הטקסט, כעת מוצג ראשון במסכים גדולים */}
                    <motion.div 
                        className="w-full text-center md:text-right px-4 md:px-0 order-2 md:order-1"
                        variants={textVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
                            מחברים היסטוריה מפוארת עם עתיד גדול
                        </h2>
                        <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
                            כאן עולמות נפגשים, מחברים יחד היסטוריה מפוארת, תקוה חדשה ו<span className="font-semibold text-blue-700">מסורת חזקה.</span>
                            מוזמנים בחום לבוא לבקר, לטעום קצת היסטוריה, להתחבר אל העבר ולהמשיך איתנו יחד את סיפור העמים והמורשת של בית הכנסת הקדוש הזה.
                        </p>
                        <Link to="/history" className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold text-lg transition-colors duration-200">
                            עוד על ההיסטוריה
                            <svg className="w-5 h-5 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </Link>
                    </motion.div>
                    
                    {/* בלוק התמונות - שינינו את הקלאסים כדי להפוך את העיצוב לרספונסיבי */}
                    <motion.div 
                        className="relative w-full md:w-full flex flex-col items-center md:items-center order-1 md:order-2 space-y-4 md:space-y-0"
                        variants={imageVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <img
                            src={imageUrls.stage}
                            alt="כניסה לבית הכנסת הישן"
                            className="w-11/12 md:w-[450px] h-[280px] md:h-[320px] object-cover rounded-2xl shadow-xl 
                                       border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer 
                                       hover:scale-105 hover:border-yellow-600 hover:rotate-3"
                            onError={(e) => { 
                                e.target.onerror = null; 
                                e.target.src = "https://placehold.co/450x320/808080/FFFFFF?text=שלב"; 
                            }}
                        />
                        <img
                            src={imageUrls.ark}
                            alt="פנים בית הכנסת ההיסטורי"
                            className="w-4/5 h-[220px] object-cover rounded-2xl shadow-2xl border-4 border-white md:w-[320px] md:h-[280px] 
                                       transition-all duration-300 ease-in-out cursor-pointer 
                                       hover:scale-105 hover:border-yellow-600 hover:-rotate-3
                                       md:absolute md:bottom-[-20px] md:left-auto md:right-[-20px]"
                            onError={(e) => { 
                                e.target.onerror = null; 
                                e.target.src = "https://placehold.co/320x280/808080/FFFFFF?text=ארון"; 
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;
