import YellowButton from "../Yellowutton";
import "../App.css";

export default function ContactUs() {
    return (<>
        <div className='w-[100vw] h-[800px] flex justify-center my-5 '
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
                            <h4 className='text-lg font-normal'>Let's talk about your website or projects. Send us a message and we will bein touch within <br /> one business day</h4>
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
        {/* <div className='w-[100vw] h-[1000px] flex justify-center'
            style={{ backgroundImage: "url('../public/little-witch-folded-notes.png')",
            
            
            }}>
                
        </div> */}

    </>)
}

