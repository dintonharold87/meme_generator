import React from "react";
import memesData from "./memesData";
const Meme = () => {
  // Function to get a random image from the `memesData` array
  //     when the "new meme image" button is clicked.
  function getMemeImage() {
    // acccessing the array where the memes are stored in the memesData file and storing them in a constant called memesArray
    const memesArray = memesData.data.memes;
    // getting a random number(random meme) from the array and using that index to get a random url
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log("clicked");
  }
  return (
    <section>
      <div className="container mx-auto w-full max-w-lg mt-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Top Text"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Bottom text"
            />
          </div>
          <button
            type="button"
            className="w-full mt-5 text-white bg-purple-800 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            onClick={getMemeImage}
          >
            Get a New Meme image
          </button>
        </div>
      </div>
    </section>
  );
};
export default Meme;
