import React, { useState, useEffect } from 'react';
import { getPlansPage } from '../../cms-to-plansPage';
import HeroSection from '../components/HeroSection';
import Entry from '../components/Entry';
import { getHeroSection } from '../../cms-to-hero';

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
