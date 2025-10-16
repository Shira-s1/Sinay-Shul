// src/components/PrayerTimesSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const PrayerTimesSection = () => {
  const SHAKARIT_TIME = "05:45";
  const MINCHA_TIME = "20 דקות לפני שקיעה";
  const ARVIT_TIME = "צאת הכוכבים";

  return (
    <section className="bg-gray-900 text-yellow-100 py-10 sm:py-14 md:py-16 px-3 sm:px-6 md:px-8">
      <div className="container mx-auto text-center">
        {/* כותרת */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 md:mb-10 text-white">
          :זמני תפילות
        </h2>

        {/* טבלת זמני תפילה */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-md sm:max-w-2xl">
            {/* ערבית */}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl py-4 sm:py-6 shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-yellow-400">
                ערבית
              </h3>
              <div className="relative text-base sm:text-lg md:text-xl text-white font-medium">
                {ARVIT_TIME}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
              </div>
            </div>

            {/* מנחה */}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl py-4 sm:py-6 shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-yellow-400">
                מנחה
              </h3>
              <div className="relative text-base sm:text-lg md:text-xl text-white font-medium">
                <span dir="rtl">{MINCHA_TIME}</span>
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
              </div>
            </div>

            {/* שחרית */}
            <div className="flex flex-col items-center bg-gray-800 rounded-xl py-4 sm:py-6 shadow-lg hover:shadow-2xl transition-all">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-yellow-400">
                שחרית
              </h3>
              <div className="relative text-base sm:text-lg md:text-xl text-white font-medium">
                {SHAKARIT_TIME}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-12 sm:w-16 h-0.5 bg-yellow-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* כפתור */}
        <Link
          to="/prayer-times-full"
          className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 mt-6 sm:mt-8 text-base sm:text-lg font-semibold text-gray-900 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
        >
          לכל זמני התפילות
          <FaArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
        </Link>
      </div>
    </section>
  );
};

export default PrayerTimesSection;
