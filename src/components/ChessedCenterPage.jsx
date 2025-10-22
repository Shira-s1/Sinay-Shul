import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Inline SVG icons
const UtensilsIcon = () => (
  <svg className="text-yellow-600 w-10 h-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M4 2v20h2V2H4zm14 0h-2v20h2V2zM10 4h2v16h-2V4z" />
  </svg>
);
const BookIcon = () => (
  <svg className="text-yellow-600 w-10 h-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 4h12v16H6V4zm2 2v12h8V6H8z" />
  </svg>
);
const HandsHelpingIcon = () => (
  <svg className="text-yellow-600 w-10 h-10 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2 12l5 5 7-7-5-5-7 7zm10 0l5 5 7-7-5-5-7 7z" />
  </svg>
);

const ActivityCard = ({ title, description, Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 text-right">
    {Icon && <Icon />}
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ChessedCenterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activities = [
    {
      title: "חלוקת מזון לנזקקים",
      description:
        "מדי שבוע אנו מחלקים סלי מזון למשפחות נזקקות באזור, ומבטיחים שאף אחד לא יישאר רעב. התרומות שלכם מאפשרות לנו להמשיך בפעילות חיונית זו.",
      Icon: UtensilsIcon,
    },
    {
      title: "שיעורי תורה וסיוע לימודי",
      description:
        "מרכז החסד מקיים שיעורים לכל הגילאים ומציע סיוע לימודי לילדים ובני נוער מהקהילה, תוך דגש על העצמה אישית ורוחנית.",
      Icon: BookIcon,
    },
    {
      title: "פעילויות התנדבות בקהילה",
      description:
        "אנו מארגנים מגוון רחב של פעילויות התנדבות, מניקיון וגינון ועד סיוע באירועי קהילה גדולים, הכל במטרה לחזק את הקשרים הקהילתיים.",
      Icon: HandsHelpingIcon,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 text-gray-800">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-center text-yellow-700 mb-12">מרכז החסד של בית הכנסת</h1>
        <p className="text-lg leading-relaxed text-center mb-10">
          מרכז החסד של בית הכנסת סיני הוא הלב הפועם של פעילותנו למען הקהילה. אנו מאמינים בערבות הדדית ובמתן בסתר, ושואפים להושיט יד לכל נזקק, לכל משפחה ולכל אדם.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors duration-300"
          >
            חזרה לדף הבית
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7v14z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChessedCenterPage;
