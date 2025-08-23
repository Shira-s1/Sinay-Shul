// src/components/ChessedCenterPage.jsx
import React, { useEffect } from 'react';
import { FaHandsHelping, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const getImageUrl = (name) => {
    return new URL(`../images/${name}`, import.meta.url).href;
};

const ActivityCard = ({ title, description, icon: IconComponent }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 text-right">
        {IconComponent && <IconComponent className="text-yellow-600 text-4xl flex-shrink-0" />}
        <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
    </div>
);

const ChessedCenterPage = () => {
    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const activities = [
        {
            title: "חלוקת מזון לנזקקים",
            description: "מדי שבוע אנו מחלקים סלי מזון למשפחות נזקקות באזור, ומבטיחים שאף אחד לא יישאר רעב. התרומות שלכם מאפשרות לנו להמשיך בפעילות חיונית זו.",
            icon: FaUtensils,
        },
        {
            title: "תמיכה בקשישים ועריריים",
            description: "מתנדבים שלנו מבקרים קשישים ועריריים, מסייעים במטלות יומיומיות, מספקים חברה חמה ואוזן קשבת, ומפיגים בדידות.",
            icon: FaUsers,
        },
        {
            title: "שיעורי תורה וסיוע לימודי",
            description: "מרכז החסד מקיים שיעורים לכל הגילאים ומציע סיוע לימודי לילדים ובני נוער מהקהילה, תוך דגש על העצמה אישית ורוחנית.",
            icon: FaBook,
        },
        {
            title: "פעילויות התנדבות בקהילה",
            description: "אנו מארגנים מגוון רחב של פעילויות התנדבות, מניקיון וגינון ועד סיוע באירועי קהילה גדולים, הכל במטרה לחזק את הקשרים הקהילתיים.",
            icon: FaHandsHelping,
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4 text-gray-800">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-5xl font-bold text-center text-yellow-700 mb-12">מרכז החסד של בית הכנסת</h1>
                <p className="text-lg leading-relaxed text-center mb-10">
                    מרכז החסד של בית הכנסת סיני הוא הלב הפועם של פעילותנו למען הקהילה.
                    אנו מאמינים בערבות הדדית ובמתן בסתר, ושואפים להושיט יד לכל נזקק, לכל משפחה ולכל אדם.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>
                 <div className="text-center mt-12">
                    <Link to="/" className="inline-flex items-center bg-yellow-600 text-white font-bold py-3 px-8 rounded-full hover:bg-yellow-700 transition-colors duration-300">
                        חזרה לדף הבית
                        <FaArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChessedCenterPage;
