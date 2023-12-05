import Entry from "../components/Entry";
// import Pricing from "../../listpricing";
import React, { useState, useEffect } from 'react';
import { getPlansPage } from '../../cms-to-plansPage';


export default function Price() {
  
    const [plansPage, setPlansPage] = useState([]) 

useEffect(() => {
    async function fetchData() {
        const plPg = await getPlansPage();
        setPlansPage(plPg);
    }

    fetchData();
}, []);

// useEffect(() => {
//     if (plansPage) {
//         console.log(plansPage); 
//     }
// }, [plansPage]);

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
        <div>
            <dl className="dictionary">
                {plansPage.map(createEntry)}</dl>
        </div>
    )
}
