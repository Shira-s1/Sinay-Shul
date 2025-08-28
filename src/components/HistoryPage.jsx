// import React, { useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import { useInView } from 'react-intersection-observer';

// // ייבוא ישיר של התמונות כדי לפתור את שגיאת import.meta
// import hutImage from '../images/hut.png';
// import hanucatBaitImage from '../images/hanucatBait.png';
// import artOfTheCovenantImage from '../images/ArtOtTheCovenant.png';
// import windowsImage from '../images/windows.png';

// const styles = `
// @keyframes fadeInUp {
//     from {
//         opacity: 0;
//         transform: translateY(20px);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(0);
//     }
// }

// .animate-fadeInUp {
//     animation: fadeInUp 0.8s ease-out forwards;
// }
// `;

// const HistoryPage = () => {
//     const [section1Ref, section1InView] = useInView({ triggerOnce: true, threshold: 0.1 });
//     const [section2Ref, section2InView] = useInView({ triggerOnce: true, threshold: 0.1 });
//     const [section3Ref, section3InView] = useInView({ triggerOnce: true, threshold: 0.1 });

//     // זהו התיקון! useEffect שיפעל פעם אחת כשהרכיב נטען
//     // ומיד יגלול את החלון לראש הדף.
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="bg-gray-100 text-gray-800 py-16 px-4">
//             <style>{styles}</style> 
//             <div className="container mx-auto max-w-4xl text-right">
//                 <h1 className="text-5xl font-extrabold text-center text-yellow-700 mb-12">ההיסטוריה המפוארת של בית הכנסת</h1>

//                 <section ref={section1Ref} className={`mb-16 ${section1InView ? 'animate-fadeInUp' : 'opacity-0'}`}>
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-yellow-600 pb-2">השנים הראשונות: יסודות של אמונה</h2>
//                     <p className="mb-6 leading-relaxed text-lg">
//                         בית הכנסת סיני הוקם בשנת תרצ"ה (1935) על ידי קבוצת עולים נלהבת שהגיעה לארץ ישראל עם חזון לבנות קהילה תוססת ושורשית. 
//                         המייסדים, בראשות הרב משה כהן זצ"ל, התאספו בדירה קטנה וחלמו על בית כנסת שיהווה מגדלור רוחני ומרכז קהילתי באזור. 
//                         בזכות מסירותם ותרומות הקהילה, הונחה אבן הפינה למבנה הנוכחי בשנת תרצ"ח (1938).
//                     </p>
                    
//                     <p className="mb-4 leading-relaxed text-lg">
//                         בשלבים הראשונים, בית הכנסת פעל מצריף פשוט. מסירותם של המייסדים אפשרה לבסוף לבנות את המבנה הקבוע, אותו חנכו בטקס מרגש. התמונות הבאות מציגות את הצריף המקורי ואת חנוכת הבית הרשמית.
//                     </p>

//                     <div className="flex flex-col md:flex-row gap-4 mb-4">
//                         <div className="w-full md:w-1/2">
//                             <img 
//                                 src={hutImage} 
//                                 alt="הצריף - בית הכנסת בשנותיו הראשונות" 
//                                 className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600" 
//                             /> 
//                             <p className="text-sm text-gray-600 text-center italic mt-2">
//                                 כך נראה הצריף ששימש כבית הכנסת בשנותיו הראשונות.
//                             </p>
//                         </div>
                        
//                         <div className="w-full md:w-1/2">
//                             <img 
//                                 src={hanucatBaitImage} 
//                                 alt="טקס חנוכת הבית הרשמי של בית הכנסת" 
//                                 className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600" 
//                             /> 
//                             <p className="text-sm text-gray-600 text-center italic mt-2">
//                                 תמונות נדירות מטקס חנוכת הבית הרשמי.
//                             </p>
//                         </div>
//                     </div>
                    
//                 </section>

//                 <section ref={section2Ref} className={`mb-16 ${section2InView ? 'animate-fadeInUp' : 'opacity-0'}`}>
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-yellow-600 pb-2">תקופת הזהב: צמיחה והתרחבות</h2>
//                     <p className="mb-6 leading-relaxed text-lg">
//                         בשנות ה-50 וה-60, עם גלי העלייה הגדולים, בית הכנסת סיני חווה צמיחה משמעותית. 
//                         הקהילה התרחבה, והמבנה המקורי עבר שיפוצים והרחבות כדי להכיל את אלפי המתפללים והפעילויות הענפות. 
//                         בתקופה זו נוסדו גני ילדים, שיעורי תורה למבוגרים ונוער, ומרכז חסד שפעל למען נזקקי השכונה. 
//                         הרב אברהם לוי זצ"ל, שהגיע לבית הכנסת בתקופה זו, הטביע חותם עמוק על הקהילה באישיותו הכריזמטית ובשיעוריו המרתקים.
//                     </p>
//                     <img 
//                         src={artOfTheCovenantImage} 
//                         alt="הקהילה גדלה ומתרחבת" 
//                         className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600 mb-4" 
//                     />
//                     <p className="text-sm text-gray-600 text-center italic">הקהילה מתכנסת בחגים בשנות ה-60.</p>
//                 </section>

