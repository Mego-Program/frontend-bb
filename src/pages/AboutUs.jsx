import Benefits from "../components/Benefits"
import HeroSection from "../components/HeroSection";


export default function AboutUs() {
    
    return (<>
       
        <HeroSection 
                firstTxt="The art of visual "
                yellowTxt="story telling"
                lastTxt=""
                smallTxt="InnovaSol is a graphic designer agency that helps brands with compelling and persuasive designs. With more tham 1 million person-hours,
                we have worked with more than 500 brands across varios industries. Irrespective of whether you are pitching to investors, vying for clients or
                promoting your brand in this increasungly competitive world: our creative agency ensures to deleiver a strong audience-oriented messaging."
                buttonTxt="Learn More" />

        <div className="w-screen h-screen flex justify-center my-5"
            style={{ backgroundImage: "url('little-witch-folded-notes 1.png')" }}>
            <div className="w-[80%] h-[auto]">
                <div style={{marginBottom: "20px"}}>
                    <span className="text-white text-4xl font-bold capitalize leading-[72px]">The benefits </span>
                    <span className="text-amber-400 text-4xl font-bold capitalize leading-[72px]">for our team </span><br/>
                    <span className="text-white">The well being of each team member is really important to all of us. That is why we offer the following benefits.</span>
                </div>
                <div className="flex flex-wrap justify-between">
                  <Benefits num="1" title="HOLIDAYS" text="6 weeks of paid holidays as well as company holidays (Dec 24-Jan 1)"/>
                  <Benefits num="2" title="EU REMOTE" text="We are a 100% EU remote-first company. You can live and work from anywhere inside Europe."/>
                  <Benefits num="3" title="SURE AFTERNOON" text="If there are waves (or any other sport you enjoy) and you want to go for a surf, take off and enjoy."/>
                  <Benefits num="4" title="TEAM RETREATS" text="We do yearly team retreats where we strategize and go on an adventure trip to bond & forecast the future."/>
                  <Benefits num="5" title="TRANSPARENCY" text="You get insights into everything we do and you’re part of fundamental decisions like new hires, salaries, revenue etc."/>
                  <Benefits num="6" title="SUSTAINABILITY" text="We care about the well-being of mother nature. Work travels and team retreats are done with train."/>
                </div>
            </div>
        </div>
    </>)
}