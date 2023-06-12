import './DemoApp.css';
function DemoApp() {


  return (
    <>
      <div className="PlayGround">
        <div className="Terminal bg-black mx-16 flex flex-col text-center h-screen font-mono">
          <p>Vedpy Personal Data Manager</p>
          <p>Use arrow keys to navigate , Enter to select an option</p>
          
        <div className="buttons flex flex-col items-center justify-center h-[70vh] text-[30px]">
          <button className="hover:bg-white hover:text-black ">Documentation</button>
          <button className="hover:bg-white hover:text-black">Add personal data</button>
          <button className="hover:bg-white hover:text-black">Display pesonal data</button>
          <button className="hover:bg-white hover:text-black">Exit</button>
          <button className="hover:bg-white hover:text-black ">Delete personal data</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default DemoApp;
