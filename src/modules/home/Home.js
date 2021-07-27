import React from 'react';

import { HomeTitle } from './components/homeTitle/HomeTitle';
import { HomeDescription } from './components/homeDescription/HomeDescription';
import { TechnologyStack } from './components/technologyStack/TechnologyStack';
import { Footer } from './components/footer/Footer';

import './home.scss';

export const Home = () => (
  <>
    <main className="home-page-container">
      <div className="home-page-wrapper">
        <HomeTitle />
        <HomeDescription />
        <TechnologyStack />
      </div>
    </main>
    <Footer />
  </>
);
