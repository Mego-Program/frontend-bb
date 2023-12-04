import Entry from '../Entry';
// import Pricing from "../../listpricing";
import React, { useState, useEffect } from 'react';
import { getPlansPage } from '../../cms-to-plansPage';

function createEntry(priceTerm) {
    return (
      <Entry
        title={priceTerm.title}
        price={priceTerm.the_price}
        description={priceTerm.text}
        btu={priceTerm.button}
      />
    );
  }

export default function Price() {
  
    const [plansPage, setPlansPage] = useState(getPlansPage) 

useEffect(() => {
    async function fetchData() {
        const plPg = await getPlansPage();
        // console.log(heroSec);
        const myPlan = {}
        plPg.forEach((plPg) => {
            myPlan[plPg.title] = plPg.description;
        })
        setPlansPage(myPlan);

        console.log({plPg})
    }

    fetchData();
}, []);

useEffect(() => {
    if (plansPage) {
        console.log(plansPage); 
    }
}, [plansPage]);


    return (<>
        <div>
            <dl className="dictionary">{plansPage.map(createEntry)}</dl>
        </div>



    </>
    )
}
