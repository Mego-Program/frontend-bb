import Entry from '../Entry';
// import Pricing from "../../listpricing";
import React, { useState, useEffect } from 'react';
import { getPlansPage } from '../../cms-to-plansPage';

function createEntry(priceTerm) {
    return (
      <Entry
        key={priceTerm.id}
        type={priceTerm.titel}
        name={priceTerm.price}
        description={priceTerm.meaning}
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
            myPlan[plPg.department] = plPg.displayed_description;
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
        {/* <div className="bg-white ">Ido</div> */}
        <div>
            {/* <h1 >
                <span>Pricing</span>
            </h1> */}
            <dl className="dictionary">{plansPage.map(createEntry)}</dl>
        </div>



    </>
    )
}
