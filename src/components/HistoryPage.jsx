import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// ייבוא ישיר של התמונות כדי לפתור את שגיאת import.meta
import hutImage from '../images/hut.png';
import hanucatBaitImage from '../images/hanucatBait.png';
import artOfTheCovenantImage from '../images/ArtOtTheCovenant.png';
import windowsImage from '../images/windows.png';

const styles = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
}
`;

const HistoryPage = () => {
    const [section1Ref, section1InView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [section2Ref, section2InView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [section3Ref, section3InView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // זהו התיקון! useEffect שיפעל פעם אחת כשהרכיב נטען
    // ומיד יגלול את החלון לראש הדף.
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-gray-100 text-gray-800 py-16 px-4">
            <style>{styles}</style> 
            <div className="container mx-auto max-w-4xl text-right">
                <h1 className="text-5xl font-extrabold text-center text-yellow-700 mb-12">ההיסטוריה המפוארת של בית הכנסת</h1>

                <section ref={section1Ref} className={`mb-16 ${section1InView ? 'animate-fadeInUp' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-yellow-600 pb-2">השנים הראשונות: יסודות של אמונה</h2>
                    <p className="mb-6 leading-relaxed text-lg">
                        בית הכנסת סיני הוקם בשנת תרצ"ה (1935) על ידי קבוצת עולים נלהבת שהגיעה לארץ ישראל עם חזון לבנות קהילה תוססת ושורשית. 
                        המייסדים, בראשות הרב משה כהן זצ"ל, התאספו בדירה קטנה וחלמו על בית כנסת שיהווה מגדלור רוחני ומרכז קהילתי באזור. 
                        בזכות מסירותם ותרומות הקהילה, הונחה אבן הפינה למבנה הנוכחי בשנת תרצ"ח (1938).
                    </p>
                    
                    <p className="mb-4 leading-relaxed text-lg">
                        בשלבים הראשונים, בית הכנסת פעל מצריף פשוט. מסירותם של המייסדים אפשרה לבסוף לבנות את המבנה הקבוע, אותו חנכו בטקס מרגש. התמונות הבאות מציגות את הצריף המקורי ואת חנוכת הבית הרשמית.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="w-full md:w-1/2">
                            <img 
                                src={hutImage} 
                                alt="הצריף - בית הכנסת בשנותיו הראשונות" 
                                className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600" 
                            /> 
                            <p className="text-sm text-gray-600 text-center italic mt-2">
                                כך נראה הצריף ששימש כבית הכנסת בשנותיו הראשונות.
                            </p>
                        </div>
                        
                        <div className="w-full md:w-1/2">
                            <img 
                                src={hanucatBaitImage} 
                                alt="טקס חנוכת הבית הרשמי של בית הכנסת" 
                                className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600" 
                            /> 
                            <p className="text-sm text-gray-600 text-center italic mt-2">
                                תמונות נדירות מטקס חנוכת הבית הרשמי.
                            </p>
                        </div>
                    </div>
                    
                </section>

                <section ref={section2Ref} className={`mb-16 ${section2InView ? 'animate-fadeInUp' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-yellow-600 pb-2">תקופת הזהב: צמיחה והתרחבות</h2>
                    <p className="mb-6 leading-relaxed text-lg">
                        בשנות ה-50 וה-60, עם גלי העלייה הגדולים, בית הכנסת סיני חווה צמיחה משמעותית. 
                        הקהילה התרחבה, והמבנה המקורי עבר שיפוצים והרחבות כדי להכיל את אלפי המתפללים והפעילויות הענפות. 
                        בתקופה זו נוסדו גני ילדים, שיעורי תורה למבוגרים ונוער, ומרכז חסד שפעל למען נזקקי השכונה. 
                        הרב אברהם לוי זצ"ל, שהגיע לבית הכנסת בתקופה זו, הטביע חותם עמוק על הקהילה באישיותו הכריזמטית ובשיעוריו המרתקים.
                    </p>
                    <img 
                        src={artOfTheCovenantImage} 
                        alt="הקהילה גדלה ומתרחבת" 
                        className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600 mb-4" 
                    />
                    <p className="text-sm text-gray-600 text-center italic">הקהילה מתכנסת בחגים בשנות ה-60.</p>
                </section>

                <section ref={section3Ref} className={`mb-16 ${section3InView ? 'animate-fadeInUp' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 border-yellow-600 pb-2">המאה ה-21: מסורת וחדשנות</h2>
                    <p className="mb-6 leading-relaxed text-lg">
                        כיום, בית הכנסת סיני ממשיך להיות עמוד תווך רוחני וחברתי. 
                        אנו משלבים בין שמירה קפדנית על המסורת היהודית העתיקה לבין פתיחות לצרכים המודרניים של הקהילה. 
                        פעילויות לצעירים, שיעורים מקוונים, ופרויקטים חברתיים חדשניים הם רק חלק מהיוזמות שלנו. 
                        אנו מזמינים אתכם לקחת חלק במסע המרתק של בית הכנסת ולבנות יחד את הפרק הבא בהיסטוריה המפוארת שלנו.
                    </p>
                    <img 
                        src={windowsImage} 
                        alt="בית הכנסת כיום" 
                        className="w-full h-80 object-cover rounded-xl shadow-lg border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600 mb-4" 
                    />
                    <p className="text-sm text-gray-600 text-center italic">בית הכנסת כיום, שילוב של ישן וחדש.</p>
                </section>

                {/* כפתור חזרה לדף הבית */}
                <div className="text-center mt-12">
                    <RouterLink to="/" className="inline-flex items-center bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors duration-300">
                        חזרה לדף הבית
                        <FaArrowRight className="w-4 h-4 mr-2" />
                    </RouterLink>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;
