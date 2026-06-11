import React from 'react';
import Scene from '../components/glass/Scene';
import SiteNav from '../components/glass/SiteNav';
import SiteFooter from '../components/glass/SiteFooter';
import Hero from '../components/home/Hero';
import NowSection from '../components/home/NowSection';
import WorkSection from '../components/home/WorkSection';
import ExperienceSection from '../components/home/ExperienceSection';
import OffHoursSection from '../components/home/OffHoursSection';
import { Page } from '../components/glass/primitives';

const Home: React.FC = () => (
  <>
    <Scene />
    <Page>
      <SiteNav />
      <Hero />
      <NowSection />
      <WorkSection />
      <ExperienceSection />
      <OffHoursSection />
      <SiteFooter />
    </Page>
  </>
);

export default Home;
