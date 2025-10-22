// src/components/PeoplePage.jsx
import React from "react";
import { UserCircle2 } from "lucide-react";

const people = [
  {
    name: "הרב יוסף ורון",
    role: "רב בית הכנסת",
    description:
      "הרב מנהיג את קהילת בית הכנסת מזה שני עשורים, ומספק הדרכה רוחנית, שיעורים מעמיקים וליווי אישי לחברי הקהילה. הוא ידוע באישיותו החמה וביכולתו לחבר בין כל קצוות האוכלוסייה.",
    image: "/images/HaravVaron.webp",
  },
  {
    name: "ר' אריה גינדי",
    role: "גבאי בית הכנסת",
    description:
      "ר' אריה אחראי על ניהול התפילות, הקפדה על סדרי בית הכנסת והנחיית המתפללים. הוא דואג שהתפילות יתקיימו באווירה מכובדת ומרגשת.",
    icon: <UserCircle2 size="100%" className="text-gray-400" />,
  },
];

const PersonCard = ({ name, role, description, image, icon, type }) => (
  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] transform">
    {type === "image" && image ? (
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4 sm:mb-6 border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:border-yellow-600"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://placehold.co/192x192/808080/FFFFFF?text=תמונה";
        }}
      />
    ) : (
      <div className="w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center rounded-full mb-4 sm:mb-6 border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:border-yellow-600">
        {icon}
      </div>
    )}
    <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2">{name}</h3>
    <p className="text-yellow-700 text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{role}</p>
    <p className="text-gray-700 leading-relaxed flex-grow text-base sm:text-lg">{description}</p>
  </div>
);

const PeoplePage = () => (
  <div className="bg-gray-100 min-h-screen py-10 sm:py-16 px-4 text-gray-800" dir="rtl">
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-700 mb-4 sm:mb-6">
          הנהגת הקהילה
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          הכירו את האנשים המסורים המניעים את הקהילה שלנו, כל אחד מהם תורם באמונה ומסירות לרוח בית הכנסת.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
        {people.map((person, index) => (
          <PersonCard
            key={index}
            {...person}
            type={person.image ? "image" : "icon"}
          />
        ))}
      </div>
    </div>
  </div>
);

export default PeoplePage;
