import React from 'react'
import Entry from '../Entry';
import Pricing from '../Pricing';

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
    return (<>
        <div className="bg-white ">Ido</div>
        <div>
            <h1 >
                <span>Pricing</span>
            </h1>
            <dl className="dictionary">{Pricing.map(createEntry)}</dl>
        </div>



    </>
    )
}
