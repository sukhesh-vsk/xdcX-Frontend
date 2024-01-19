import React, { useRef } from 'react';
import { Banner, Navbar, PtP, Stake } from './components/index';
import intro from './assets/video/intro.webm';
import loop from './assets/video/loop.webm';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const loopRef = useRef(null);

  const handleVideoEnded = () => {
    loopRef.current.style.zIndex = 0;
    loopRef.current.style.opacity = 1;
    loopRef.current.play();
  };

  return (
    <div className='App video-background'>
      {/* <video ref={videoRef} onEnded={handleVideoEnded} autoPlay playsInline muted className='video intro'>
        <source src={intro} type='video/webm' />
      </video>
      <video ref={loopRef} loop playsInline muted className='video loop'>
        <source src={loop} type='video/webm' />
      </video> */}
      <Navbar />
      <Banner />
      <div className='divider'/>
      <PtP />
      <div className='divider'/>
      <Stake />
      <div className='divider'/>
    </div>
  );
}

export default App;