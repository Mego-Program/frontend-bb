import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import { getCareers } from '../../cms-to-careers';


function JobAccordion({ job, isOpen, onClick }) {
    const jobRef = useRef(null);
  
    const toggleAccordion = () => {
      onClick();
    };
  
    return (
      <div
      className="text-amber-400 w-full p-2 border-t-2 border-amber-400 rounded "        ref={jobRef}
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
    className="w-3/5 h-[500px] overflow-y-auto flex justify-center mb-[100px] mx-auto">
          <div className=" w-full flex lg:flex-row flex-col">
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
