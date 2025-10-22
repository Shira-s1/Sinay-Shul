// src/App.jsx
import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading של דפים ורכיבים כבדים
const LazyPrayerTimesSection = React.lazy(() => import('./components/PrayerTimesSection'));
const LazyHistorySection = React.lazy(() => import('./components/HistorySection'));
const HistoryPage = React.lazy(() => import('./components/HistoryPage'));
const PeoplePage = React.lazy(() => import('./components/PeoplePage'));
const ChessedCenterPage = React.lazy(() => import('./components/ChessedCenterPage'));
const PrayerTimesFullPage = React.lazy(() => import('./components/PrayerTimesFullPage'));
const GalleryPage = React.lazy(() => import('./components/GalleryPage'));
const LazyBottomSection = React.lazy(() => import('./components/BottomSection'));

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <html lang="he" />
        <title>בית הכנסת סיני</title>
        <meta
          name="description"
          content="בית הכנסת סיני – מקום של תפילה, למידה, חיבור קהילתי, ומורשת יהודית מפוארת. הצטרפו לפעילויות, שיעורי תורה, ולחוויות קהילתיות מרתקות."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Helmet>

      <Navbar />

      <main id="main-content" role="main">
        <Routes>
          {/* דף הבית */}
          <Route
            path="/"
            element={
              <>
                <header
                  id="home-section"
                  className="relative bg-white text-gray-800 py-24 md:py-32 overflow-hidden shadow-sm"
                >
                  <div className="absolute inset-0 z-0 opacity-5">
                    <svg
                      className="w-full h-full"
                      fill="none"
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
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

                {/* PrayerTimesSection */}
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyPrayerTimesSection />
                </Suspense>

                {/* HistorySection */}
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyHistorySection />
                </Suspense>

                <section id="events" className="bg-gray-100 py-16 px-4">
                  <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10 relative">
                      פעילויות ואירועים קרובים
                      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow-600 rounded-full"></div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <article className="bg-white p-6 rounded-lg shadow-md text-right hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">הילולת רבי מאיר בעל הנס</h3>
                        <p className="text-yellow-700 text-lg mb-4">יום חמישי, י"ד באייר | 20:00</p>
                        <p className="text-gray-700 leading-relaxed">
                          ערב מיוחד לכבוד הילולת התנא הקדוש, עם תפילות, סעודה והרצאות מרתקות על דמותו ופועלו. הציבור מוזמן!
                        </p>
                      </article>
                      <article className="bg-white p-6 rounded-lg shadow-md text-right hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">שיעור תורה שבועי</h3>
                        <p className="text-yellow-700 text-lg mb-4">יום שלישי | 19:30</p>
                        <p className="text-gray-700 leading-relaxed">
                          שיעור תורה מרתק ומרענן עם הרבנית שרה כהן, בנושא פרשת השבוע והלכה למעשה. בואו להתחזק וללמוד באווירה נעימה.
                        </p>
                      </article>
                      <article className="bg-white p-6 rounded-lg shadow-md text-right hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">ל"ג בעומר - מדורה קהילתית</h3>
                        <p className="text-yellow-700 text-lg mb-4">י"ז באייר | 21:00</p>
                        <p className="text-gray-700 leading-relaxed">
                          חוגגים יחד את ל"ג בעומר עם מדורה גדולה, שירים, ופעילויות לילדים. בואו להצטרף לחגיגה קהילתית שמחה!
                        </p>
                      </article>
                    </div>
                  </div>
                </section>

                {/* BottomSection */}
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyBottomSection />
                </Suspense>
              </>
            }
          />

          {/* דפים נפרדים */}
          <Route
            path="/history"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HistoryPage />
                <LazyBottomSection />
              </Suspense>
            }
          />
          <Route
            path="/people"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PeoplePage />
                <LazyBottomSection />
              </Suspense>
            }
          />
          <Route
            path="/chessed"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <ChessedCenterPage />
                <LazyBottomSection />
              </Suspense>
            }
          />
          <Route
            path="/prayer-times-full"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <PrayerTimesFullPage />
                <LazyBottomSection />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <GalleryPage />
                <LazyBottomSection />
              </Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
