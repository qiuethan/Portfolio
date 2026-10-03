import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Scene from '../components/glass/Scene';
import SiteNav from '../components/glass/SiteNav';
import SiteFooter from '../components/glass/SiteFooter';
import Hero from '../components/home/Hero';
import NowSection from '../components/home/NowSection';
import CurrentWorkSection from '../components/home/CurrentWorkSection';
import usePageNavigation from '../hooks/usePageNavigation';
import WorkSection from '../components/home/WorkSection';
import ExperienceSection from '../components/home/ExperienceSection';
import OffHoursSection from '../components/home/OffHoursSection';
import { Page } from '../components/glass/primitives';

const Home: React.FC = () => {
  const { search } = useLocation();
  usePageNavigation('Ethan Qiu — Software Engineer, Toronto');

  // Preserve links to the library's former home-page tabs.
  const tab = new URLSearchParams(search).get('tab');
  if (tab === 'experiments' || tab === 'projects') {
    return <Navigate to={`/work${search}`} replace />;
  }

  return (
    <>
      <Scene />
      <Page>
        <SiteNav />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <NowSection />
          <CurrentWorkSection />
          <WorkSection />
          <ExperienceSection />
          <OffHoursSection />
        </main>
        <SiteFooter />
      </Page>
    </>
  );
};

export default Home;
