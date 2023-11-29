import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="titel" role="img" aria-label="Tense Biceps">
          {props.type}
        </span>
        <span >{props.name}</span>
      </dt>
      <dd >{props.description}</dd>
      <button className="B-button">{props.btu}</button>
    </div>
  );
}

export default Entry;
