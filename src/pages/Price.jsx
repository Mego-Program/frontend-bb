import React, { useState, useEffect } from 'react';
import { getPlansPage } from '../cms-functions/cms-to-plansPage';
import HeroSection from '../components/HeroSection';
import { getHeroSection } from '../cms-functions/cms-to-hero';


function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="titel">{props.title}</span>
        <span >{props.price}</span>
      </dt>
      <dd >{props.description}</dd>
      <span className="B-button" >{props.btu}</span>
    </div>
  );
}

export default function Price() {
  const [plansPage, setPlansPage] = useState([]);
  const [heroSection, setHeroSection] = useState({});

  useEffect(() => {
    async function fetchData() {
      const plPg = await getPlansPage();
      setPlansPage(plPg);
    }

    fetchData();
  }, []);

  useEffect(() => {
    getHeroSection('Price')
      .then(setHeroSection)
      .catch(console.error);
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
      <HeroSection 
          firstTxt={heroSection.desc1}
          yellowTxt={heroSection.desc2} 
          lastTxt={heroSection.desc3}
          smallTxt={heroSection.desc4}
          buttonTxt={heroSection.button} />
      <div>
        <dl className="dictionary">
          {plansPage.map(createEntry)}</dl>
      </div>
    </>
  )
}
