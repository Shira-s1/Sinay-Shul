import React from 'react';
import { Link } from 'react-router-dom';

// ************************************
// הערה: רכיבים חיצוניים Navbar ו-BottomSection הוסרו מהייבוא
// כדי לאפשר הרצה של הקוד כרכיב עצמאי.
// ************************************

const prayerTimes = {
  shacharit: '05:20',
  mincha: ' 20 דקות לפני שקיעה',
  maariv: 'צאת כוכבים',
  shabbat: {
    shacharit: '08:30',
    mincha: '18:00',
    kabbalatShabbat: 'זמן הדלקת נרות', // הוספתי הגדרה זו כדי למנוך שגיאה בקטע השבת
  }
};

const PrayerTimesFullPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* הקטנת ה-mt-20 במובייל ל-mt-10, ושמירה על ריווח רספונסיבי */}
      <div className="container mx-auto p-4 sm:p-8 lg:p-12 mt-10 sm:mt-16 md:mt-20">
        <div className="flex justify-between items-start mb-6 sm:mb-8 flex-col sm:flex-row">
          {/* הקטנת הכותרת הראשית במובייל */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 text-right relative mb-4 sm:mb-0">
            זמני התפילות
            <div className="absolute bottom-[-5px] right-0 w-16 md:w-24 h-1 bg-yellow-600 rounded-full"></div>
          </h1>

          {/* התאמת גודל הלינק במובייל */}
          <Link
            to="/"
            className="flex items-center text-yellow-600 hover:text-yellow-700 transition-colors duration-200 text-sm sm:text-base font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5"
            >
              <path d="M5 12L19 12" />
              <path d="M12 5L19 12L12 19" />
            </svg>
            חזור לדף הבית
          </Link>
        </div>

        {/* הקטנת ריווח ו-padding של הקופסה הראשית במובייל */}
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8 mb-8 text-gray-800 border-t-4 border-yellow-500">
          {/* הקטנת הטקסט המבואי במובייל */}
          <p className="text-base sm:text-xl leading-relaxed text-right mb-6 font-medium">
            ברוכים הבאים לדף זמני התפילות המלא של בית הכנסת סיני. כאן תוכלו למצוא את כל הזמנים המעודכנים ליום-יום, לשבתות ולחגים.
          </p>

          {/* המעבר ל-3 עמודות נשמר רק בדסקטופ (lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* זמני תפילות יומיים */}
            <div className="p-5 bg-yellow-50 rounded-lg shadow-md text-right border-r-4 border-yellow-600">
              {/* הקטנת כותרת הקטגוריה במובייל */}
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-3 border-b border-yellow-300 pb-2">תפילות חול</h3>
              {/* הקטנת הטקסט בתוך הכרטיס במובייל */}
              <p className="text-base sm:text-lg mb-2">
                <span className="font-semibold text-gray-700">שחרית:</span> {prayerTimes.shacharit}
              </p>
              <p className="text-base sm:text-lg mb-2">
                <span className="font-semibold text-gray-700">מנחה:</span> {prayerTimes.mincha}
              </p>
              <p className="text-base sm:text-lg">
                <span className="font-semibold text-gray-700">ערבית:</span> {prayerTimes.maariv}
              </p>
            </div>

            {/* זמני שבת וחג */}
            <div className="p-5 bg-yellow-50 rounded-lg shadow-md text-right border-r-4 border-yellow-600">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-3 border-b border-yellow-300 pb-2">שבת קודש</h3>
              <p className="text-base sm:text-lg mb-2">
                <span className="font-semibold text-gray-700">קבלת שבת:</span> {prayerTimes.shabbat.kabbalatShabbat}
              </p>
              <p className="text-base sm:text-lg mb-2">
                <span className="font-semibold text-gray-700">שחרית:</span> {prayerTimes.shabbat.shacharit}
              </p>
              <p className="text-base sm:text-lg mb-2">
                <span className="font-semibold text-gray-700">מנחה:</span> {prayerTimes.shabbat.mincha}
              </p>
            </div>

            {/* פרטים נוספים והערות - שימוש ב-md:col-span-2 כדי לכסות את השטח בטאבלט */}
            <div className="p-5 bg-yellow-50 rounded-lg shadow-md text-right border-r-4 border-yellow-600 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-3 border-b border-yellow-300 pb-2">הערות חשובות</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-base sm:text-lg">
                <li>זמני תפילה יכולים להשתנות בהתאם לעונות השנה ולמועדים.</li>
                <li>מומלץ להתעדכן בזמנים המדויקים בלוח המודעות של בית הכנסת.</li>
              </ul>
            </div>

            {/* קופסת דגש נוסף - גם פה הפחתתי גדלים */}
            <div className="md:col-span-2 lg:col-span-3 mt-4 sm:mt-6">
              <div className="bg-white border-4 border-yellow-600 rounded-xl shadow-lg p-5 md:p-8 text-right">
                <h4 className="text-xl sm:text-2xl font-extrabold text-yellow-700 mb-4">זמני קבלת שבת ומנחה  </h4>
                <p className="text-base sm:text-lg text-gray-800 mb-2 font-semibold">
                  <span className="text-yellow-700 font-bold">בקיץ:</span> אנו מתחילים בתפילת "שיר השירים" כ-20 דקות לפני זמן הדלקת הנרות.
                </p>
                <p className="text-base sm:text-lg text-gray-800 font-semibold">
                  <span className="text-yellow-700 font-bold">בחורף:</span> תפילת מנחה של ערב שבת מתקיימת כ-20 דקות לפני זמן הדלקת הנרות.
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
