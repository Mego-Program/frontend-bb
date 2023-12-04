import YellowButton from "../Yellowutton";
import ContactForm from "../ContactForm";
import "../App.css";

export default function ContactUs() {
    return (<>
        <div className='w-[100vw] h-[800px] flex justify-center'
            style={{ backgroundImage: "url('../public/Lines 1.png')" }}>
            <div className=' w-4/5'>
                <div className='flex items-center h-[450px] w-full flex-col lg:flex-row'>
                    <div className=' w-2/3'>
                        <div className='text-left text-white text-4xl font-bold capitalize leading-10'>
                            <div className='my-2'>
                                <span className="">We'd</span>
                                <span className="text-amber-400 "> love to hear</span>
                                <span> from you</span>
                            </div>
                            <h4 className='text-lg font-normal'>Let's talk about your website or projects. Send us a message and we will bein touch within
                                <br /> one business day</h4>
                        </div>
                        <div style={{ marginTop: '70px' }}>
                            <YellowButton txt="Learn More" />
                        </div>
                    </div>
                    <div className='w-1/3 flex'>
                        <img className='w-[426px] h-[424px]' src="../public/developer_with_tags.png" alt="Working Developer" title='click on me' style={{ marginTop: '210px' }} />
                        {/* <img className='w-[64px] h-[64px]' src="../public/globle 1.png" alt="Globus Tag" title='click on me' /> */}
                    </div>

                </div>
            </div>
        </div>
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
                                <p>+972 54 3978 738 <br />+972 54 8161 863 <br />+972 50 4156 575</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Email</h3>
                                <p>info@colmandevclub.com <br />support@colmandevclub.com <br />admin@colmandevclub.com</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Bnei Brakq Office</h3>
                                <p>4, Yonathan st. BB, Israel</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Jerusalem Office</h3>
                                <p>some random address</p>
                                <h3 className="text-[28px] font-bold text-amber-400 my-5">Haifa Office</h3>
                                <p>some random address</p>
                            </div>
                            <div className=""></div>
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

