import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const audioRef = useRef(null);
  useEffect(()=>{
    audioRef.current.play();
  },[])
  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <audio ref={audioRef} src="/music/Shane Filan - Beautiful In White (Official Video).mp3" loop autoPlay>
      </audio>
      <div className='md:flex'>
        <div className='md:shrink-0 w-full'>
          <img src="/images/Grey modern wedding invitation (1).png" alt="Wedding invitation" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default App;
