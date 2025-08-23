// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrayerTimesSection from './components/PrayerTimesSection';
import HistorySection from './components/HistorySection';
import BottomSection from './components/BottomSection';
import HistoryPage from './components/HistoryPage';
import PeoplePage from './components/PeoplePage';
import ChessedCenterPage from './components/ChessedCenterPage';
import PrayerTimesFullPage from './components/PrayerTimesFullPage';
import GalleryPage from './components/GalleryPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Handling scrolling for internal pages or sections
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Auto-scroll to the top of the page on new navigation
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <header
              id="home-section"
              className="relative bg-white text-gray-800 py-24 md:py-32 overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 z-0 opacity-5">
                <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                  </pattern>
                  <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
                </svg>
              </div>

              <div className="container mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
                  ברוכים הבאים ל<span className="text-yellow-600">בית הכנסת סיני</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in">
                  מקום של תפילה, למידה, חיבור קהילתי, ומורשת יהודית מפוארת.
                </p>
              </div>
            </header>

            <PrayerTimesSection />
            <HistorySection />

            {/* Events Section */}
            <section id="events" className="bg-gray-100 py-16 px-4">
              <div className="container mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10 relative">
                  פעילויות ואירועים קרובים
                  <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-600 rounded-full"></div>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Sample Event Card 1 */}
                  <div className="bg-white p-6 rounded-lg shadow-md text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">הילולת רבי מאיר בעל הנס</h3>
                    <p className="text-yellow-700 text-lg mb-4">יום חמישי, י"ד באייר | 20:00</p>
                    <p className="text-gray-700 leading-relaxed">ערב מיוחד לכבוד הילולת התנא הקדוש, עם תפילות, סעודה והרצאות מרתקות על דמותו ופועלו. הציבור מוזמן!</p>
                  </div>
                  {/* Sample Event Card 2 */}
                  <div className="bg-white p-6 rounded-lg shadow-md text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">שיעור תורה שבועי לנשים</h3>
                    <p className="text-yellow-700 text-lg mb-4">יום שלישי | 19:30</p>
                    <p className="text-gray-700 leading-relaxed">שיעור תורה מרתק ומרענן עם הרבנית שרה כהן, בנושא פרשת השבוע והלכה למעשה. בואי להתחזק וללמוד באווירה נעימה.</p>
                  </div>
                  {/* Sample Event Card 3 */}
                  <div className="bg-white p-6 rounded-lg shadow-md text-right">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ל"ג בעומר - מדורה קהילתית</h3>
                    <p className="text-yellow-700 text-lg mb-4">מוצ"ש, י"ז באייר | 21:00</p>
                    <p className="text-gray-700 leading-relaxed">חוגגים יחד את ל"ג בעומר עם מדורה גדולה, שירים, ופעילויות לילדים. בואו להצטרף לחגיגה קהילתית שמחה!</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        } />

        {/* Other Routes */}
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/chessed" element={<ChessedCenterPage />} />
        <Route path="/prayer-times-full" element={<PrayerTimesFullPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>

      <BottomSection />
    </div>
  );
}

export default App;
