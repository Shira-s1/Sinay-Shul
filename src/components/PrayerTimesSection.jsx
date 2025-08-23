// src/components/PrayerTimesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const PrayerTimesSection = () => {
    const SHAKARIT_TIME = "05:45";
    const MINCHA_TIME =  "20 דקות לפני שקיעה";
    const ARVIT_TIME = "צאת הכוכבים";


    return (
        <section className="bg-gray-900 text-yellow-100 py-16 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-extrabold mb-10 text-white"> :זמני תפילות</h2>

                {/* טבלת זמני תפילה */}
                <div className="flex justify-center mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl">
                        {/* ערבית - קבוע */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-bold mb-2 text-yellow-400">ערבית</h3>
                            <div className="relative text-xl text-white font-medium">
                                {ARVIT_TIME}
                                <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-16 h-0.5 bg-yellow-400"></div>
                            </div>
                        </div>


                        {/* מנחה - קבוע */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-bold mb-2 text-yellow-400">מנחה</h3>
                            <div className="relative text-xl text-white font-medium">
                                <span dir="rtl">{MINCHA_TIME}</span>
                                <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-16 h-0.5 bg-yellow-400"></div>
                            </div>
                        </div>
                        {/* שחרית - קבוע */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-2xl font-bold mb-2 text-yellow-400">שחרית</h3>
                            <div className="relative text-xl text-white font-medium">
                                {SHAKARIT_TIME}
                                <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-16 h-0.5 bg-yellow-400"></div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* קישור לדף עם זמני תפילה מפורטים */}
                <Link
                    to="/prayer-times-full"
                    className="inline-flex items-center justify-center px-6 py-3 mt-8 text-lg font-semibold text-gray-900 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
                >
                    לכל זמני התפילות
                    <FaArrowLeft className="w-4 h-4 mr-2" />
                </Link>

            </div>
        </section>
    );
};

export default PrayerTimesSection;
