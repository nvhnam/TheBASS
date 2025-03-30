import React from "react";

const Welcome = () => {
  return (
    <div className="w-full flex flex-col-reverse gap-5 md:flex-row items-center justify-center pl-4 py-10 max-w-6xl mb-15">
      {/* Left Section - Text */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl font-bold">Welcome to The BASS!</h1>
        <p className="text-lg mt-3 md:mt-7 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          consequuntur, voluptatem alias, impedit nostrum fugit accusamus porro
          error odit deserunt dolore dolorum exercitationem necessitatibus
          tenetur inventore, eaque dicta voluptate sed?
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg flex justify-center">
          <img
            src="../img/profile1.jpg"
            alt="The BASS's founder"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
