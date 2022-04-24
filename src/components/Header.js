import React from 'react'

const Header = () => {
  return (
    <section className="container mx-auto">
      <div className="inline-flex items-end justify-start pl-16 pr-20 pt-11 pb-6 bg-purple-800 w-full">
        <div className="flex items-center justify-center space-between">
          <div className="flex items-center justify-center">
            <img
              className="h-auto w-1/4"
              src={"../images/Troll Face.png"}
              alt="troll face"
            />
            <p className="text-xl md:text-3xl font-bold text-white">
              Meme Generator
            </p>
          </div>
          <p className="text-lg md:text-3xl font-medium  text-white">
            React Course - Project 3
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;