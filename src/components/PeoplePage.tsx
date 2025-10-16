import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, Variants } from "framer-motion";
import { UserCircle2 } from 'lucide-react';

// הגדרת הטיפוסים לרכיב PersonCardProps
interface PersonCardProps {
  name: string;
  role: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  type: "image" | "icon";
  delay: number;
}

// נתוני האנשים, עם טיפוסים מוגדרים היטב
const people: Omit<PersonCardProps, 'delay'>[] = [
  {
    name: "הרב יוסף ורון",
    role: "רב בית הכנסת",
    description: "הרב מנהיג את קהילת בית הכנסת מזה שני עשורים, ומספק הדרכה רוחנית, שיעורים מעמיקים וליווי אישי לחברי הקהילה. הוא ידוע באישיותו החמה וביכולתו לחבר בין כל קצוות האוכלוסייה.",
    image: "/images/HaravVaron.png",
    type: "image",
  },
  {
    name: "ר' אריה גינדי",
    role: "גבאי בית הכנסת",
    description: "ר' אריה אחראי על ניהול התפילות, הקפדה על סדרי בית הכנסת והנחיית המתפללים. הוא דואג שהתפילות יתקיימו באווירה מכובדת ומרגשת.",
    // הפכתי את ה-size ל-100% כדי שיתאים ל-div העוטף
    icon: <UserCircle2 size="100%" className="text-gray-400" />,
    type: "icon",
  },
  {
    name: "ר' אליהו טחן",
    role: "חזן בית הכנסת",
    description: "ר' אליהו הוא החזן של בית הכנסת, קולו המיוחד והמרגש מוסיף לאווירת התפילה ומחבר את המתפללים לרוחניות של המקום. הוא מבצע את התפילות והברכות בצורה מרגשת ומרוממת.",
    icon: <UserCircle2 size="100%" className="text-gray-400" />,
    type: "icon",
  },
];

const PersonCard: React.FC<PersonCardProps> = ({ name, role, description, image, icon, type, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: Number(delay),
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 sm:p-8 rounded-xl shadow-xl flex flex-col items-center text-center h-full transition-all duration-300 hover:shadow-2xl hover:scale-[1.03] transform"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {type === "image" ? (
        <img
          src={image}
          alt={name}
          // הקטנת התמונה והאייקון למובייל
          className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4 sm:mb-6 border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:border-yellow-600"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error(`Image failed to load: ${target.src}`);
            target.onerror = null; // prevents infinite loop
            // שימוש ב-placeholder רספונסיבי
            target.src = "https://placehold.co/192x192/808080/FFFFFF?text=תמונה";
          }}
        />
      ) : (
        <div
          // ה-div הזה קובע את הגודל הרספונסיבי. האייקון בתוכו יתאים את עצמו (כי size=100%).
          className="w-32 h-32 sm:w-48 sm:h-48 flex items-center justify-center rounded-full mb-4 sm:mb-6 border-4 border-transparent transition-all duration-300 ease-in-out cursor-pointer hover:border-yellow-600"
          aria-label={name}
        >
          {/* פשוט מציגים את האייקון כפי שהוא, לאחר ששינינו את גודלו ל-100% בהגדרת הנתונים */}
          {icon}
        </div>
      )}
      {/* הקטנת הכותרת במובייל */}
      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1 sm:mb-2">{name}</h3>
      {/* הקטנת התפקיד במובייל */}
      <p className="text-yellow-700 text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{role}</p>
      {/* הקטנת התיאור במובייל */}
      <p className="text-gray-700 leading-relaxed flex-grow text-base sm:text-lg">{description}</p>
    </motion.div>
  );
};

const PeoplePage: React.FC = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-gray-100 min-h-screen py-10 sm:py-16 px-4 text-gray-800" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={headerRef}
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* הקטנת הכותרת הראשית במובייל */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-700 mb-4 sm:mb-6">
            הנהגת הקהילה
          </h1>
          {/* הקטנת כותרת המשנה במובייל */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            הכירו את האנשים המסורים המניעים את הקהילה שלנו, כל אחד מהם תורם באמונה ומסירות לרוח בית הכנסת.
          </p>
        </motion.div>
        {/* הפריסה נשארת: 1 עמודה במובייל, 2 בטאבלט, 3 בדסקטופ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {people.map((person, index) => (
            <PersonCard key={index} {...person} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
