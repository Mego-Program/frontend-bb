import React, { useState } from "react";
import YellowButton from "./Yellowutton";

function ContactForm() {
    // State variables to store form data
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        emailAddress: "",
        message: "",
    });

    // Function to handle changes in form fields
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform additional actions with the form data here
        console.log("Form Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                First Name:
                <input className="w-[45%] h-[55px] bg-slate-950 rounded-[10px] border border-indigo-950" 
                    type="text"
                    name="First Name"
                    placeholder="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />
            </label>

            <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                Last Name:
                <input className="w-[45%] h-[55px] bg-slate-950 rounded-[10px] border border-indigo-950"
                    type="text"
                    name="lastName"
                    placeholder="Type Your Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />
            </label>

            
            <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                Email:
                <input className="w-[95%] h-[55px] flex justify-center bg-slate-950 rounded-[10px] border border-indigo-950" 
                    type="email"
                    name="Email"
                    placeholder="Type Your Email"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                />
            </label>

            <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                Phone Number:
                <input className="w-[95%] h-[55px] flex justify-center bg-slate-950 rounded-[10px] border border-indigo-950"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter Your Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                />
            </label>


            <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                Message:
                <textarea className="w-[95%] h-[121px] bg-slate-950 rounded-[10px] border border-indigo-950" 
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                />
            </label>
            <YellowButton  txt="Send"/>
        </form>
    );
}

export default ContactForm;
