import './DemoApp.css';
import { useEffect, useState } from 'react';

function DemoApp() {

  const [selectedButton , setSelectedButton] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; })=> {
        if (event.key === 'ArrowUp') {
          setSelectedButton((prevSelectedButton) => {
            const newIndex = (prevSelectedButton  -1 + 5) % 5;
            return newIndex;
          })
        }else if (event.key === 'ArrowDown') {
          setSelectedButton((prevSelectedButton) => {
            const newIndex = (prevSelectedButton + 1)% 5;
            return newIndex;
          })
        }
    }
    window.addEventListener('keydown' , handleKeyDown);

    return () => {
      window.removeEventListener('keydown' , handleKeyDown)
    }
  } , []) 


  return (
    <>
      <div className="PlayGround">
        <div className="Terminal bg-black mx-16 flex flex-col text-center h-screen font-mono">
          <p>Vedpy Personal Data Manager</p>
          <p>Use arrow keys to navigate , Enter to select an option</p>
        <div className="buttons flex flex-col items-center justify-center h-[70vh] text-[30px]">
          <button className={`${selectedButton === 0? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>Documentation</button>
          <button className={`${selectedButton === 1 ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>Add personal data</button>
          <button className={`${selectedButton === 2 ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>Display pesonal data</button>
          <button className={`${selectedButton === 3 ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>Exit</button>
          <button className={`${selectedButton === 4 ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}>Delete personal data</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default DemoApp;
