import React from "react";
import Entry from "./Entry";
import Pricing from "../listpricing";

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

function App() {
  return (
    <div>
      <h1 className="H-h1">
        <span className="S-span">Pricing</span>
      </h1>
      <dl className="dictionary">{Pricing.map(createEntry)}</dl>
    </div>
  );
}

export default Pricing;
