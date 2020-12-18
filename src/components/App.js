import React from 'react';

import { ScrollingProvider } from 'react-scroll-section';

import Backgrounds from './backgrounds/Backgrounds';
import Header from './header/Header';
import Landing from './landing/Landing';
import About from './about/About';
import Builder from './builder/Builder';
import Features from './features/Features';
import MoreFeatures from './features/MoreFeatures';
import Footer from './footer/Footer';

import '../style/app.css';

const App = () => {
  return (
    <ScrollingProvider>
      <Backgrounds>
        <Header />
        <Landing />
        <About />
        <Builder />
        <Features />
        <MoreFeatures />
        <Footer />
      </Backgrounds>
    </ScrollingProvider>
  );
};

export default App;
