import React from 'react';
import Header from './Header';
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Footer from './Footer';
import Counter from './Counter';
import Clock from './Clock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Welcome />
        <AboutMe />
        <Contact />

      </main>
      <Footer />
    </div>
  );
}

export default App;
