import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="titel" >
          {props.type}
        </span>
        <span >{props.name}</span>
      </dt>
      <dd >{props.description}</dd>
      <span className="B-button" >
          {props.btu}
        </span>
      
    </div>
  );
}

export default Entry;
