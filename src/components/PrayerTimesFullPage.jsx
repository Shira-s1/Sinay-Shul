import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import BottomSection from './BottomSection';

const prayerTimes = {
  shacharit: '05:20',
  mincha: ' 20 דקות לפני שקיעה',
  maariv: 'צאת כוכבים',
  shabbat: {
    shacharit: '08:30',
    mincha: '18:00',
  }
};

const PrayerTimesFullPage = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
   

      <div className="container mx-auto p-4 sm:p-8 lg:p-12 mt-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-right relative">
            זמני התפילות
            <div className="absolute bottom-[-10px] right-0 w-24 h-1 bg-yellow-600 rounded-full"></div>
          </h1>
          <Link to="/" className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-5 w-5">
              <path d="M5 12L19 12" />
              <path d="M12 5L19 12L12 19" />
            </svg>
            חזור לדף הבית
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 text-gray-800">
          <p className="text-xl leading-relaxed text-right mb-6">
            ברוכים הבאים לדף זמני התפילות המלא של בית הכנסת סיני. כאן תוכלו למצוא את כל הזמנים המעודכנים ליום-יום, לשבתות ולחגים.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* זמני תפילות יומיים */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-inner text-right">
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">תפילות חול</h3>
              <p className="text-lg mb-2">
                <span className="font-semibold text-gray-700">שחרית:</span> {prayerTimes.shacharit}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold text-gray-700">מנחה:</span> {prayerTimes.mincha}
              </p>
              <p className="text-lg">
                <span className="font-semibold text-gray-700">ערבית:</span> {prayerTimes.maariv}
              </p>
            </div>

            {/* זמני שבת וחג */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-inner text-right">
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">שבת קודש</h3>
              <p className="text-lg mb-2">
                <span className="font-semibold text-gray-700">קבלת שבת:</span> {prayerTimes.shabbat.kabbalatShabbat}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold text-gray-700">שחרית:</span> {prayerTimes.shabbat.shacharit}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold text-gray-700">מנחה:</span> {prayerTimes.shabbat.mincha}
              </p>
            </div>

            {/* פרטים נוספים והערות */}
            <div className="p-6 bg-gray-100 rounded-lg shadow-inner text-right md:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">הערות חשובות</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>זמני תפילה יכולים להשתנות בהתאם לעונות השנה ולמועדים.</li>
                <li>מומלץ להתעדכן בזמנים המדויקים בלוח המודעות של בית הכנסת.</li>
              </ul>
            </div>

            <div className="md:col-span-2 lg:col-span-3 mt-6">
                <div className="bg-white border-4 border-yellow-600 rounded-lg shadow-lg p-6 md:p-8 text-right">
                    <h4 className="text-2xl font-bold text-yellow-600 mb-4">זמני קבלת שבת ומנחה  </h4>
                    <p className="text-lg text-gray-800 mb-2 font-semibold">
                        <span className="text-yellow-700">בקיץ:</span> אנו מתחילים בתפילת "שיר השירים" כ-20 דקות לפני זמן הדלקת הנרות.
                    </p>
                    <p className="text-lg text-gray-800 font-semibold">
                        <span className="text-yellow-700">בחורף:</span> תפילת מנחה של ערב שבת מתקיימת כ-20 דקות לפני זמן הדלקת הנרות.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PrayerTimesFullPage;
