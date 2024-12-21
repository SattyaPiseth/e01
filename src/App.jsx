import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/Shane Filan - Beautiful In White (Official Video).mp3");
    audioRef.current.loop = true; // Set the audio to loop
    audioRef.current.play() // Attempt to autoplay the audio
      .catch(error => {
        console.error('Auto-play failed', error);
        // Handle the failure of auto-play here if needed, e.g., show a play button
      });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Release the audio resource
      }
    };
  }, []);

  return (
    <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:shrink-0 w-full'>
          <img src="/images/Grey modern wedding invitation (1).png" alt="Wedding invitation" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default App;