//                 <section ref={section3Ref} className={`mb-16 ${section3InView ? 'animate-fadeInUp' : 'opacity-0'}`}>
//                     <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-yellow-600 pb-2">המאה ה-21: מסורת וחדשנות</h2>
//                     <p className="mb-6 leading-relaxed text-lg">
//                         כיום, בית הכנסת סיני ממשיך להיות עמוד תווך רוחני וחברתי. 
//                         אנו משלבים בין שמירה קפדנית על המסורת היהודית העתיקה לבין פתיחות לצרכים המודרניים של הקהילה. 
//                         פעילויות לצעירים, שיעורים מקוונים, ופרויקטים חברתיים חדשניים הם רק חלק מהיוזמות שלנו. 
//                         אנו מזמינים אתכם לקחת חלק במסע המרתק של בית הכנסת ולבנות יחד את הפרק הבא בהיסטוריה המפוארת שלנו.
//                     </p>
//                     <img 
//                         src={windowsImage} 
//                         alt="בית הכנסת כיום" 
//                         className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600 mb-4" 
//                     />
//                     <p className="text-sm text-gray-600 text-center italic">בית הכנסת כיום, שילוב של ישן וחדש.</p>
//                 </section>

//                 {/* כפתור חזרה לדף הבית */}
//                 <div className="text-center mt-12">
//                     <RouterLink to="/" className="inline-flex items-center bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors duration-300">
//                         חזרה לדף הבית
//                         <FaArrowRight className="w-4 h-4 mr-2" />
//                     </RouterLink>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HistoryPage;


import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const HistoryPage = () => {
  const [modalImageSrc, setModalImageSrc] = useState(null);

  const openModal = (src) => {
    setModalImageSrc(src);
  };

  const closeModal = () => {
    setModalImageSrc(null);
  };

  const stories = [
    {
      title: "שורשים עתיקים",
      text: "הכל התחיל בקהילה קטנה בלב חולון, בית הכנסת היה מקום מפגש שהציע מרחב רוחני למשפחות, בית הכנסת שימש מקום לתפילות, ללימוד תורה ואירועים חברתיים שקישרו את כל הקהילה, הוא היה הרבה יותר מבניין, הוא היה לב קהילה שלמה.",
      image: "/images/hut.png",
      orientation: "right",
    },
    {
      title: "המעבר לעיר",
      text: "בעקבות נסיבות היסטוריות, הקהילה נאלצה לעבור. האתגר היה גדול - איך מעתיקים לא רק קהילה, אלא גם את לב ליבה, את בית הכנסת עצמו? זה דרש מאמץ אדיר של תכנון, אריזה, שינוע, ובנייה מחדש, הקהילה כולה התגייסה למען הפרויקט המורכב והמרגש.",
      image: "/images/inMiddleOfBuild.png",
      orientation: "left",
    },
    {
      title: "בניית בית חדש",
      text: "לאחר מסע ארוך ומורכב, נבנה המבנה החדש שקיבל את פניהם של חברי הקהילה. הבניה היתה סמל למסירות, להתמדה ולחוסן של הקהילה. כל לבנה, כל קיר, כל חלון, ייצגו את הערכים שעליהם נבנתה הקהילה: אחדות, אמונה, ועזרה הדדית, היה זה אירוע של התחדשות ושל שמחה גדולה.",
      image: "/images/hanucatBait.png",
      orientation: "right",
    },
    {
      title: "תורת חיים",
      text: "מעבר להיותו מקום תפילה, בית הכנסת הוא גם בית מדרש שוקק חיים, תוכנית הלימודים עשירה ומגוונת, ומציעה שיעורים לכל הגילאים, ממבוגרים ועד ילדים, מטרת הלימוד היא להעמיק את הקשר ליהדות, ללמוד תורה, ולהעצים את הזהות היהודית, בית המדרש מושך תלמידים רבים, ומחזק את החיבור בין אדם לבוראו ובין אדם לחברו.",
      image: "/images/oldWithBooks.png",
      orientation: "left",
    },
    {
      title: "היום",
      text: "כיום, בית הכנסת משמש כבית חם ומרכז תוסס לקהילה, הוא משמש מקום לתפילות, ללימודי תורה, לאירועים חברתיים, לחגיגות משותפות, ולאירועים קהילתיים, בית הכנסת ממשיך להיות מקור של השראה וחיבור. הוא גורם לקהילה להרגיש בית, ולשמר את המסורת היהודית ואת הערכים של הקהילה.",
      image: "/images/artOtTheCovenant.png",
      orientation: "right",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center p-8 pt-12 text-center font-['Inter']">
      <motion.h1
        className="text-5xl font-extrabold text-yellow-700 mb-4 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        הסיפור שלנו
      </motion.h1>
      <motion.p
        className="max-w-3xl mx-auto text-center mb-12 px-4 md:px-0 text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide font-light"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        מסעו של בית הכנסת, משורשיו העתיקים ועד הפיכתו לבית חם ומרכז קהילתי תוסס.
      </motion.p>
      <div className="container mx-auto space-y-24">
        {stories.map((story, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`flex flex-col md:flex-row items-center gap-12 p-8 rounded-2xl shadow-xl transition-shadow duration-300 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } bg-white`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
                  onClick={() => openModal(story.image)}
                />
              </div>
              <div className="md:w-1/2 w-full text-right p-4">
                <h2 className="text-3xl font-bold text-yellow-700 mb-4 border-b-2 border-yellow-400 pb-2">
                  {story.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {story.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

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

      <div className="text-center mt-12">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
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

export default HistoryPage;
