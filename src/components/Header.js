import React from 'react'

const Header = () => {
  return (
    <div
      className="inline-flex items-end justify-start pl-16 pr-20 pt-11 pb-6 bg-purple-800"
      
    >
      <div
        className="flex items-center justify-center"
        
      >
        <div className="flex items-center justify-center">
          <img
            className="h-auto max-w-full"
            src={'../images/Troll Face.png'} alt="troll face"
          />
          <p className="text-3xl font-bold text-white">Meme Generator</p>
        </div>
        <p className="text-2xl font-medium text-right text-white">
          React Course - Project 3
        </p>
      </div>
    </div>
  );
}

export default Header;