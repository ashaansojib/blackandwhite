import React from 'react';
import Hero from './components/home/Hero';
import Notes from './components/Notes';
import Footer from './components/shared/Footer';
import Projects from './components/Projects';

const Home = () => {
  return (
    <div className='my-container'>
      <Hero />
      <Notes />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;<Hero />