// src/components/PeoplePage.jsx
import React from 'react';
import { FaUserTie, FaUsers, FaChild, FaHandshake } from 'react-icons/fa'; 
import { useInView } from 'react-intersection-observer';
import Navbar from './Navbar';
import BottomSection from './BottomSection';


const getPersonImageUrl = (name) => {
    return new URL(`../images/${name}`, import.meta.url).href;
};

const styles = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
}

/* Delay for staggered animation */
.animate-delay-100 { animation-delay: 0.1s; }
.animate-delay-200 { animation-delay: 0.2s; }
.animate-delay-300 { animation-delay: 0.3s; }
.animate-delay-400 { animation-delay: 0.4s; }
`;


const PersonCard = ({ name, role, description, image, icon: IconComponent, delay }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
        <div ref={ref} className={`bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center text-center h-full transition-all duration-500 ease-in-out ${inView ? `animate-fadeInUp animate-delay-${delay}` : 'opacity-0'}`}>
            {image ? (
                <img
                    src={getPersonImageUrl(image)}
                    alt={name}
                    className="w-48 h-48 object-cover rounded-full mb-6 border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:border-yellow-600"
                />
            ) : (
                IconComponent && <IconComponent className="text-yellow-600 text-5xl mx-auto mb-6" />
            )}
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">{name}</h3>
            <p className="text-yellow-700 text-xl font-semibold mb-4">{role}</p>
            <p className="text-gray-700 leading-relaxed flex-grow text-lg">{description}</p>
        </div>
    );
};

const PeoplePage = () => {
    const people = [
        {
            name: "הרב יוסף ורון",
            role: "רב בית הכנסת",
            description: "הרב מנהיג את קהילת בית הכנסת מזה שני עשורים, ומספק הדרכה רוחנית, שיעורים מעמיקים וליווי אישי לחברי הקהילה. הוא ידוע באישיותו החמה וביכולתו לחבר בין כל קצוות האוכלוסייה.",
            image: "HaravVaron.png",
            icon: FaUserTie,
        },
        {
            name: "ר' אריה גינדי",
            role: "גבאי בית הכנסת",
            description: "ר' אריה אחראי על ניהול התפילות, הקפדה על סדרי בית הכנסת והנחיית המתפללים. הוא דואג שהתפילות יתקיימו באווירה מכובדת ומרגשת.",
            image: "windows.png", 
            icon: FaUserTie,
        },
        {
            name: "ר' אליהו טחן",
            role: "חזן בית הכנסת",
            description: "ר' אליהו הוא החזן של בית הכנסת, קולו המיוחד והמרגש מוסיף לאווירת התפילה ומחבר את המתפללים לרוחניות של המקום. הוא מבצע את התפילות והברכות בצורה מרגשת ומרוממת.",
            image: "windows.png",
            icon: FaUserTie,
        },
    ];

    const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="bg-gray-100 min-h-screen py-16 px-4 text-gray-800" dir="rtl">
            <style>{styles}</style>
            <div className="container mx-auto max-w-6xl">
                <div ref={headerRef} className={`text-center ${headerInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-700 mb-6">הנהגת הקהילה</h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                        הכירו את האנשים המסורים המניעים את הקהילה שלנו, כל אחד מהם תורם באמונה ומסירות לרוח בית הכנסת.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {people.map((person, index) => (
                        <PersonCard key={index} {...person} delay={(index + 1) * 100} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PeoplePage;
