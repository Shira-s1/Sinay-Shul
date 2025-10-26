import React, { useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';

// *** תיקון נתיב הייבוא של התמונה מתיקיית public ***
// במקום '../public/images/artOtTheCovenant.webp', הנתיב הנכון הוא:
const HeroImage = '/images/artOtTheCovenant.webp';

// Lazy loading של דפים ורכיבים כבדים (ללא שינוי)
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
    // לוגיקה לטיפול בגלילה לקישורי עוגן (עם קיזוז ל-Navbar קבוע)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const offset = 80;
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: 'smooth'
        });
      }
    } else {
      // גלילה לראש הדף רק אם אין עוגן ב-URL
      window.scrollTo(0, 0);
    }
  }, [location]);

  // הגדרת קלאס ל-Hero Section כמשתנה (לשימוש חוזר בתוך סקשן ה-Header)
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
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
                {/* *** Hero Section - עם האפלה מוגברת (85%) ואפקטים *** */}
                <header
                  id="home-section"
                  style={heroStyle}
                  className="relative bg-cover bg-center bg-no-repeat py-32 md:py-48 overflow-hidden shadow-lg 
                                               after:absolute after:inset-0 after:bg-navy/85 after:z-0"
                >
                  {/* SVG קישוטי - מוסתר במובייל */}
                  <div className="absolute inset-0 z-0 opacity-5 hidden md:block">
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

                  {/* // *** קטע קוד Hero Section מתוקן (הכי קריא) *** */}
                  <div className="container mx-auto px-4 relative z-10 text-center">

                    {/* כותרת ראשית: חוזר ל-text-white ומשתמש בצל חזק (shadow-2xl) */}
                    <h1 className="text-6xl md:text-7xl font-extrabold font-serif-display mb-4 animate-fade-in-up text-white text-shadow-2xl">
                      ברוכים הבאים ל<span className="text-gold-accent">בית הכנסת סיני</span>
                    </h1>

                    {/* פסקה: חוזר ל-text-gray-200 ומשתמש בצל חזק */}
                    <p className="text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in text-shadow-2xl">
                      מק<span className="whitespace-nowrap">ום של תפילה,</span> למידה, חיבור קהילתי, ומורשת יהודית מפוארת.
                    </p>

                  </div>
                </header>

                {/* PrayerTimesSection - Lazy Loading */}
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyPrayerTimesSection />
                </Suspense>

                {/* HistorySection - Lazy Loading */}
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyHistorySection />
                </Suspense>

                {/* סקשן אירועים - ללא שינוי, העיצוב כבר נקי ומקצועי */}
                <section id="events" className="bg-gray-50 py-20 md:py-24 px-4">
                  <div className="container mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold font-serif-display text-center text-navy mb-12 relative">
                      פעילויות ואירועים קרובים
                      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-28 h-1 bg-gold-accent rounded-full"></div>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                      {/* קלף אירוע לדוגמה 1 */}
                      <article className="bg-white p-6 rounded-xl shadow-lg text-right hover:shadow-2xl transition-all duration-300 border-t-4 border-gold-accent">
                        <div className="text-gold-accent text-lg font-semibold mb-3 flex items-center justify-end">
                          <span className="text-xl ml-2">📅</span> יום חמישי, י"ד באייר | 20:00
                        </div>
                        <h3 className="text-2xl font-bold text-navy mb-3">הילולת רבי מאיר בעל הנס</h3>
                        <p className="text-gray-700 leading-relaxed">
                          ערב מיוחד לכבוד הילולת התנא הקדוש, עם תפילות, סעודה והרצאות מרתקות על דמותו ופועלו. הציבור מוזמן!
                        </p>
                        <a href="#" className="mt-4 inline-block text-sm font-semibold text-navy hover:text-gold-accent transition-colors border-b-2 border-transparent hover:border-gold-accent">קראו עוד ←</a>
                      </article>

                      {/* קלף אירוע לדוגמה 2 */}
                      <article className="bg-white p-6 rounded-xl shadow-lg text-right hover:shadow-2xl transition-all duration-300 border-t-4 border-gold-accent">
                        <div className="text-gold-accent text-lg font-semibold mb-3 flex items-center justify-end">
                          <span className="text-xl ml-2">📖</span> יום שלישי | 19:30
                        </div>
                        <h3 className="text-2xl font-bold text-navy mb-3">שיעור תורה שבועי</h3>
                        <p className="text-gray-700 leading-relaxed">
                          שיעור תורה מרתק ומרענן עם הרבנית שרה כהן, בנושא פרשת השבוע והלכה למעשה. בואו להתחזק וללמוד באווירה נעימה.
                        </p>
                        <a href="#" className="mt-4 inline-block text-sm font-semibold text-navy hover:text-gold-accent transition-colors border-b-2 border-transparent hover:border-gold-accent">קראו עוד ←</a>
                      </article>

                      {/* קלף אירוע לדוגמה 3 */}
                      <article className="bg-white p-6 rounded-xl shadow-lg text-right hover:shadow-2xl transition-all duration-300 border-t-4 border-gold-accent">
                        <div className="text-gold-accent text-lg font-semibold mb-3 flex items-center justify-end">
                          <span className="text-xl ml-2">🔥</span> י"ז באייר | 21:00
                        </div>
                        <h3 className="text-2xl font-bold text-navy mb-3">ל"ג בעומר - מדורה קהילתית</h3>
                        <p className="text-gray-700 leading-relaxed">
                          חוגגים יחד את ל"ג בעומר עם מדורה גדולה, שירים, ופעילויות לילדים. בואו להצטרף לחגיגה קהילתית שמחה!
                        </p>
                        <a href="#" className="mt-4 inline-block text-sm font-semibold text-navy hover:text-gold-accent transition-colors border-b-2 border-transparent hover:border-gold-accent">קראו עוד ←</a>
                      </article>

                    </div>
                  </div>
                </section>

                {/* BottomSection - Lazy Loading */}
                <Suspense fallback={<LoadingSpinner />}>
                  <LazyBottomSection />
                </Suspense>
              </>
            }
          />

          {/* דפים נפרדים - כל הניתובים (Routes) - ללא שינוי */}
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