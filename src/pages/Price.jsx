import React, { useState, useEffect } from 'react';
import { getPlansPage } from '../cms-functions/cms-to-plansPage';
import { useNavigate } from 'react-router-dom';


function Entry(props) {

  const navigate = useNavigate();
  const navigateToPayments = () => {
    navigate('/payments');
  };

  return (
    <div className="term">
      <dt>
        <span className="titel">{props.title}</span>
        <span >{props.price}</span>
      </dt>
      <dd >{props.description}</dd>
      <button className="B-button" onClick={navigateToPayments}>{props.btu}</button>
    </div>
  );
}

export default function Price() {
  const [plansPage, setPlansPage] = useState([]);

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
      <div>
        <dl className="dictionary">
          {plansPage.map(createEntry)}</dl>
      </div>
    </>
  )
}
