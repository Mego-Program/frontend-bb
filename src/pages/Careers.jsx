import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import { getCareers } from '../../cms-to-careers';

//  These blocks were created by Ary:
// const jobListingsData = [
//   { id: 1, title: "מהנדס פיתוח תוכנה", details: "מגוון משרות למהנדסי פיתוח תוכנה עם ניסיון בפיתוח בשפות כמו Java, C++, Python ועוד. המשרות כוללות פיתוח בצוותים גדולים ועבודה עם טכנולוגיות חדשות." },
//   { id: 2, title: "מעצב UI/UX", details: "הזדמנות לעבוד כמעצב UI/UX בחברת ניסיון ולקחת חלק בעיצוב ופיתוח של ממשקים משתמשים. התפקיד כולל יצירת עיצובים מרהיבים ובדיקת ממשקי משתמש." },
//   { id: 4, title: "מנהל מערכות מידע", details: "הזדמנות להשתלב בצוות מערכות מידע גדול ולנהל תשתיות IT מתקדמות. התפקיד כולל אחריות על פיתוח, תחזוקה ושדרוג של מערכות המידע." },
// { id: 5, title: "מתכנת Python", details: "מתכנת Python ומפתח אוטומציה? יש לך הזדמנות לעבוד על פרויקטים מתקדמים ולפתח תהליכים באמצעות התקנות פייתון." },
// { id: 6, title: "מהנדס QA", details: "משרות למהנדסי QA עם יכולת לבדוק ולוודא את איכות התוכנה. המשרות כוללות בדיקות ידניות ואוטומטיות, כתיבת סקריפטים ודרישות תוכנה." },
// { id: 7, title: "מפתח פרונט-אנד", details: "הזדמנות להשתלב בקבוצת פיתוח חדשנית ולפתח אתרים דינמיים וממשקים משתמשים מהמם. נדרש ניסיון בטכנולוגיות כמו React ו-Vue." },
// { id: 8, title: "מנהל מוצר", details: "כמנהל מוצר תוכל להוביל צוות פיתוח, לבנות ולמקד את המוצר. נדרשת יכולת ניהול יצירתית, יכולת ניהול פרויקטים ושיווק." },
// { id: 9, title: "מהנדס תוכנה Senior", details: "הזדמנות להוביל צוות פיתוח ולשפר את התשתית הטכנולוגית. נדרש ניסיון בפיתוח בשפות Java, C# ויכולת לפתח פרויקטים מורכבים." },
// { id: 10, title: "מתכנת PHP", details: "פיתוח ב-PHP ועבודה עם מערכות ניהול תוכן (CMS). המשרות כוללות יצירת יישומים דינמיים ב-PHP ושדרוגים לפי הדרישות." },
// { id: 11, title: "מפתח Backend", details: "פיתוח בצד השרת וניסיון בבניית APIs. הזדמנות לעבוד עם שפות כמו Node.js, Python ו-Go." },
// { id: 12, title: "מהנדס תוכנה Junior", details: "התקנת, הגדרה ותחזוקת תוכנות. אחריות על בדיקות יחידה ושדרוגים לפי הצורך." },
// { id: 13, title: "מפתח iOS", details: "פיתוח אפליקציות למערכת iOS עם יכולת יצירת חוויות משתמש מרהיבות." },
// { id: 14, title: "מפתח Android", details: "פיתוח אפליקציות למערכת Android עם יכולת ליצור יישומים ידידותיים למשתמש." },
// { id: 15, title: "מפתח DevOps", details: "עבודה עם כלים ותהליכים לשדרוג ותחזוקת תשתיות טכנולוגיות." },
// { id: 16, title: "מפתח Embedded", details: "פיתוח תוכנה נטמעת למערכות מולטידיסציפלינריות. יכולת עבודה עם מערכות מולטימדיה." },
// { id: 17, title: "מפתחת Frontend", details: "פיתוח ממשקים חזותיים וניווט בצד הלקוח בקבוצת פיתוח דינמית." },
// { id: 18, title: "מפתחת Java", details: "פיתוח בשפת Java עם יכולת להתמודד עם פרויקטים מורכבים ומערכות גדולות." },
// { id: 19, title: "מהנדס נתונים", details: "עיבוד, ניתוח והפקת דוחות ממערכות מקורות נתונים שונים." },
// { id: 20, title: "מנהלת פרויקט", details: "ניהול פרויקטים טכנולוגיים עם יכולת ללוות את הצוות להצלחה." },
// ];



function JobAccordion({ job, isOpen, onClick }) {
    const jobRef = useRef(null);
  
    const toggleAccordion = () => {
      onClick();
    };
  
    return (
      <div
        className="w-full p-2 border border-gray-300 rounded bg-white mb-2"
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
          <p className="text-center block" style={{ margin: "10px 0" }}>
            {job.details}
          </p>
        )}
      </div>
    );
  }
  
  
  function Careers() {
    const [searchTerm, setSearchTerm] = useState("");
    const [openJobIndex, setOpenJobIndex] = useState(null);
    const [jobListings, setJobListings] = useState([]);

    useEffect(() => {
      const fetchCareers = async () => {
        try {
          const careersData = await getCareers();
          setJobListings(careersData);
        } catch (error) {
          console.error('Failed to fetch careers:', error);
        }
      };
  
      fetchCareers();
    }, []);

    const filteredJobs = jobListings.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleJobClick = (jobId) => {
      const jobIndex = jobListings.findIndex(job => job.id === jobId);
      console.log('Job clicked: ', jobIndex);
      setOpenJobIndex(jobIndex === openJobIndex ? null : jobIndex);
    };
    
  
    return (
      <>
        <HeroSection firstTxt="We'd" yellowTxt=" love to hear" lastTxt=" from you"
            smallTxt="Let's talk about your website or projects. Send us a message and we will bein touch within
            <br /> one business day" buttonTxt="Learn More" />
        <input
                className="mx-auto text-center block h-18 w-4/5 p-2 border border-gray-300 rounded mb-20 justify-center"
                type="text"
                placeholder="חיפוש משרות"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
        <div
          className="w-full h-[500px] overflow-y-auto flex justify-center"
          style={{ backgroundImage: "url('little-witch-folded-notes 1.png')" }}
        >
          <div className=" w-4/5 flex lg:flex-row flex-col">
            <div className="w-full h-20 p-4">
              
              {filteredJobs.map((job, index) => (
                <JobAccordion
                  key={job.id}
                  job={job}
                  isOpen={job.id === jobListings[openJobIndex]?.id}
                  onClick={() => handleJobClick(job.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Careers;
