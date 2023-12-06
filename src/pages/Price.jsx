import Entry from '../Entry';
// import Pricing from "../../listpricing";
import React, { useState, useEffect } from 'react';
import { getPlansPage } from '../../cms-to-plansPage';
import HeroSection from '../HeroSection';




export default function Price() {

  
    const [plansPage, setPlansPage] = useState([]) 

useEffect(() => {
    async function fetchData() {
        const plPg = await getPlansPage();
        setPlansPage(plPg);
    }

    fetchData();
}, []);


function createEntry(priceTerm) {
    return (
      <Entry
        key={priceTerm.title}
        title={priceTerm.title}
        price={priceTerm.thePrice}
        description={priceTerm.text}
        btu={priceTerm.button}
      />
    );
  }

    return (
      <>

   

      <HeroSection firstTxt="We will be" yellowTxt=" happy to offer you" lastTxt=" the route that suits you."
          smallTxt="Send us a message and we will get back to you as soon as possible" buttonTxt="Learn More" />
      
      
        <div>
            <dl className="dictionary">
                {plansPage.map(createEntry)}</dl>
        </div>

       </> 
    )
}
