import React, { useState, useRef } from "react";
import HeroSection from "../components/HeroSection";

const jobListingsData = [
  { id: 1, title: "מהנדס פיתוח תוכנה", details: " מגוון משרות למהנדסי פיתוח תוכנה עם ניסיון בפיתוח בשפות כמו Java, C++, Python ועוד. המשרות כוללות פיתוח בצוותים גדולים ועבודה עם טכנולוגיות חדשות." },
  { id: 2, title: "מעצב UI/UX", details: "הזדמנות לעבוד כמעצב UI/UX בחברת ניסיון ולקחת חלק בעיצוב ופיתוח של ממשקים משתמשים. התפקיד כולל יצירת עיצובים מרהיבים ובדיקת ממשקי משתמש." },
  { id: 4, title: "מנהל מערכות מידע", details: "הזדמנות להשתלב בצוות מערכות מידע גדול ולנהל תשתיות IT מתקדמות. התפקיד כולל אחריות על פיתוח, תחזוקה ושדרוג של מערכות המידע." },
{ id: 5, title: "מתכנת Python", details: "מתכנת Python ומפתח אוטומציה? יש לך הזדמנות לעבוד על פרויקטים מתקדמים ולפתח תהליכים באמצעות התקנות פייתון." },
{ id: 6, title: "מהנדס QA", details: "משרות למהנדסי QA עם יכולת לבדוק ולוודא את איכות התוכנה. המשרות כוללות בדיקות ידניות ואוטומטיות, כתיבת סקריפטים ודרישות תוכנה." },
{ id: 7, title: "מפתח פרונט-אנד", details: "הזדמנות להשתלב בקבוצת פיתוח חדשנית ולפתח אתרים דינמיים וממשקים משתמשים מהמם. נדרש ניסיון בטכנולוגיות כמו React ו-Vue." },
{ id: 8, title: "מנהל מוצר", details: "כמנהל מוצר תוכל להוביל צוות פיתוח, לבנות ולמקד את המוצר. נדרשת יכולת ניהול יצירתית, יכולת ניהול פרויקטים ושיווק." },
{ id: 9, title: "מהנדס תוכנה Senior", details: "הזדמנות להוביל צוות פיתוח ולשפר את התשתית הטכנולוגית. נדרש ניסיון בפיתוח בשפות Java, C# ויכולת לפתח פרויקטים מורכבים." },
{ id: 10, title: "מתכנת PHP", details: "פיתוח ב-PHP ועבודה עם מערכות ניהול תוכן (CMS). המשרות כוללות יצירת יישומים דינמיים ב-PHP ושדרוגים לפי הדרישות." },
{ id: 11, title: "מפתח Backend", details: "פיתוח בצד השרת וניסיון בבניית APIs. הזדמנות לעבוד עם שפות כמו Node.js, Python ו-Go." },
{ id: 12, title: "מהנדס תוכנה Junior", details: "התקנת, הגדרה ותחזוקת תוכנות. אחריות על בדיקות יחידה ושדרוגים לפי הצורך." },
{ id: 13, title: "מפתח iOS", details: "פיתוח אפליקציות למערכת iOS עם יכולת יצירת חוויות משתמש מרהיבות." },
{ id: 14, title: "מפתח Android", details: "פיתוח אפליקציות למערכת Android עם יכולת ליצור יישומים ידידותיים למשתמש." },
{ id: 15, title: "מפתח DevOps", details: "עבודה עם כלים ותהליכים לשדרוג ותחזוקת תשתיות טכנולוגיות." },
{ id: 16, title: "מפתח Embedded", details: "פיתוח תוכנה נטמעת למערכות מולטידיסציפלינריות. יכולת עבודה עם מערכות מולטימדיה." },
{ id: 17, title: "מפתחת Frontend", details: "פיתוח ממשקים חזותיים וניווט בצד הלקוח בקבוצת פיתוח דינמית." },
{ id: 18, title: "מפתחת Java", details: "פיתוח בשפת Java עם יכולת להתמודד עם פרויקטים מורכבים ומערכות גדולות." },
{ id: 19, title: "מהנדס נתונים", details: "עיבוד, ניתוח והפקת דוחות ממערכות מקורות נתונים שונים." },
{ id: 20, title: "מנהלת פרויקט", details: "ניהול פרויקטים טכנולוגיים עם יכולת ללוות את הצוות להצלחה." },

];



function JobAccordion({ job, isOpen, onClick }) {
    const jobRef = useRef(null);
  
    const toggleAccordion = () => {
      onClick();
    };
  
    return (
      
      <div
        className="text-amber-400 w-full p-2 border-t-2 border-amber-400 rounded "
        ref={jobRef}
        style={{
          height: isOpen ? "auto" : "50px", // Set a minimum height, adjust as needed
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
          cursor: "pointer",
        }}
        onClick={toggleAccordion}
      >
        <strong className="text-center block">{job.title}</strong>
        {isOpen && (
          <p className="text-white text-center block" style={{ margin: "10px 0" }}>
            {job.details}
          </p>
        )}
      </div>
    );
  }
  
  
  function Careers() {
    const [searchTerm, setSearchTerm] = useState("");
    const [openJobIndex, setOpenJobIndex] = useState(null);
  
    const filteredJobs = jobListingsData.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleJobClick = (index) => {
      setOpenJobIndex(index === openJobIndex ? null : index);
    };
  
    return (
      <>
      <div className="h-[550px]">
        <HeroSection firstTxt="We'd" yellowTxt=" love to hear" lastTxt=" from you"
            smallTxt="Let's talk about your website or projects. Send us a message and we will bein touch within
            <br /> one business day" buttonTxt="Learn More" />
       </div>
       <div className="w-60 h-12 bg-amber-400 mx-auto block rounded mb-20 relative">
        <img
          src="..\public\magnifying_glass_icon.png"
          alt="placeholder"
          className="absolute top-2 left-3 w-8 h-8 object-cover"
        />
        <input
          className="rounded w-full h-full pl-10 bg-amber-400 text-center placeholder-black"
          type="text"
          placeholder="חיפוש משרה"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
    </div>

        <div
          className="w-3/5 h-[500px] overflow-y-auto flex justify-center mb-[100px] mx-auto"
          // style={{ backgroundImage: "url('little-witch-folded-notes 1.png')" }}
        >
          
          <div className=" w-full flex lg:flex-row flex-col">
            <div className="w-full h-20 p-4">
              
              {filteredJobs.map((job, index) => (
                <JobAccordion
                  key={job.id}
                  job={job}
                  isOpen={index === openJobIndex}
                  onClick={() => handleJobClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Careers;
