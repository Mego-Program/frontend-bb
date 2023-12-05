import YellowButton from "../components/Yellowutton";
import ContactForm from "../components/ContactForm";
import HeroSection from "../components/HeroSection";
import "../App.css";
// Added by Yakov:
import React, { useState, useEffect } from 'react';
import { getContactInfo } from '../../cms-to-ourContactInfo';
// End.


export default function ContactUs() {

    //  Added by Yakov:
    const [phoneNumbers, setPhoneNumbers] = useState([]);
    const [emails, setEmails] = useState([]);
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getContactInfo();

                setPhoneNumbers(data.map(info => info.phone_number));
                setEmails(data.map(info => info.email));
                setAddresses(data.map(info => info.address));
            } catch (error) {
                console.error('Error fetching contact data:', error);
            }
        }

        fetchData();
    }, []);
    // End.

    return (<>
        <HeroSection firstTxt="We'd" yellowTxt=" love to hear" lastTxt=" from you"
            smallTxt="Let's talk about your website or projects. Send us a message and we will bein touch within
            <br /> one business day" buttonTxt="Learn More" />

        <div className='w-[100vw] h-[1830px] flex justify-center'
            style={{ backgroundImage: "url('little-witch-folded-notes 1.png')", }}>
            <div className=" w-4/5 flex lg:flex-row flex-col">
                <div className='flex items-center h-[450px] w-full flex-col lg:flex-row'>
                    <div className=' w-1/2'>
                        <div className='text-left text-white text-4xl font-bold capitalize leading-10'>
                            <div className='my-5'>
                                <span className="">Get in</span>
                                <span className="text-amber-400 "> Touch</span>
                            </div>
                            <h4 className='text-lg font-normal my-10'>Let's talk about your website or projects.
                                Send us a message and we will bein touch within <br /> one business day</h4>
                            <div className="text-[14px] font-normal my-1">
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Phone</h3>
                                <p>OurContactInfo<br />csdvsv
                                    <br />+972 50 4156 575</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Email</h3>
                                <p>info@colmandevclub.com <br />support@colmandevclub.com <br />admin@colmandevclub.com</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Bnei Brakq Office</h3>
                                <p>4, Yonathan st. BB, Israel</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Jerusalem Office</h3>
                                <p>some random address</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Haifa Office</h3>
                                <p>some random address</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 flex'>
                        <div className="w-full h-[833px] flex justify-center bg-slate-900 rounded-[10px] border border-indigo-950">
                            <div className="w-[90%]">
                                <h3 className="text-[28px] font-bold text-amber-400 my-5 mr-5">Send A Message</h3>
                                <ContactForm />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>)
}

