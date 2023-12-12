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
