import React from 'react'

// components/MainContent.js
const MainContent = () => {
    return (
        <div>
      <div className=" grid grid-cols-2  gap-2 ">
          <div className="rounded-3xl overflow-hidden shadow-lg bg-cover bg-center relative m-2" 
         style={{ backgroundImage: "url('/path/to/refining-room-image.png')" }}> {/* Replace with the actual path */}
      <div className="bg-black bg-opacity-40 flex items-center justify-center h-full p-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase">Refining Room</h2>
      </div>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-lg bg-cover bg-center relative m-2" 
         style={{ backgroundImage: "url('/path/to/refining-room-image.png')" }}> {/* Replace with the actual path */}
      <div className="bg-black bg-opacity-40 flex items-center justify-center h-full p-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase">Explore pets</h2>
      </div>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-lg bg-cover bg-center relative m-2" 
         style={{ backgroundImage: "url('/path/to/refining-room-image.png')" }}> {/* Replace with the actual path */}
      <div className="bg-black bg-opacity-40 flex items-center justify-center h-full p-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase">Wallet</h2>
      </div>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-lg bg-cover bg-center relative m-2" 
         style={{ backgroundImage: "url('/path/to/refining-room-image.png')" }}> {/* Replace with the actual path */}
      <div className="bg-black bg-opacity-40 flex items-center justify-center h-full p-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold uppercase">Rewards Earned</h2>
      </div>
    </div>
      </div>

<div className="bg-yellow-300 p-4 rounded-lg shadow-md max-w-md mx-auto mt-7 m-2" > {/* Replace with the actual path */}
<div className="text-black text-center">
  <p className="text-xl font-semibold">100.0% Filled</p>
  <div className="flex justify-between items-center ">
   
    <p className="text-4xl font-bold m-auto">0.104167</p>
    
  </div>
  <p>0.104 xMAPPA/hour</p>
  <p className="text-sm">Filled</p>
</div>

</div>
</div>
    );
  };

  export default MainContent;
  