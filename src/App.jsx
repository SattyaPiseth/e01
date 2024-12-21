import React, { useEffect, useRef } from 'react';
import './App.css'; // Ensure any additional custom styles are included

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
    };

    document.addEventListener('click', playAudio, { once: true }); // Play audio on first click anywhere
    return () => document.removeEventListener('click', playAudio);
  }, []);

  return (
    <div className='flex items-center justify-center w-full h-screen bg-white'> {/* Full-screen and center content */}
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full h-full flex items-center justify-center'> {/* Responsive max-width and full height */}
        <audio ref={audioRef} src="/music/Shane Filan - Beautiful In White (Official Video).mp3" loop>
        </audio>
        <div className='md:flex w-full h-full'>
          <div className='md:shrink-0 w-full h-full flex items-center justify-center'> {/* Ensure the image takes full height and width of its container */}
            <img src="/images/Grey modern wedding invitation (1).png" alt="Wedding invitation" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
