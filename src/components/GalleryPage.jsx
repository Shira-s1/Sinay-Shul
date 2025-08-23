import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const GalleryPage = () => {
    // נתיבי התמונות מסודרים לפי קטגוריות
    const categories = [
        {
            title: "תהליך הבנייה: לידת הקהילה",
            images: [
                "src/images/hut.png",
                "src/images/hut2.png",
                "src/images/hut3.png",
                "src/images/hut4.png",
                "src/images/inMiddleOfBuild.png",
                "src/images/inMiddleOfBuild2.png",
                "src/images/inMiddleOfBuild3.png",
                "src/images/inMiddleOfBuild4.png",
                "src/images/inMiddleOfBuild5.png",
                "src/images/inMiddleOfBuild6.png",
                "src/images/entarance_old.png",
                "src/images/entarance_old1.png",
                "src/images/startBuild.png",
            ],
        },
        {
            title: "חנוכת הבית",
            images: [
                "src/images/hanucatBait.png",
                "src/images/hanuchatBait.png",
            ],
        },
        {
            title: "זיכרון עבר: איך התחלנו",
            images: [
                "src/images/inside_old1.png",
                "src/images/inside_old2.png",
                "src/images/inside_old3.png",
                "src/images/inside_old4.png",
                "src/images/inside_old5.png",
                "src/images/inside_old6.png",
                "src/images/inside_old7.png",
                "src/images/inside_old8.png",
                "src/images/inside_old9.png",
                "src/images/inside_old10.png",
                "src/images/oldWithBooks.png",
            ],
        },
        {
            title: "היום שלנו: קהילה פורחת",
            images: [
                "src/images/ArtOtTheCovenant.png",
                "src/images/ArtOtTheCovenant1.jpg",
                "src/images/ArtOtTheCovenant2.jpg",
                "src/images/background.jpg",
                "src/images/board.png",
                "src/images/bracha.png",
                "src/images/stage.jpg",
                "src/images/windows.png",
            ],
        },
    ];

    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center p-8 text-center font-['Inter']">
            <h1 className="text-5xl font-extrabold text-yellow-700 mb-4">
                גלריית בית הכנסת
            </h1>
            <p className="max-w-3xl mx-auto text-center mb-12 px-4 md:px-0 text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide font-light">
                ברוכים הבאים לגלריה שלנו! כאן תוכלו למצוא הצצה מרגשת אל מסעו של בית הכנסת, מתהליך הבנייה המרגש ועד למראה הנוכחי שמשמש בית לקהילה חמה ותוססת.
            </p>

            <div className="container mx-auto space-y-24"> {/* הגדלת רווחים בין קטגוריות */}
                {categories.map((category, index) => {
                    const [ref, inView] = useInView({
                        triggerOnce: true,
                        threshold: 0.1,
                    });

                    const isSpecialCategory = category.title === "חנוכת הבית";
                    const gridLayoutClasses = isSpecialCategory
                        ? "grid-cols-1 md:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
                    const imageSizeClass = isSpecialCategory ? "h-96" : "h-64";
                    const sectionClasses = isSpecialCategory
                        ? "flex flex-col items-center"
                        : "";
                    const cardShadowClasses = isSpecialCategory
                        ? "shadow-2xl hover:shadow-yellow-400"
                        : "shadow-lg hover:shadow-2xl";
                    const cardBackgroundClasses = isSpecialCategory
                        ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-4 border-yellow-500"
                        : "bg-white border-2 border-gray-200";

                    const specialTitleClasses = isSpecialCategory
                        ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-amber-700 border-b-4 border-yellow-600 pb-3 mb-12 font-extrabold text-4xl tracking-tight"
                        : "text-yellow-700 font-bold text-3xl mb-10 tracking-wide border-b-2 border-yellow-400 pb-2";

                    return (
                        <div key={index} className={`category-section ${sectionClasses}`} ref={ref}>
                            <h2 className={specialTitleClasses}>
                                {category.title}
                            </h2>
                            <div className={`grid gap-8 ${gridLayoutClasses}`}>
                                {category.images.map((src, imgIndex) => (
                                    <div
                                        key={imgIndex}
                                        className={`gallery-card p-2 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.05] ${cardShadowClasses} ${cardBackgroundClasses} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                            }`}
                                        style={{ transitionDelay: `${imgIndex * 50}ms` }}
                                    >
                                        <img
                                            className={`gallery-image w-full object-cover rounded-xl ${imageSizeClass}`}
                                            src={src}
                                            alt={`${category.title} - תמונה ${imgIndex + 1}`}
                                            onError={(e) => {
                                                e.target.src = "https://placehold.co/1024x768/e5e7eb/4b5563?text=תמונה+לא+נמצאה";
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* כפתור חזרה לדף הבית עם אפקט החץ */}
            <div className="text-center mt-12">
                <Link
          to="/"
          className="inline-flex items-center bg-yellow-600 text-white font-sans py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors duration-200 group select-none"
        >
          חזרה לדף הבית
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
        </Link>
            </div>
        </div>
    );
};

export default GalleryPage;
