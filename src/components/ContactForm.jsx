import React, { useState } from "react";
import YellowButton from "./Yellowutton";
// Added by Yakov:
import { datoApiClient } from "./datoApiClient"; // Make sure to import the API client
// The end.


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

    // Changed by Yakov:// Function to handle form submission
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // You can perform additional actions with the form data here
    //     console.log("Form Data:", formData);
    // };

    // Added by Yakov:
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await datoApiClient.createContact(formData);
            console.log("Data saved to DatoCMS", response);
        } catch (error) {
            console.error("Error saving data to DatoCMS", error);
        }
    };
    // The end.

    return (
        <form onSubmit={handleSubmit}>

            <div className="flex-col">
                <div className="flex flex-row gap-3 ">

                    <div className="flex flex-col w-1/2 ">
                        <label className="w-full text-white text-xl font-light capitalize leading-[34px]">

                            <div className="">
                                <h1>First Name:</h1>
                            </div>
                            <div className="">
                                <input className="w-full h-[55px] pl-5 bg-slate-950 rounded-[10px] border border-indigo-950"
                                    type="text"
                                    name="firstName"
                                    placeholder="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>


                        </label>
                    </div>

                    <div className="flex flex-col w-1/2">
                        <label className="w-full text-white text-xl font-light capitalize leading-[34px]">

                            <div className="">
                                <h1>Last Name:</h1>
                            </div>
                            <div className="">
                                <input className="w-full h-[55px] pl-5 bg-slate-950 rounded-[10px] border border-indigo-950"
                                    type="text"
                                    name="lastName"
                                    placeholder="Type Your Last Name"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                />
                            </div>


                        </label>
                    </div>

                </div>

                <div className="mt-7">
                    <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                        Email:
                        <input className="w-full h-[55px] pl-5 flex justify-center bg-slate-950 rounded-[10px] border border-indigo-950"
                            type="email"
                            name="emailAddress"
                            placeholder="Type Your Email"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="mt-7">
                    <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                        Phone Number:
                        <input className="w-full h-[55px] pl-5 flex justify-center bg-slate-950 rounded-[10px] border border-indigo-950"
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter Your Phone Number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>



                <div className="mt-7">
                    <label className="text-white text-xl font-light font-['Poppins'] capitalize leading-[34px]">
                        Message:
                        <textarea className="w-full h-[121px] pl-5 pt-3 bg-slate-950 rounded-[10px] border border-indigo-950"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>

                <div className="mt-7">
                    <YellowButton txt="Send" />
                </div>
            </div>
        </form>
    );
}


export default ContactForm;
